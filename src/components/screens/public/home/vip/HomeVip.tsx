import Products from '@/components/blocks/products/Products'
import Advertising from '@/components/parts/advertising/Advertising'
import Container from '@/components/ui/common/container/Container'
import Section from '@/components/ui/common/section/Section'
import type { IUserIsAdmin } from '@/shared/interfaces/api/user/user.interface'
import type { FC } from 'react'
import {
	HOME_BANNER_ADVERTISING_DATA,
	HOME_LARGE_ADVERTISING,
	HOME_SMALL_ADVERTISING_DATA,
} from '../data/advertising.data'
import { HOME_VIP_PRODUCTS_DATA } from '../data/products.data'
import cn from 'clsx'
import styles from './HomeVip.module.scss'

const HomeVip: FC<IUserIsAdmin> = async ({ isAdmin }) => {
	// const { products, productsCount, productsError } = await useProducts({
	// 	page: 1,
	// 	perPage: 10,
	// 	views: Sort.Desc,
	// 	sort: Sort.Desc,
	// 	visibility: Visibility.Visible,
	// })

	// const { advertisements, advertisementsError } =
	// 	await useAdvertisementsByTypes([
	// 		AdvertisingType.Large,
	// 		AdvertisingType.Small,
	// 		AdvertisingType.Banner,
	// 	])

	// const largeAd = advertisements.find(
	// 	({ type }) => type === AdvertisingType.Large
	// )
	// const smallAd = advertisements.find(
	// 	({ type }) => type === AdvertisingType.Small
	// )
	// const bannerAd = advertisements.find(
	// 	({ type }) => type === AdvertisingType.Banner
	// )

	return (
		<Section className={styles.section}>
			<Container>
				<div className={styles.wrapper}>
					{/* {!advertisementsError && largeAd && (
						<Advertising className={styles.bigAdd} advertising={largeAd} />
					)} */}
					<Advertising
						className={styles.bigAdd}
						advertising={HOME_LARGE_ADVERTISING.advertising}
					/>
					<div className={styles.fill}>
						{/* {!advertisementsError && bannerAd && (
							<Advertising
								className={styles.sellerAdd}
								advertising={bannerAd}
							/>
						)} */}
						<Advertising
							className={cn(styles.sellerAdd, styles.bigAdd)}
							advertising={HOME_BANNER_ADVERTISING_DATA.advertising}
						/>
						<div className={styles.box}>
							{/* {!advertisementsError && smallAd && (
								<Advertising
									className={styles.smallAdd}
									advertising={smallAd}
								/>
							)} */}
							<Advertising
								className={styles.smallAdd}
								advertising={HOME_SMALL_ADVERTISING_DATA.advertising}
							/>
							{/* {!productsError && Boolean(productsCount) && (
								<Products
									wrapperClassName={styles.products}
									smallClassName={styles.product}
									isAdmin={isAdmin}
									products={products}
									count={productsCount}
								/>
							)} */}
							<Products
								isAdmin={isAdmin}
								hasWrapper={false}
								listClassName={styles.products}
								smallClassName={styles.product}
								products={HOME_VIP_PRODUCTS_DATA.products}
								count={HOME_VIP_PRODUCTS_DATA.count}
							/>
						</div>
					</div>
				</div>
			</Container>
		</Section>
	)
}

export default HomeVip
