"use client";

import { useState, useEffect, useRef } from 'react';
import styles from './Users.module.scss';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isConfirmingDelete, setIsConfirmingDelete] = useState(false); // State for confirmation popup
  const popupRef = useRef(null);

  useEffect(() => {
    setProducts([
      { brandId: 1, productId: 101, created: '2023-01-15', name: 'Product1', sku: 'SKU001', posterUrl: '/uploads/products/product-2-poster.png', imagesUrls: ['/images/product1-1.jpg', '/images/product1-2.jpg'], rating: 4.5 },
      { brandId: 2, productId: 102, created: '2023-05-20', name: 'Product2', sku: 'SKU002', posterUrl: '/uploads/products/product-2-poster.png', imagesUrls: ['/images/product2-1.jpg', '/images/product2-2.jpg'], rating: 4.7 },
    ]);
  }, []);

  const handleEditClick = (product) => {
    setSelectedProduct(product);
    setIsEditing(true);
  };

  const handleDeleteClick = (product) => {
    setSelectedProduct(product);
    setIsConfirmingDelete(true); // Show confirmation popup
  };

  const handleSave = () => {
    setIsEditing(false);
  };

  const handleConfirmDelete = () => {
    setProducts(products.filter(product => product.productId !== selectedProduct.productId));
    setIsConfirmingDelete(false);
  };

  const handleCancelDelete = () => {
    setIsConfirmingDelete(false);
  };

  const handleClickOutside = (e) => {
    if (popupRef.current && !popupRef.current.contains(e.target)) {
      setIsEditing(false);
      setIsConfirmingDelete(false); // Close confirmation popup
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') { 
      setIsEditing(false);
      setIsConfirmingDelete(false); // Close confirmation popup
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown); // Add keydown listener

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown); // Cleanup listener
    };
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Продукты</h1>
      <table className={styles.table}>
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

      {/* Edit Product Popup */}
      {isEditing && selectedProduct && (
        <div className={styles.popup}>
          <div className={styles.popupContent} ref={popupRef}>
            <h2 className={styles.popupHeader}>Редактировать</h2>
            <div className={styles.popupField}>
              <label className={styles.popupLabel}>Название</label>
              <input className={styles.userInput} type="text" value={selectedProduct.name} onChange={(e) => setSelectedProduct({ ...selectedProduct, name: e.target.value })} />
            </div>
            
            <div className={styles.popupField}>
              <label className={styles.popupLabel}>Артикул (SKU)</label>
              <input className={styles.userInput} type="text" value={selectedProduct.sku} onChange={(e) => setSelectedProduct({ ...selectedProduct, sku: e.target.value })} />
            </div>

            <div className={styles.popupField}>
              <label className={styles.popupLabel}>Постер</label>
              <input className={styles.userInput} type="text" value={selectedProduct.posterUrl} onChange={(e) => setSelectedProduct({ ...selectedProduct, posterUrl: e.target.value })} />
            </div>

            <div className={styles.popupField}>
              <label className={styles.popupLabel}>Изображения</label>
              <input className={styles.userInput} type="text" value={selectedProduct.imagesUrls.join(', ')} onChange={(e) => setSelectedProduct({ ...selectedProduct, imagesUrls: e.target.value.split(', ') })} />
            </div>

            <div className={styles.popupField}>
              <label className={styles.popupLabel}>Рейтинг</label>
              <input className={styles.userInput} type="number" value={selectedProduct.rating} onChange={(e) => setSelectedProduct({ ...selectedProduct, rating: e.target.value })} />
            </div>

            <button className={styles.saveButton} onClick={handleSave}>Сохранить</button>
          </div>
        </div>
      )}

      {/* Delete Confirmation Popup */}
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
