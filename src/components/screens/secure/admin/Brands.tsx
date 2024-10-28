"use client";

import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import styles from './Users.module.scss';

const Brands = () => {
  const [brands, setBrands] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [selectedBrand, setSelectedBrand] = useState(null);
  const [isConfirmingDelete, setIsConfirmingDelete] = useState(false);
  const popupRef = useRef(null);
  const router = useRouter(); // Initialize router

  useEffect(() => {
    setBrands([
      { id: 1, userId: 101, created: '2023-01-15', name: 'Brand1', slug: 'brand1', city: 'City1', logoUrl: '/uploads/brands/brand-1-logo.png', balance: 500, rating: 4.5 },
      { id: 2, userId: 102, created: '2023-05-20', name: 'Brand2', slug: 'brand2', city: 'City2', logoUrl: '/uploads/brands/brand-1-logo.png', balance: 800, rating: 4.8 },
    ]);
  }, []);

  const handleEditClick = (brand) => {
    setSelectedBrand(brand);
    setIsEditing(true);
  };

  const handleDeleteClick = (brand) => {
    setSelectedBrand(brand);
    setIsConfirmingDelete(true);
  };

  const handleSave = () => {
    setIsEditing(false);
  };

  const handleConfirmDelete = () => {
    setBrands(brands.filter(brand => brand.id !== selectedBrand.id));
    setIsConfirmingDelete(false);
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

  const handleProductsClick = (brandId) => {
    router.push(`/products?brand=${brandId}`); // Navigate to /products with brandId
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Бренды</h1>
      <table className={styles.table}>
        <thead>
          <tr>
            <th className={styles.tableHeader}>ID Бренда</th>
            <th className={styles.tableHeader}>ID Пользователя</th>
            <th className={styles.tableHeader}>Создан</th>
            <th className={styles.tableHeader}>Название</th>
            <th className={styles.tableHeader}>Слаг</th>
            <th className={styles.tableHeader}>Город</th>
            <th className={styles.tableHeader}>Логотип</th>
            <th className={styles.tableHeader}>Баланс</th>
            <th className={styles.tableHeader}>Рейтинг</th>
            <th className={styles.tableHeader}>Управление</th>
          </tr>
        </thead>
        <tbody>
          {brands.map(brand => (
            <tr key={brand.id} className={styles.tableRow}>
              <td className={styles.tableCell}>{brand.id}</td>
              <td className={styles.tableCell}>{brand.userId}</td>
              <td className={styles.tableCell}>{brand.created}</td>
              <td className={styles.tableCell}>{brand.name}</td>
              <td className={styles.tableCell}>{brand.slug}</td>
              <td className={styles.tableCell}>{brand.city}</td>
              <td className={styles.tableCell}>
                <img src={brand.logoUrl} alt={brand.name} className={styles.logoImage} />
              </td> 
              <td className={styles.tableCell}>{brand.balance}</td>
              <td className={styles.tableCell}>{brand.rating}</td>
              <td className={styles.tableCell}>
                <button className={styles.editButton} onClick={() => handleEditClick(brand)}>Изменить</button>
                <button className={styles.editButton} onClick={() => handleDeleteClick(brand)}>Удалить</button>
                <button className={styles.editButton} onClick={() => handleProductsClick(brand.id)}>Товары</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Edit and Delete popups remain unchanged */}
    </div>
  );
};

export default Brands;
