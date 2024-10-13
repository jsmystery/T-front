'use client';

import { useUpdateUserProfileMutation, useUpdateBrandMutation, useCreateBrandMutation } from '@/__generated__/output'
import Announcements from '@/components/blocks/announcements/Announcements';
import Container from '@/components/ui/common/container/Container';
import Section from '@/components/ui/common/section/Section';
import AccountSidebar from '@/components/ui/templates/account/sidebar/AccountSidebar';
import type { IAccount } from '@/shared/interfaces/api/brand/brand.interface';
import { useState, type FC } from 'react';
import styles from './Account.module.scss';
import toast from 'react-hot-toast'
import { useRouter } from 'next/navigation'
import plusIcon from '@/assets/images/icons/plus.png';
import Picture from '@/components/ui/common/picture/Picture';

const Account: FC<IAccount> = ({
  searchParams,
  brand,
  tariffs,
  categories,
}) => {

	const router = useRouter();

	const [UpdateUserProfileMutate] = useUpdateUserProfileMutation({
		fetchPolicy: 'no-cache',
		onError: ({ message }) => {
			toast.error(message)
		},
		onCompleted: () => {
			console.log('save profie');
			toast.success("Сохранено")
			
		}
	})

	const [UpdateBrandMutate] = useUpdateBrandMutation({
		fetchPolicy: 'no-cache',
		onError: ({ message }) => {
		  toast.error(message);
		},
		onCompleted: () => {
		  console.log('Brand saved');
		  toast.success("Бренд сохранен");
		}
	 });

	const [CreateBrandMutate] = useCreateBrandMutation({
		fetchPolicy: 'no-cache',
		onError: ({ message }) => {
		  toast.error(message);
		},
		onCompleted: () => {
		  console.log('Brand created');
		  toast.success("Бренд создан");
			router.push('/');
		}
	 });
  


  const [balance, setBalance] = useState(brand?.balance || 0);
  const [brandName, setBrandName] = useState(brand?.name || '');
  const [city, setCity] = useState(brand?.city || '');
  const [phone, setPhone] = useState(brand?.phone ||'');
  const [telegram, setTelegram] = useState(brand?.telegram || '');
  const [whatsapp, setWhatsapp] = useState(brand?.whatsapp || '');
  const [email, setEmail] = useState(brand?.email ||'');
  const [about, setAbout] = useState(brand?.about ||'');
  const [password, setPassword] = useState('');
  const [slug, setSlug] = useState('');
  const [newPassword, setNewPassword] = useState('');
  
  const isEdit = searchParams && searchParams.type === 'edit';
//   const isEditItem = searchParams && searchParams.type === 'edit-item';


  const handleCreateBrand = () => {
	if (!brandName || !city || !about) {
      toast.error("Пожалуйста, заполните все поля для создания бренда.");
      return;
    }


	 CreateBrandMutate({
      variables: {
			// id: brand.id,
        input: {
          name: brandName,
          city: city,
          about: about,	
			 slug: slug,
			 logoPath: '/uploads/brands/brand-1.png'
        },
      },
    });

  };

  if (!brand?.id) {
    return (
      <Section className={styles.section}>
        <Container>
		  <div className={styles.editFormWrap}>
					<div>
					<div className={`${styles.editHeader} text-center`}><h2>Создать бренд</h2></div>
				 <div className={styles.inputWrap}>
                <label className={styles.label}>Имя бренда</label>
                <input 
					 className={styles.inputEdit}
                  type="text" 
                  value={brandName} 
                  onChange={(e) => setBrandName(e.target.value)} 
                />
              </div>
				  <div className={styles.inputWrap}>
                <label className={styles.label}>Город</label>
                <input
					   className={styles.inputEdit}
                  type="text" 
                  value={city} 
                  onChange={(e) => setCity(e.target.value)} 
                />
              </div>
				  <div className={styles.inputWrap}>
                <label className={styles.label}>URL</label>
                <input
					   className={styles.inputEdit}
                  type="text" 
                  value={slug} 
                  onChange={(e) => setSlug(e.target.value)} 
                />
              </div>
				  <div className={styles.inputWrap}>
                <label className={styles.label}>Описание</label>
                <input
					   className={styles.inputEdit}
                  type="textarea" 
                  value={about} 
                  onChange={(e) => setAbout(e.target.value)} 
                />
              </div>
				 
				  <div className={styles.saveEditWrap}>
					<button className={styles.newad} onClick={handleCreateBrand}>
						<span className={styles.editSaveBtn}>
						СОЗДАТЬ 
						</span>
					</button>
            	</div>
					</div>
            </div>
        </Container>
      </Section>
    );
  }

//   if (isEditItem) {
//     return (
//       <Section className={styles.section}>
//         <Container>
// 		  <div className={styles.editFormWrap}>
// 					<div>
// 					<div className={`${styles.editHeader} text-center`}><h2>Редактировать обьявления</h2></div>
// 				 <div className={styles.inputWrap}>
//                 <label className={styles.label}>Имя бренда</label>
//                 <input 
// 					 className={styles.inputEdit}
//                   type="text" 
//                   value={brandName} 
//                   onChange={(e) => setBrandName(e.target.value)} 
//                 />
//               </div>
// 				  <div className={styles.inputWrap}>
//                 <label className={styles.label}>Город</label>
//                 <input
// 					   className={styles.inputEdit}
//                   type="text" 
//                   value={city} 
//                   onChange={(e) => setCity(e.target.value)} 
//                 />
//               </div>
// 				  <div className={styles.inputWrap}>
//                 <label className={styles.label}>URL</label>
//                 <input
// 					   className={styles.inputEdit}
//                   type="text" 
//                   value={slug} 
//                   onChange={(e) => setSlug(e.target.value)} 
//                 />
//               </div>
// 				  <div className={styles.inputWrap}>
//                 <label className={styles.label}>Описание</label>
//                 <input
// 					   className={styles.inputEdit}
//                   type="textarea" 
//                   value={about} 
//                   onChange={(e) => setAbout(e.target.value)} 
//                 />
//               </div>
				 
// 				  <div className={styles.saveEditWrap}>
// 					<button className={styles.newad} onClick={handleCreateBrand}>
// 						<span className={styles.editSaveBtn}>
// 						ИЗМЕНИТЬ ОБЬЯВЛЕНИЕ
// 						</span>
// 					</button>
//             	</div>
// 					</div>
//             </div>
//         </Container>
//       </Section>
//     );
//   }

  const handleSaveBrand = () => {
	if (!brandName || !city || !about) {
      toast.error("Пожалуйста, заполните все поля для обновления бренда.");
      return;
    }


	 UpdateBrandMutate({
      variables: {
			id: brand.id,
        input: {
          name: brandName,
          city: city,
          about: about,
        },
      },
    });

    console.log('Saved data:', {
      brandName,
      city,
		about
    });
  };





  const handleSaveProfile = () => {


	if (!email || email.length <= 5 || !email.includes('@')) {
		toast.error("Email должен быть не пустым, содержать более 5 символов и включать символ '@'.")
		throw new Error("Email должен быть не пустым, содержать более 5 символов и включать символ '@'.");
	}
	if (!phone || phone.length <= 7) {
		toast.error("Телефон должен быть не пустым и содержать более 7 символов")
		throw new Error("Телефон должен быть не пустым и содержать более 7 символов");
	}

		// Проверка, изменились ли phone или email по сравнению с текущими значениями в brand
		const isPhoneChanged = phone !== brand.phone;
		const isEmailChanged = email !== brand.email;

		// Если phone или email изменились, проверяем, введен ли пароль
	if ((isPhoneChanged || isEmailChanged) && !password) {
		toast.error("Введите пароль для подтверждения изменений в телефоне или email.");
		throw new Error("Введите пароль для подтверждения изменений в телефоне или email.");
	}

	  // Если указан новый пароль, проверяем наличие текущего пароля
	  if (newPassword && !password) {
      toast.error('Введите текущий пароль для изменения пароля.');
      throw new Error('Введите текущий пароль для изменения пароля.');
    }


	UpdateUserProfileMutate({
		variables: {
			input: {
				email,        
				password,     
				whatsapp,     
				telegram,     
				phone,
				newPassword      
			 }
		}}
		)
    console.log('Saved data:', {
      phone,
      telegram,
      whatsapp,
      email,
      password
    });
  };

  return (
    <Section className={styles.section}>
      <Container>
        <div className={styles.wrapper}>
          {isEdit ? (
            <div className={styles.editFormWrap}>
					<div>
					<div className={styles.editHeader}><h2>Редактировать бренд</h2></div>
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
                <label className={styles.label}>Описание:</label>
                <input
					   className={styles.inputEdit}
                  type="textarea" 
                  value={about} 
                  onChange={(e) => setAbout(e.target.value)} 
                />
              </div>
				 
				  <div className={styles.saveEditWrap}>
					<button className={styles.newad} onClick={handleSaveBrand}>
						<span className={styles.editSaveBtn}>
						СОХРАНИТЬ 
						</span>
					</button>
            	</div>
					</div>

					<div>
					<div className={styles.editHeader}><h2>Редактировать профиль</h2></div>
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
                  value={newPassword} 
                  onChange={(e) => setNewPassword(e.target.value)} 
                />
              </div>
				  <div className={styles.saveEditWrap}>
					<button className={styles.newad} onClick={handleSaveProfile}>
						<span className={styles.editSaveBtn}>
						СОХРАНИТЬ 
						</span>
					</button>
            	</div>
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
