'use client'

import Categories from '@/components/blocks/categories/Categories'
import Products from '@/components/blocks/products/Products'
import { useCatalog } from '@/hooks/queries/catalog/useCatalog.hook'
import type { IPageSearchParam } from '@/shared/interfaces/common/param/param.interface'
import { formatNumber } from '@/utils/formats/format-number.util'
import cn from 'clsx'
import { SelectedOptionsContext } from '@/components/ui/elements/filters/Filter' 

import type { FC } from 'react'
import { useState} from 'react'

import { HOME_CATEGORIES_DATA } from '../home/data/categories.data'
import styles from './Catalog.module.scss'

const Catalog: FC<IPageSearchParam> = ({ searchParams }) => {

	const [selectedOptions, setSelectedOptions] = useState([''])

	const { products, count, step, perPageShow, page, setPage } = useCatalog({ searchParams }, selectedOptions)
	// const { products, count, step, perPageShow, page, setPage } = useCatalog({ searchParams }, "Asc")
	console.log(products);
	console.log(selectedOptions);
	

	const classNames: { [key: number]: string } = {
		1: styles.first,
		2: styles.second,
		3: styles.third,
		4: styles.fourth,
	}

	return (
		<>
			<Categories
				wrapperClassName={styles.categories}
				categories={HOME_CATEGORIES_DATA.categories}
				count={HOME_CATEGORIES_DATA.count}
				variant="circle"
			/>
			{/* <div><h1>{selectedOptions.join(', ')}</h1></div> */}

			<SelectedOptionsContext.Provider value={{ selectedOptions, setSelectedOptions }}>
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
			        </SelectedOptionsContext.Provider>

		</>
	)
}

export default Catalog
