'use client'

import complainIcon from '@/assets/images/icons/complain.png'
import eyeIcon from '@/assets/images/icons/eye.png'
import providerIcon from '@/assets/images/icons/provider-white.png'
import rubleIcon from '@/assets/images/icons/ruble-black.png'
import Picture from '@/components/ui/common/picture/Picture'
import Contact from '@/components/ui/elements/contact/Contact'
import List from '@/components/ui/elements/list/List'
import { PUBLIC_PAGES } from '@/constants/url.constants'
import type { IProduct } from '@/shared/interfaces/api/product/product.interface'
import { formatNumber } from '@/utils/formats/format-number.util'
import { Star } from 'lucide-react'
import Link from 'next/link'
import type { FC } from 'react'
import { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive'
import styles from '../ProductContent.module.scss'

const ProductContentAbout: FC<IProduct> = ({ product }) => {
	const [isMobile, setIsMobile] = useState(false);

	const checkMobile = useMediaQuery({ maxWidth: 550 });

	useEffect(() => {
		setIsMobile(checkMobile);
	 }, [checkMobile]);

	// const isMobile = useMediaQuery({
	// 	maxWidth: 550,
	// })

	return (
		<>
			<div className={styles.about}>
				<div className={styles.fill}>
					<div className={styles.fillTop}>
						<h1 className={styles.name}>{product.name}</h1>
						<div className={styles.rating}>
							<Star />
							<span className={styles.rate}>{product.rating}</span>
							<span className={styles.count}>
								{product.reviewsCount} оценок
							</span>
						</div>
					</div>
					<div className={styles.fillBottom}>
						<Link
							className={styles.provider}
							href={PUBLIC_PAGES.BRAND(product.provider.slug)}
						>
							<div className={styles.logo}>
								<Picture
									src={product.provider.logoPath}
									alt={product.provider.name}
								/>
							</div>
							<div className={styles.brand}>
								<span className={styles.label}>
									<Picture src={providerIcon.src} alt="Поставщик" />
									Поставщик:
								</span>
								<h2 className={styles.providerName}>{product.provider.name}</h2>
							</div>
						</Link>
						<div className={styles.average}>
							<Star />
							{product.provider.rating} средний рейтинг товаров поставщика
						</div>
						<Link
							className={styles.link}
							href={PUBLIC_PAGES.BRAND(product.provider.slug)}
						>
							<Picture src={providerIcon.src} alt="Поставщик" />
							<span>НА СТРАНИЦУ ПОСТАВЩИКА</span>
						</Link>
					</div>
				</div>
				<div className={styles.box}>
					<div className={styles.details}>
						<List
							listClassName={styles.terms}
							itemClassName={styles.term}
							items={[
								{
									label: `Артикул: ${product.sku}`,
								},
								{
									label: product.createdAt,
								},
								{
									label: (
										<>
											{product.views}
											<Picture src={eyeIcon.src} alt="Глаз" />
										</>
									),
								},
							]}
						/>
						<button className={styles.complain}>
							<Picture src={complainIcon.src} alt="Пожаловаться" />
							Пожаловаться
						</button>
					</div>
					<List
						listClassName={styles.prices}
						itemClassName={styles.price}
						items={[
							...product.prices.map(({ price, minQuantity }, index) => ({
								label: (
									<>
										<div className={styles.cost}>
											{formatNumber(+price)}{' '}
											<Picture src={rubleIcon.src} alt="Рубли" />
										</div>
										<span className={styles.quantity}>
											{isMobile && index !== 0
												? `При заказе от ${minQuantity} единиц`
												: `Минимальный заказ от ${minQuantity} единиц`}
										</span>
									</>
								),
							})),
						]}
					/>
					<Contact
						className={styles.contact}
						socialClassName={styles.social}
						phoneClassName={styles.phone}
						subscribeClassName={styles.subscribe}
						isBrandOwner={product.provider.isBrandOwner}
						isSubscribed={product.provider.isSubscribed}
						brandId={product.provider.id}
						phone={product.provider.phone}
						whatsapp={product.provider.whatsapp}
						telegram={product.provider.telegram}
					/>
				</div>
			</div>
			<div className={styles.info}>
				<h3 className={styles.title}>Описание</h3>
				<div
					className={styles.text}
					dangerouslySetInnerHTML={{ __html: product.about }}
				/>
			</div>
		</>
	)
}

export default ProductContentAbout
