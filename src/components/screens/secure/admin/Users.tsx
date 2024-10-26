"use client";

import { useState, useEffect, useRef } from 'react';
import styles from './Users.module.scss';

const Users = () => {
  const [users, setUsers] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const popupRef = useRef(null);

  useEffect(() => {
    setUsers([
      { id: 1, login: 'User1', email: 'user1@example.com', whatsapp: '+123456789', telegram: '@user1', phone: '123-456-7890', role: 'USER', registrationDate: '2023-01-15' },
      { id: 2, login: 'User2', email: 'user2@example.com', whatsapp: '+987654321', telegram: '@user2', phone: '098-765-4321', role: 'ADMIN', registrationDate: '2023-05-20' },
    ]);
  }, []);

  const handleEditClick = (user) => {
    setSelectedUser(user);
    setIsEditing(true);
  };

  const handleSave = () => {
    setIsEditing(false);
  };

  const handleClickOutside = (e) => {
    if (popupRef.current && !popupRef.current.contains(e.target)) {
      setIsEditing(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Users List</h1>
      <table className={styles.table}>
        <thead>
          <tr>
            <th className={styles.tableHeader}>ID</th>
            <th className={styles.tableHeader}>Login</th>
            <th className={styles.tableHeader}>Email</th>
            <th className={styles.tableHeader}>WhatsApp</th>
            <th className={styles.tableHeader}>Telegram</th>
            <th className={styles.tableHeader}>Phone</th>
            <th className={styles.tableHeader}>Role</th>
            <th className={styles.tableHeader}>Registration Date</th>
            <th className={styles.tableHeader}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id} className={styles.tableRow}>
              <td className={styles.tableCell}>{user.id}</td>
              <td className={styles.tableCell}>{user.login}</td>
              <td className={styles.tableCell}>{user.email}</td>
              <td className={styles.tableCell}>{user.whatsapp}</td>
              <td className={styles.tableCell}>{user.telegram}</td>
              <td className={styles.tableCell}>{user.phone}</td>
              <td className={styles.tableCell}>{user.role}</td>
              <td className={styles.tableCell}>{user.registrationDate}</td>
              <td className={styles.tableCell}>
                <button className={styles.editButton} onClick={() => handleEditClick(user)}>Edit</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Edit User Popup */}
      {isEditing && selectedUser && (
        <div className={styles.popup}>
          <div className={styles.popupContent} ref={popupRef}>
            <h2>Edit User</h2>
            <div className={styles.popupField}>
              <label className={styles.popupLabel}>Login</label>
              <input className={styles.userInput}  type="text" value={selectedUser.login} onChange={(e) => setSelectedUser({ ...selectedUser, login: e.target.value })} />
            </div>
            
            <div className={styles.popupField}>
              <label className={styles.popupLabel}>Email</label>
              <input className={styles.userInput}  type="email" value={selectedUser.email} onChange={(e) => setSelectedUser({ ...selectedUser, email: e.target.value })} />
            </div>

            <div className={styles.popupField}>
              <label className={styles.popupLabel}>WhatsApp</label>
              <input className={styles.userInput} type="text" value={selectedUser.whatsapp} onChange={(e) => setSelectedUser({ ...selectedUser, whatsapp: e.target.value })} />
            </div>

            <div className={styles.popupField}>
              <label className={styles.popupLabel}>Telegram</label>
              <input className={styles.userInput}  type="text" value={selectedUser.telegram} onChange={(e) => setSelectedUser({ ...selectedUser, telegram: e.target.value })} />
            </div>

            <div className={styles.popupField}>
              <label className={styles.popupLabel}>Phone</label>
              <input className={styles.userInput} type="text" value={selectedUser.phone} onChange={(e) => setSelectedUser({ ...selectedUser, phone: e.target.value })} />
            </div>

            <div className={styles.popupField}>
              <label className={styles.popupLabel}>Role</label>
              <input className={styles.userInput}  type="text" value={selectedUser.role} onChange={(e) => setSelectedUser({ ...selectedUser, role: e.target.value })} />
            </div>

            <button className={styles.saveButton} onClick={handleSave}>Save</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Users;
