'use client';

import Announcements from '@/components/blocks/announcements/Announcements';
import Container from '@/components/ui/common/container/Container';
import Section from '@/components/ui/common/section/Section';
import AccountSidebar from '@/components/ui/templates/account/sidebar/AccountSidebar';
import type { IAccount } from '@/shared/interfaces/api/brand/brand.interface';
import { useState, type FC } from 'react';
import styles from './Account.module.scss';
// import styles from '@/components/blocks/announcements/Announcements.module.scss'
import plusIcon from '@/assets/images/icons/plus.png';
import Picture from '@/components/ui/common/picture/Picture';

const Account: FC<IAccount> = ({
  searchParams,
  brand,
  tariffs,
  categories,
}) => {
  const [balance, setBalance] = useState(brand?.balance || 0);
  const [brandName, setBrandName] = useState(brand?.name || '');
  const [city, setCity] = useState(brand?.city || '');
  const [phone, setPhone] = useState(brand?.phone ||'');
  const [telegram, setTelegram] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [email, setEmail] = useState(brand?.email ||'');
  const [password, setPassword] = useState('');
  
  const isEdit = searchParams && searchParams.type === 'edit';

  if (!brand.id) {
    return (
      <Section className={styles.section}>
        <Container>
          <div>Бренд еще не создан</div>
        </Container>
      </Section>
    );
  }

  const handleSave = () => {
    // Logic to save the updated information goes here
    console.log('Saved data:', {
      brandName,
      city,
      phone,
      telegram,
      whatsapp,
      email,
      password,
    });
  };

  return (
    <Section className={styles.section}>
      <Container>
        <div className={styles.wrapper}>
          {isEdit ? (
            <div className={styles.editFormWrap}>
				 <div className={styles.inputWrap}>
                <label className={styles.label}>Имя бренда:</label>
                <input 
					 className={styles.inputEdit}
                  type="text" 
                  value={brandName} 
                  onChange={(e) => setBrandName(e.target.value)} 
                />
              </div>
				  <div className={styles.inputWrap}>
                <label className={styles.label}>Город:</label>
                <input
					   className={styles.inputEdit}
                  type="text" 
                  value={city} 
                  onChange={(e) => setCity(e.target.value)} 
                />
              </div>
				  <div className={styles.inputWrap}>
                <label className={styles.label}>Телефон:</label>
                <input 
					   className={styles.inputEdit}
                  type="text" 
                  value={phone} 
                  onChange={(e) => setPhone(e.target.value)} 
                />
              </div>
				  <div className={styles.inputWrap}>
                <label className={styles.label}>Telegram:</label>
                <input 
					   className={styles.inputEdit}
                  type="text" 
                  value={telegram} 
                  onChange={(e) => setTelegram(e.target.value)} 
                />
              </div>
				  <div className={styles.inputWrap}>
                <label className={styles.label}>WhatsApp:</label>
                <input 
					   className={styles.inputEdit}
                  type="text" 
                  value={whatsapp} 
                  onChange={(e) => setWhatsapp(e.target.value)} 
                />
              </div>
              <div className={styles.inputWrap}>
                <label className={styles.label}>Email:</label>
                <input 
					   className={styles.inputEdit}
                  type="email" 
                  value={email} 
                  onChange={(e) => setEmail(e.target.value)} 
                />
              </div>
              <div className={styles.inputWrap}>
                <label className={styles.label}>Пароль:</label>
                <input 
					   className={styles.inputEdit}
                  type="password" 
                  value={password} 
                  onChange={(e) => setPassword(e.target.value)} 
                />
              </div>
              <div className={styles.inputWrap}>
                <label className={styles.label}>Новый пароль:</label>
                <input 
					   className={styles.inputEdit}
                  type="password" 
                  value={password} 
                  onChange={(e) => setPassword(e.target.value)} 
                />
              </div>
				  <div className={styles.saveEditWrap}>
					<button className={styles.newad} onClick={handleSave}>
						<span className={styles.editSaveBtn}>
						СОХРАНИТЬ
						</span>
					</button>
            	</div>
            </div>
          ) : (
            <>
              <AccountSidebar balance={balance} brand={brand} />
              <Announcements setBalance={setBalance} tariffs={tariffs} />
            </>
          )}
        </div>

        {!isEdit && ( 
          <div className={styles.newAdWrap}>
            <button className={styles.newad}>
              <Picture src={plusIcon.src} alt="добавить товар" />
              <span>Добавить объявление</span>
            </button>
          </div>
        )}

      </Container>
    </Section>
  );
};

export default Account;
