import type { AccountBrand } from '@/__generated__/output'
import balanceIcon from '@/assets/images/icons/balance.png'
import cityIcon from '@/assets/images/icons/city.png'
import moreIcon from '@/assets/images/icons/more.png'
import packageIcon from '@/assets/images/icons/package.png'
import phoneIcon from '@/assets/images/icons/phone-black.png'
import reviewsIcon from '@/assets/images/icons/reviews.png'
import subscribersIcon from '@/assets/images/icons/subscribers.png'
import telegramIcon from '@/assets/images/icons/telegram-blue.png'
import whatsappIcon from '@/assets/images/icons/whatsapp.png'
import Picture from '@/components/ui/common/picture/Picture'
import List from '@/components/ui/elements/list/List'
import Logout from '@/components/ui/elements/logout/Logout'
import TopUp from '@/components/ui/elements/topUp/TopUp'
import { PUBLIC_PAGES, USER_PAGES } from '@/constants/url.constants'
import type { IAccountBrand } from '@/shared/interfaces/api/brand/brand.interface'
import { formatNumber } from '@/utils/formats/format-number.util'
import Link from 'next/link'
import type { FC } from 'react'
import styles from './AccountSidebar.module.scss'

const AccountSidebar: FC<IAccountBrand> = ({ brand, balance }) => {
	const getContactItems = (brand: AccountBrand) => {
		const items = [
			{
				label: (
					<Link className={styles.contact} href="">
						<Picture src={phoneIcon.src} alt="Телефон" />
						{brand.phone}
					</Link>
				),
			},
		]

		if (brand.whatsapp) {
			items.push({
				label: (
					<Link className={styles.contact} href="">
						<Picture src={whatsappIcon.src} alt="Whatsapp" />
						{brand.whatsapp}
					</Link>
				),
			})
		}

		if (brand.telegram) {
			items.push({
				label: (
					<Link className={styles.contact} href="">
						<Picture src={telegramIcon.src} alt="Telegram" />
						{brand.telegram}
					</Link>
				),
			})
		}

		return items
	}

	return ( 
		<aside className={styles.sidebar}>
			<div className={styles.infoContainer}>
				<div className={styles.info}>
					<div className={styles.logo}>
						<Picture src={brand.logoPath} alt={brand.name} />
					</div>
					<div className={styles.about}>
						<div className={styles.heading}>
							<h1 className={styles.name}>{brand.name}</h1>
							<div className={styles.city}>
								<Picture src={cityIcon.src} alt={brand.city} />
								{brand.city}
							</div>
						</div>
						<List
							items={[
								{
									label: (
										<>
											На сайте с <strong>{brand.createdAt}</strong>
										</>
									),
								},
								{
									label: (
										<>
											Размещено товаров:{' '}
											<span>{formatNumber(brand.postedCount)}</span>
										</>
									),
								},
								{
									label: brand.email,
								},
							]}
							listClassName={styles.terms}
							itemClassName={styles.term}
						/>
						<List
							items={getContactItems(brand)}
							listClassName={styles.contacts}
							buttonClassName={styles.contact}
						/>
						<Link className={styles.edit} href={USER_PAGES.ACCOUNT_EDIT}>
							Редактировать данные
						</Link>
					</div>
				</div>
			</div>
			<div className={styles.boxContainer}>
				<div className={styles.box}>
					<div className={styles.balance}>
						<div className={styles.money}>
							<Picture src={balanceIcon.src} alt="Баланс" />
							<span>Баланс:</span>
							<strong>{formatNumber(balance)} руб.</strong>
						</div>
						<TopUp className={styles.topUp}>
							<span>+</span> Пополнить баланс
						</TopUp>
					</div>
					<List
						items={[
							{
								label: (
									<>
										<Picture src={packageIcon.src} alt="Товары" />
										<span>Мои товары:</span>
										<strong>{formatNumber(brand.postedCount)}</strong>
									</>
								),
							},
							{
								label: (
									<>
										<Picture src={subscribersIcon.src} alt="Подписчики" />
										<span>Мои подписчики:</span>
										<strong>{formatNumber(brand.subscribers.length)}</strong>
										<button className={styles.more}>
											<Picture src={moreIcon.src} alt="Информация" />
										</button>
									</>
								),
							},
							{
								label: (
									<>
										<Picture src={reviewsIcon.src} alt="Отзывы" />
										Мои отзывы
									</>
								),
								href: PUBLIC_PAGES.BRAND_REVIEWS(brand.id),
							},
						]}
						listClassName={styles.list}
						itemClassName={styles.item}
						buttonClassName={styles.link}
					/>
					<Logout className={styles.logout}>Выйти из профиля</Logout>
				</div>
			</div>
		</aside>
	)
}

export default AccountSidebar
