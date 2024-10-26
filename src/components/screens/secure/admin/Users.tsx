"use client";

import { useState, useEffect } from 'react';
import styles from './Users.module.scss';

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    setUsers([
      { id: 1, login: 'User1', email: 'user1@example.com', whatsapp: '+123456789', telegram: '@user1', phone: '123-456-7890', role: 'USER' },
      { id: 2, login: 'User2', email: 'user2@example.com', whatsapp: '+987654321', telegram: '@user2', phone: '098-765-4321', role: 'ADMIN' },
    ]);
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
              <td className={styles.tableCell}>
                <button className={styles.editButton}>Edit</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
