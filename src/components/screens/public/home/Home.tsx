'use client'

import { UserRole } from '@/__generated__/output'
import Advertisements from '@/components/blocks/advertisements/Advertisements'
import Brands from '@/components/blocks/brands/Brands'
import Categories from '@/components/blocks/categories/Categories'
import Products from '@/components/blocks/products/Products'
import Info from '@/components/parts/info/Info'
import { getUser } from '@/server/auth/get-server-session'
import type { FC } from 'react'
import styles from './Home.module.scss'
import { HOME_CARD_ADVERTISEMENTS_DATA } from './data/advertising.data'
import { HOME_BRANDS_DATA } from './data/brands.data'
import {
	HOME_CATEGORIES_DATA,
	HOME_POPULAR_CATEGORIES_DATA,
} from './data/categories.data'
import { HOME_INFO_DATA } from './data/info.data'
import { HOME_PRODUCTS_DATA } from './data/products.data'
import HomeVip from './vip/HomeVip'
import { Sort, useProductsQuery } from '@/__generated__/output'


const Home: FC = () => {
	const user = getUser()
	const isAdmin = user?.role === UserRole.Admin

	const homeItems = useProductsQuery({
		variables: {
			query: {
				page: 1,
				perPage: 20,
				sort: Sort.Desc,
			},
		},
	})
	// console.log(homeItems.data?.products)


	return (
		<>
			<HomeVip isAdmin={isAdmin} />
			<Categories
				isAdmin={isAdmin}
				wrapperClassName={styles.categories}
				categories={HOME_CATEGORIES_DATA.categories}
				count={HOME_CATEGORIES_DATA.count}
				variant="circle"
			/>
			{homeItems.data?.products && (
			<Products
				isAdmin={isAdmin}
				hasMoreBtn
				heading={{
					children: 'Новинки каталога',
					variant: 'h2',
					hasLine: true,
					button: { label: 'Показать все', href: '/catalog' },
				}}
				wrapperClassName={styles.products}
				smallClassName={styles.product}
				products={homeItems.data?.products.products}
				// products={HOME_PRODUCTS_DATA.products}
				count={homeItems.data?.products.count}
				// count={HOME_PRODUCTS_DATA.count}
			/>
			)}
			
			<Advertisements advertisements={HOME_CARD_ADVERTISEMENTS_DATA} />
			<Categories
				isAdmin={isAdmin}
				wrapperClassName={styles.popularCategories}
				categories={HOME_POPULAR_CATEGORIES_DATA.categories}
				count={HOME_POPULAR_CATEGORIES_DATA.count}
				variant="card"
			/>
			<Brands
				isAdmin={isAdmin}
				heading={{
					children: 'Новинки каталога',
					variant: 'h2',
					hasLine: true,
					button: { label: 'Показать все', href: '' },
				}}
				wrapperClassName={styles.brands}
				brands={HOME_BRANDS_DATA.brands}
				count={HOME_BRANDS_DATA.count}
			/>
			<Info className={styles.info} info={HOME_INFO_DATA.info} />
		</>
	)
}

export default Home
