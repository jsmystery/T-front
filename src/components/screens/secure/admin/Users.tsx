"use client";

import { useState, useEffect, useRef } from 'react';
import { useAllUsersQuery, useUpdateUserProfileAdminMutation, useDeleteUserMutation } from '@/__generated__/output';
import styles from './Users.module.scss';
import toast from 'react-hot-toast'


const Users = () => {
  const [users, setUsers] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [isConfirmingDelete, setIsConfirmingDelete] = useState(false);
  const popupRef = useRef(null);

  const { data, loading, error, refetch } = useAllUsersQuery();

  useEffect(() => {
    if (data && data.allUsers) {
      setUsers(data.allUsers);
    }
  }, [data]);


  const [UpdateUserProfileMutateAdmin] = useUpdateUserProfileAdminMutation({
    fetchPolicy: 'no-cache',
    onError: ({ message }) => {
      toast.error(message);
    },
    onCompleted: async () => {
      console.log('user saved');
      toast.success("Пользователь сохранен");
      await refetch();
      setIsEditing(false);
    }
  });

  const [DeleteUserMutation] = useDeleteUserMutation({
    fetchPolicy: 'no-cache',
    onError: ({ message }) => {
      toast.error(message);
    },
    onCompleted: async () => {
      toast.success("Юзер успешно удален");
      await refetch();
      setIsConfirmingDelete(false);
    }
  });

  const handleEditClick = (user) => {
    setSelectedUser(user);
    setIsEditing(true);
  };

  const handleDeleteClick = (user) => {
    setSelectedUser(user);
    setIsConfirmingDelete(true);
  };

  const handleSave = () => {
    UpdateUserProfileMutateAdmin({
      variables: {
        input: {
          userId: selectedUser.id,
          whatsapp: selectedUser.whatsapp,
          telegram: selectedUser.telegram,
          phone: selectedUser.phone,
          email: selectedUser.email,
          login: selectedUser.login,
        },
      },
    });
    setIsEditing(false);
  };

  const handleConfirmDelete = () => {

    // setUsers(users.filter(user => user.id !== selectedUser.id));
    if (selectedUser) {
      DeleteUserMutation({
        variables: {
          id: selectedUser.id
        },
      });
    }
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

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading users.</p>;

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Пользователи</h1>
      <table className={styles.table}>
        <thead>
          <tr>
            <th className={styles.tableHeader}>ID</th>
            <th className={styles.tableHeader}>Login</th>
            <th className={styles.tableHeader}>Email</th>
            <th className={styles.tableHeader}>WhatsApp</th>
            <th className={styles.tableHeader}>Telegram</th>
            <th className={styles.tableHeader}>Номер</th>
            <th className={styles.tableHeader}>Роль</th>
            <th className={styles.tableHeader}>Регистрация</th>
            <th className={styles.tableHeader}>Управление</th>
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
              <td className={styles.tableCell}>{new Date(user.createdAt).toLocaleDateString()}</td>
              <td className={styles.tableCell}>
                <button className={styles.editButton} onClick={() => handleEditClick(user)}>Изменить</button>
                <button className={styles.editButton} onClick={() => handleDeleteClick(user)}>Удалить</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Edit User Popup */}
      {isEditing && selectedUser && (
        <div className={styles.popup}>
          <div className={styles.popupContent} ref={popupRef}>
            <h2 className={styles.popupHeader}>Редактировать</h2>
            <div className={styles.popupField}>
              <label className={styles.popupLabel}>Login</label>
              <input className={styles.userInput} type="text" value={selectedUser.login} onChange={(e) => setSelectedUser({ ...selectedUser, login: e.target.value })} />
            </div>
            <div className={styles.popupField}>
              <label className={styles.popupLabel}>Email</label>
              <input className={styles.userInput} type="email" value={selectedUser.email} onChange={(e) => setSelectedUser({ ...selectedUser, email: e.target.value })} />
            </div>
            <div className={styles.popupField}>
              <label className={styles.popupLabel}>WhatsApp</label>
              <input className={styles.userInput} type="text" value={selectedUser.whatsapp} onChange={(e) => setSelectedUser({ ...selectedUser, whatsapp: e.target.value })} />
            </div>
            <div className={styles.popupField}>
              <label className={styles.popupLabel}>Telegram</label>
              <input className={styles.userInput} type="text" value={selectedUser.telegram} onChange={(e) => setSelectedUser({ ...selectedUser, telegram: e.target.value })} />
            </div>
            <div className={styles.popupField}>
              <label className={styles.popupLabel}>Номер</label>
              <input className={styles.userInput} type="text" value={selectedUser.phone} onChange={(e) => setSelectedUser({ ...selectedUser, phone: e.target.value })} />
            </div>
            {/* <div className={styles.popupField}>
              <label className={styles.popupLabel}>Роль</label>
              <input className={styles.userInput} type="text" value={selectedUser.role} onChange={(e) => setSelectedUser({ ...selectedUser, role: e.target.value })} />
            </div> */}
            <button className={styles.saveButton} onClick={handleSave}>Сохранить</button>
          </div>
        </div>
      )}

      {/* Delete Confirmation Popup */}
      {isConfirmingDelete && selectedUser && (
        <div className={styles.popup}>
          <div className={styles.popupContent} ref={popupRef}>
            <h2 className={styles.popupHeader}>Подтвердите удаление</h2>
            <p>Вы уверены, что хотите удалить пользователя {selectedUser.login}?</p>
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

export default Users;
