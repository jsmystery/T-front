"use client";

import { useState, useEffect, useRef } from 'react';
import { Sort } from '@/__generated__/output';
import { useRouter, useSearchParams } from 'next/navigation';
import styles from './Users.module.scss';
import { useAnnouncementsAdmin } from '@/hooks/queries/product/useAnnouncementsAdmin.hook';
import { useDeleteProductAdminMutation } from '@/__generated__/output'
import toast from 'react-hot-toast'


const Products = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [products, setProducts] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isConfirmingDelete, setIsConfirmingDelete] = useState(false);
  const popupRef = useRef(null);

  // Get brandId from URL query parameters, default to null if not present
  const brandId = searchParams.get('brand') ? Number(searchParams.get('brand')) : null;

  // Fetch announcements data
  const {
    announcements: initialAnnouncements,
    error,
    refetch
  } = useAnnouncementsAdmin(
    {
      perPage: 100,
      page: 1,
      sort: Sort.Desc,
      brandId: brandId
    }
  );

  useEffect(() => {
    // Redirect to a default brand if no brandId is provided
    if (!brandId) {
      router.push('/admin-panel/products?brand=2');
      return;
    }

    // Transform the `initialAnnouncements` data to match the products table structure
    if (initialAnnouncements) {
      const transformedProducts = initialAnnouncements.map((announcement) => ({
        brandId: announcement.id,
        productId: announcement.id,
        created: announcement.createdAt,
        name: announcement.name,
        sku: announcement.sku,
        posterUrl: announcement.posterPath,
        imagesUrls: announcement.pricesFull.map((price) => `/images/${price.minQuantity}.jpg`),
        rating: announcement.rating
      }));
      setProducts(transformedProducts);
    }
  }, [initialAnnouncements, brandId, router]);

  // Error handling
  useEffect(() => {
    if (error) {
      console.error('Error fetching announcements:', error);
    }
  }, [error]);


	const [deleteProductMutate] = useDeleteProductAdminMutation({
		fetchPolicy: 'no-cache',
		onError: ({ message }) => {
			toast.error(message)
		},
		onCompleted: () => {
			// onDeleteAnnouncement()
		}
	})




  const handleEditClick = (product) => {
    setSelectedProduct(product);
    setIsEditing(true);
  };

  const handleDeleteClick = (product) => {
    setSelectedProduct(product);
    setIsConfirmingDelete(true);
  };

  const handleSave = () => {
    setIsEditing(false);
    // Optionally refetch data after save
    refetch();
  };

  const handleConfirmDelete = () => {
    setProducts(products.filter(product => product.productId !== selectedProduct.productId));
    deleteProductMutate({
      variables: {
        id: selectedProduct.productId,
        brandId: Number(brandId),
      }})
    setIsConfirmingDelete(false);
    // Optionally refetch data after delete
    refetch();
  };

  const handleCancelDelete = () => {
    setIsConfirmingDelete(false);
  };

  const handleClickOutside = (e) => {
    if (popupRef.current && !popupRef.current.contains(e.target)) {
      setIsEditing(false);
      setIsConfirmingDelete(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      setIsEditing(false);
      setIsConfirmingDelete(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  if (!brandId) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Продукты - Бренд {brandId}</h1>
      <table className={styles.table}>
        {/* Rest of your table code remains the same */}
        <thead>
          <tr>
            <th className={styles.tableHeader}>ID Бренда</th>
            <th className={styles.tableHeader}>ID Продукта</th>
            <th className={styles.tableHeader}>Создан</th>
            <th className={styles.tableHeader}>Название</th>
            <th className={styles.tableHeader}>Артикул (SKU)</th>
            <th className={styles.tableHeader}>Постер</th>
            <th className={styles.tableHeader}>Изображения</th>
            <th className={styles.tableHeader}>Рейтинг</th>
            <th className={styles.tableHeader}>Действия</th>
          </tr>
        </thead>
        <tbody>
          {products.map(product => (
            <tr key={product.productId} className={styles.tableRow}>
              <td className={styles.tableCell}>{product.brandId}</td>
              <td className={styles.tableCell}>{product.productId}</td>
              <td className={styles.tableCell}>{product.created}</td>
              <td className={styles.tableCell}>{product.name}</td>
              <td className={styles.tableCell}>{product.sku}</td>
              <td className={styles.tableCell}>
                <img src={product.posterUrl} alt="poster" className={styles.posterImage} />
              </td>
              <td className={styles.tableCell}>{product.imagesUrls.join(', ')}</td>
              <td className={styles.tableCell}>{product.rating}</td>
              <td className={styles.tableCell}>
                <button className={styles.editButton} onClick={() => handleEditClick(product)}>Изменить</button>
                <button className={styles.editButton} onClick={() => handleDeleteClick(product)}>Удалить</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Popup components remain the same */}
      {isEditing && selectedProduct && (
        <div className={styles.popup}>
          <div className={styles.popupContent} ref={popupRef}>
            <h2 className={styles.popupHeader}>Редактировать</h2>
            <div className={styles.popupField}>
              <label className={styles.popupLabel}>Название</label>
              <input className={styles.userInput} type="text" value={selectedProduct.name} onChange={(e) => setSelectedProduct({ ...selectedProduct, name: e.target.value })} />
            </div>

            <div className={styles.popupField}>
              <label className={styles.popupLabel}>Постер</label>
              <input className={styles.userInput} type="text" value={selectedProduct.posterUrl} onChange={(e) => setSelectedProduct({ ...selectedProduct, posterUrl: e.target.value })} />
            </div>

            <div className={styles.popupField}>
              <label className={styles.popupLabel}>Изображения</label>
              <input className={styles.userInput} type="text" value={selectedProduct.imagesUrls.join(', ')} onChange={(e) => setSelectedProduct({ ...selectedProduct, imagesUrls: e.target.value.split(', ') })} />
            </div>

            <button className={styles.saveButton} onClick={handleSave}>Сохранить</button>
          </div>
        </div>
      )}

      {isConfirmingDelete && selectedProduct && (
        <div className={styles.popup}>
          <div className={styles.popupContent} ref={popupRef}>
            <h2 className={styles.popupHeader}>Подтвердите удаление</h2>
            <p>Вы уверены, что хотите удалить продукт {selectedProduct.name}?</p>
            <div className='flex justify-center'>
              <button className={styles.saveButton} onClick={handleConfirmDelete}>Да</button>
              <button className={styles.saveButton} onClick={handleCancelDelete}>Нет</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Products;