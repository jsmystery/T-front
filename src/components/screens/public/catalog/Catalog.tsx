'use client'

import Categories from '@/components/blocks/categories/Categories'
import Products from '@/components/blocks/products/Products'
import { useCatalog } from '@/hooks/queries/catalog/useCatalog.hook'
import type { IPageSearchParam } from '@/shared/interfaces/common/param/param.interface'
import { formatNumber } from '@/utils/formats/format-number.util'
import cn from 'clsx'
import { SelectedOptionsContext } from '@/components/ui/elements/filters/Filter' 

import type { FC } from 'react'
import { useState, useEffect } from 'react' // <-- useEffect added to handle client-side mounting

import { HOME_CATEGORIES_DATA } from '../home/data/categories.data'
import styles from './Catalog.module.scss'

const Catalog: FC<IPageSearchParam> = ({ searchParams }) => {

	// Track if the component has mounted on the client
	const [isMounted, setIsMounted] = useState(false); // <-- State to check if component is mounted

	// Conditional rendering state for selected options
	const [selectedOptions, setSelectedOptions] = useState([''])

	const { products, count, step, perPageShow, page, setPage } = useCatalog({ searchParams }, selectedOptions)

	// Set mounted to true after the component is mounted on the client
	useEffect(() => { // <-- useEffect added to update isMounted after component is mounted
		setIsMounted(true); // <-- Once the component is mounted, set isMounted to true
	}, []);

	const classNames: { [key: number]: string } = {
		1: styles.first,
		2: styles.second,
		3: styles.third,
		4: styles.fourth,
	}

	return (
		<>
		{isMounted && (
			<Categories
				wrapperClassName={styles.categories}
				categories={HOME_CATEGORIES_DATA.categories}
				count={HOME_CATEGORIES_DATA.count}
				variant="circle"
			/>
			)}


			<SelectedOptionsContext.Provider value={{ selectedOptions, setSelectedOptions }}>
			
			{/* Conditionally render Products only after the component has mounted */}
			{isMounted && ( // <-- Conditional rendering for Products, will render only if isMounted is true
				<Products
					wrapperClassName={styles.products}
					smallClassName={cn(
						styles.smallProduct,
						classNames[page % step || step]
					)}
					bigClassName={cn(styles.bigProduct, classNames[page % step])}
					products={products}
					count={count}
					filters={{
						hasSize: true,
						hasCity: true,
						hasProvider: true,
						hasSort: true,
					}}
					heading={{
						className: styles.heading,
						children: searchParams?.searchTerm || 'Новинки',
						label: `${formatNumber(count)} товаров`,
						variant: 'h1',
						size: 'md',
						isUppercase: false,
					}}
					pagination={{
						page,
						setPage,
						step,
						pagesCount: Math.ceil(count / perPageShow),
					}}
				/>
			)}

			</SelectedOptionsContext.Provider>

		</>
	)
}

export default Catalog
