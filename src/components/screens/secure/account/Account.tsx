'use client';

import Announcements from '@/components/blocks/announcements/Announcements';
import Container from '@/components/ui/common/container/Container';
import Section from '@/components/ui/common/section/Section';
import AccountSidebar from '@/components/ui/templates/account/sidebar/AccountSidebar';
import type { IAccount } from '@/shared/interfaces/api/brand/brand.interface';
import { useState, type FC } from 'react';
import styles from './Account.module.scss';
import plusIcon from '@/assets/images/icons/plus.png';
import Picture from '@/components/ui/common/picture/Picture';

const Account: FC<IAccount> = ({
  searchParams,
  brand,
  tariffs,
  categories,
}) => {
  const [balance, setBalance] = useState(brand?.balance || 0);
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

  return (
    <Section className={styles.section}>
      <Container>
        <div className={styles.wrapper}>
          {isEdit ? (
            <>
              <div>
                <h1>EDIIIIIIIIIIIIIIT</h1>
              </div>
            </>
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
