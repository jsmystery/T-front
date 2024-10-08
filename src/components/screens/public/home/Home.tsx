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
// import { HOME_PRODUCTS_DATA } from './data/products.data'
import { useState, useEffect } from 'react'

import HomeVip from './vip/HomeVip'
import { useAllCategories } from '@/hooks/queries/category/useAllCategories.hook'
import { useAllAdvertisements } from '@/hooks/queries/advertising/useAllAdvertisements.hook'
import { Sort, useProductsQuery, useBrandsQuery } from '@/__generated__/output'

const Home = () => {
	// State to manage the user and admin role
	const [isAdmin, setIsAdmin] = useState(false)

	// Use `useEffect` to fetch user data after the component has mounted
	useEffect(() => {
		const user = getUser()
		if (user?.role === UserRole.Admin) {
			setIsAdmin(true)
		}
	}, []) // Empty dependency array to run this effect only once on mount

	const homeItems = useProductsQuery({
		variables: {
			query: {
				page: 1,
				perPage: 20,
				sort: Sort.Desc,
			},
		},
	})

	const homeBrands = useBrandsQuery({
		variables: {
			query: {
				page: 1,
				perPage: 5,
				sort: Sort.Desc,
			},
		},
	})

	const homeCategories = useAllCategories()
	const homeAdvertisements = useAllAdvertisements()

	return (
		<>
			<HomeVip isAdmin={isAdmin} />
			{homeCategories.categories?.categories && (
				<Categories
					isAdmin={isAdmin}
					wrapperClassName={styles.categories}
					categories={homeCategories.categories?.categories}
					count={homeCategories.categories?.count}
					variant="circle"
				/>
			)}

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
					count={homeItems.data?.products.count}
				/>
			)}

			{homeAdvertisements?.advertisements && (
				<Advertisements advertisements={homeAdvertisements?.advertisements} />
			)}

			{homeCategories.categories?.categories && (
				<Categories
					isAdmin={isAdmin}
					wrapperClassName={styles.popularCategories}
					categories={homeCategories.categories?.categories.slice(0, 5)}
					count={homeCategories.categories?.count}
					variant="card"
				/>
			)}

			{homeBrands.data?.brands && (
				<Brands
					isAdmin={isAdmin}
					heading={{
						children: 'Новинки каталога',
						variant: 'h2',
						hasLine: true,
						button: { label: 'Показать все', href: '' },
					}}
					wrapperClassName={styles.brands}
					brands={homeBrands.data?.brands.brands}
					count={homeBrands.data?.brands.count}
				/>
			)}

			<Info className={styles.info} info={HOME_INFO_DATA.info} />
		</>
	)
}

export default Home
