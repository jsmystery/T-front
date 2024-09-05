'use client'

import cityIcon from '@/assets/images/icons/city.png'
import bigGridOpacityIcon from '@/assets/images/icons/grid-green-opacity.png'
import bigGridIcon from '@/assets/images/icons/grid-green.png'
import providerIcon from '@/assets/images/icons/provider.png'
import smallGridOpacityIcon from '@/assets/images/icons/small-grid-green-opacity.png'
import smallGridIcon from '@/assets/images/icons/small-grid-green.png'
import sortIcon from '@/assets/images/icons/sort.png'
import Picture from '@/components/ui/common/picture/Picture'
import Filter from '@/components/ui/elements/filters/Filter'
import { COUNTRIES_DATA } from '@/data/countries.data'
import type { IProductsFilters } from '@/shared/interfaces/api/product/product.interface'
import cn from 'clsx'
import { Settings2, X } from 'lucide-react'
import { useState, type FC } from 'react'
import styles from './ProductsFilters.module.scss'
import {
	PRODUCTS_FILTERS_PROVIDERS_DATA,
	PRODUCTS_FILTERS_SORT_DATA,
} from './data/products-filters.data'

const ProductsFilters: FC<IProductsFilters> = ({
	wrapperClassName,
	isBig,
	setIsBig,
	hasSize,
	hasCity,
	hasSort,
	hasProvider,
}) => {
	  // Добавляем состояние для фильтров
	  const [selectedFilters, setSelectedFilters] = useState({
		sortClassic: '',
		city: '',
		provider: ''
  });


    // Обработка изменений в фильтрах
    const handleFilterChange = (filterType: string, value: string) => {
		setSelectedFilters((prevFilters) => ({
			 ...prevFilters,
			 [filterType]: value,
		}));
		console.log(`Filter changed: ${filterType} - ${value}`);
  };


	const [isShow, setIsShow] = useState(false)

	return (
		<>
			<div className={cn(styles.filters, wrapperClassName && wrapperClassName)}>
				<button className={styles.burger} onClick={() => setIsShow(!isShow)}>
					<Settings2 />
				</button>
				<div
					className={cn(styles.fill, {
						[styles.active]: isShow,
					})}
				>
					<button className={styles.close} onClick={() => setIsShow(false)}>
						<X />
					</button>
					<h2 className={styles.heading}>Фильтры</h2>
					<span className={styles.label}>сортировка</span>
					<div className={styles.items}>
						{hasSort && (
							<Filter
								options={PRODUCTS_FILTERS_SORT_DATA}
								image={{
									src: sortIcon.src,
									alt: 'Сортировка',
								}}
								label="По новинкам"
								isMulti={false}
								onFilterChange={(value: string) => handleFilterChange('sort', value)} 
							/>
						)}
						{hasCity && (
							<Filter
								options={COUNTRIES_DATA}
								image={{
									src: cityIcon.src,
									alt: 'Город',
								}}
								label="Город"
								isMulti
								onFilterChange={(value: string) => handleFilterChange('city', value)} 
							/>
						)}
						{hasProvider && (
							<Filter
								options={PRODUCTS_FILTERS_PROVIDERS_DATA}
								image={{
									src: providerIcon.src,
									alt: 'Поставщик',
								}}
								label="Поставщик"
								isMulti
								onFilterChange={(value: string) => handleFilterChange('provider', value)} 
							/>
						)}
					</div>
				</div>
				{hasSize && (
					<ul className={styles.grids}>
						<li className={styles.grid}>
							<button onClick={() => setIsBig(true)} disabled={isBig}>
								<Picture
									src={isBig ? bigGridOpacityIcon.src : bigGridIcon.src}
									alt="Сетка"
								/>
							</button>
						</li>
						<li className={styles.grid}>
							<button onClick={() => setIsBig(false)} disabled={!isBig}>
								<Picture
									src={isBig ? smallGridIcon.src : smallGridOpacityIcon.src}
									alt="Сетка"
								/>
							</button>
						</li>
					</ul>
				)}
			</div>
		</>
	)
}

export default ProductsFilters
