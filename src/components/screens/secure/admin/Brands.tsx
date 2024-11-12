"use client";

import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast'
import styles from './Users.module.scss';
import { Sort, useBrandsQuery, useUpdateBrandAdminMutation } from '@/__generated__/output';
import Image from 'next/image';

interface Brand {
  id: number;
  name: string;
  slug: string;
  logoPath: string;
  rating: string;
  reviewsCount: number;
  about: string;
  city: string;
  category: {
    name: string;
    slug: string;
  };
}

const Brands = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [selectedBrand, setSelectedBrand] = useState<Brand | null>(null);
  const [isConfirmingDelete, setIsConfirmingDelete] = useState(false);
  const popupRef = useRef(null);
  const router = useRouter();

  const { data, loading, error, refetch } = useBrandsQuery({
    variables: {
      query: {
        page: 1,
        perPage: 30,
        sort: Sort.Desc,
      },
    },
  });

  const brands = data?.brands?.brands || [];

  const handleEditClick = (brand: Brand) => {
    setSelectedBrand(brand);
    setIsEditing(true);
  };

  const handleDeleteClick = (brand: Brand) => {
    setSelectedBrand(brand);
    setIsConfirmingDelete(true);
  };

  const handleSave = () => {
    UpdateBrandMutateAdmin({
      variables: {
        id: selectedBrand.id,
        input: {
          name: selectedBrand.name,
          city: selectedBrand.city,
          about: selectedBrand.about,
          slug: selectedBrand.slug,
          logoPath: selectedBrand.logoPath,
        },
      },
    });
  };

  const handleConfirmDelete = () => {
    // Implement your deletion mutation logic here
    setIsConfirmingDelete(false);
  };

  const handleCancelDelete = () => {
    setIsConfirmingDelete(false);
  };

  const handleClickOutside = (e: MouseEvent) => {
    if (popupRef.current && !popupRef.current.contains(e.target as Node)) {
      setIsEditing(false);
      setIsConfirmingDelete(false);
    }
  };

  const handleKeyDown = (e: KeyboardEvent) => {
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

  const handleProductsClick = (brandId: number) => {
    router.push(`/admin-panel/products?brand=${brandId}`);
  };

  const [UpdateBrandMutateAdmin] = useUpdateBrandAdminMutation({
    fetchPolicy: 'no-cache',
    onError: ({ message }) => {
      toast.error(message);
    },
    onCompleted: async () => {
      console.log('Brand saved');
      toast.success("Бренд сохранен");
      await refetch();
      setIsEditing(false);
    }
  });

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading brands</div>;

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Бренды</h1>
      <table className={styles.table}>
        <thead>
          <tr>
            <th className={styles.tableHeader}>ID</th>
            <th className={styles.tableHeader}>Название</th>
            <th className={styles.tableHeader}>Слаг</th>
            <th className={styles.tableHeader}>Город</th>
            <th className={styles.tableHeader}>Логотип</th>
            <th className={styles.tableHeader}>Рейтинг</th>
            <th className={styles.tableHeader}>Отзывы</th>
            <th className={styles.tableHeader}>Категория</th>
            <th className={styles.tableHeader}>Описание</th>
            <th className={styles.tableHeader}>Управление</th>
          </tr>
        </thead>
        <tbody>
          {brands.map((brand: Brand) => (
            <tr key={brand.id} className={styles.tableRow}>
              <td className={styles.tableCell}>{brand.id}</td>
              <td className={styles.tableCell}>{brand.name}</td>
              <td className={styles.tableCell}>{brand.slug}</td>
              <td className={styles.tableCell}>{brand.city}</td>
              <td className={styles.tableCell}>
                {brand.logoPath && (
                  <Image 
                    src={brand.logoPath} 
                    alt={brand.name} 
                    width={50} 
                    height={50}
                    className={styles.logoImage} 
                  />
                )}
              </td>
              <td className={styles.tableCell}>{brand.rating}</td>
              <td className={styles.tableCell}>{brand.reviewsCount}</td>
              <td className={styles.tableCell}>{brand.category.name}</td>
              <td className={styles.tableCell}>{brand.about.slice(0, 33)}...</td>
              <td className={styles.tableCell}>
                <button className={styles.editButton} onClick={() => handleEditClick(brand)}>Изменить</button>
                <button className={styles.editButton} onClick={() => handleDeleteClick(brand)}>Удалить</button>
                <button className={styles.editButton} onClick={() => handleProductsClick(brand.id)}>Товары</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Edit Brand Popup */}
      {isEditing && selectedBrand && (
        <div className={styles.popup}>
          <div className={styles.popupContent} ref={popupRef}>
            <h2 className={styles.popupHeader}>Редактировать</h2>

            <div className={styles.popupField}>
              <label className={styles.popupLabel}>Название</label>
              <input
                className={styles.userInput}
                type="text"
                value={selectedBrand.name}
                onChange={(e) => setSelectedBrand({ ...selectedBrand, name: e.target.value })}
              />
            </div>

            <div className={styles.popupField}>
              <label className={styles.popupLabel}>Город</label>
              <input
                className={styles.userInput}
                type="text"
                value={selectedBrand.city}
                onChange={(e) => setSelectedBrand({ ...selectedBrand, city: e.target.value })}
              />
            </div>

            <div className={styles.popupField}>
              <label className={styles.popupLabel}>Слаг</label>
              <input
                className={styles.userInput}
                type="text"
                value={selectedBrand.slug}
                onChange={(e) => setSelectedBrand({ ...selectedBrand, slug: e.target.value })}
              />
            </div>

            <div className={styles.popupField}>
              <label className={styles.popupLabel}>Описание</label>
              <textarea
                className={styles.userInput}
                value={selectedBrand.about}
                onChange={(e) => setSelectedBrand({ ...selectedBrand, about: e.target.value })}
                rows={3}
              />
            </div>

            <div className={styles.popupField}>
              <label className={styles.popupLabel}>Логотип (путь)</label>
              <input
                className={styles.userInput}
                type="text"
                value={selectedBrand.logoPath}
                onChange={(e) => setSelectedBrand({ ...selectedBrand, logoPath: e.target.value })}
              />
            </div>

            <button className={styles.saveButton} onClick={handleSave}>Сохранить</button>
          </div>
        </div>
      )}

      {/* Delete Confirmation Popup */}
      {isConfirmingDelete && selectedBrand && (
        <div className={styles.popup}>
          <div className={styles.popupContent} ref={popupRef}>
            <h2 className={styles.popupHeader}>Подтвердите удаление</h2>
            <p>Вы уверены, что хотите удалить бренд {selectedBrand.name}?</p>
            <div className="flex justify-center">
              <button className={styles.saveButton} onClick={handleConfirmDelete}>Да</button>
              <button className={styles.saveButton} onClick={handleCancelDelete}>Нет</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Brands;