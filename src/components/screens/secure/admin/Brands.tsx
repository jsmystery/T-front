"use client";

import { useState, useEffect, useRef } from 'react';
import styles from './Users.module.scss';

const Brands = () => {
  const [brands, setBrands] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [selectedBrand, setSelectedBrand] = useState(null);
  const [isConfirmingDelete, setIsConfirmingDelete] = useState(false);
  const popupRef = useRef(null);

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
                <button className={styles.editButton}>Товары</button>
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
              <input className={styles.userInput} type="text" value={selectedBrand.name} onChange={(e) => setSelectedBrand({ ...selectedBrand, name: e.target.value })} />
            </div>

            <div className={styles.popupField}>
              <label className={styles.popupLabel}>Город</label>
              <input className={styles.userInput} type="text" value={selectedBrand.city} onChange={(e) => setSelectedBrand({ ...selectedBrand, city: e.target.value })} />
            </div>

            <div className={styles.popupField}>
              <label className={styles.popupLabel}>Баланс</label>
              <input className={styles.userInput} type="number" value={selectedBrand.balance} onChange={(e) => setSelectedBrand({ ...selectedBrand, balance: parseFloat(e.target.value) })} />
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
