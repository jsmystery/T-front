import { Sort, useProductsQuery } from '@/__generated__/output'
import type { IPageSearchParam } from '@/shared/interfaces/common/param/param.interface'
import { useRouter } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'
const sortMapping:any = {
	'По возрастанию цены': Sort.Asc,
	'По убыванию цены': Sort.Desc,
	'По рейтингу': Sort.Rate,
	'Казань': "Казань",
	'Москва': "Москва",
	'Lacoste Россия': 1,
	'Lacoste Казань': 2,
};


const mappedValues = (filterValues: string[]) => {
	return filterValues.map((value) => sortMapping[value]);
};


// Determines sort type and filter values based on the provided filter values
const determineSortType = (filterValues: any[]): { sort?: Sort, brandId?: number, brandCity?: string } => {
	// Check if any value is exactly 'Asc' or 'Desc' and assign to sort
	const sort = filterValues.find(value => value === Sort.Asc || value === Sort.Desc || value === Sort.Rate) as Sort;
	
	// Find any valid city string, but exclude 'Asc' and 'Desc' from being assigned to brandCity
	const brandCity = filterValues.find(value => 
		 typeof value === 'string' && value !== Sort.Asc && value !== Sort.Desc && value !== Sort.Rate && isNaN(Number(value))
	) as string;
	
	// Find any numeric value for brandId
	const brandId = filterValues.find(value => typeof value === 'number') as number;

	// console.log("filterValues:", filterValues);
	// console.log("sort:", sort);
	// console.log("brandCity:", brandCity);
	// console.log("brandId:", brandId);

	return {
		 sort: sort || undefined, // Set sort only if it's valid
		 brandId: brandId || undefined, // Set brandId if found
		 brandCity: brandCity || undefined // Set brandCity if found, excluding sort values
	};
};


export const useCatalog = ({ searchParams }: IPageSearchParam, sortType:string[]) => {
	// console.log(sortType);
	
	let finalSortArray = mappedValues(sortType);
	// console.log(finalSortArray);
	
	const { sort, brandId, brandCity } = determineSortType(finalSortArray);
	// console.log(sort, brandId, brandCity);
	

	const step = 1
	const perPageShow = 10
	// const step = 4
	const { push } = useRouter()

	// const [page, setPage] = useState((+(searchParams?.page || 1) - 1) * step + 1)
	const [page, setPage] = useState(+(searchParams?.page || 1))

	const { data } = useProductsQuery({
		variables: {
			query: {
				page,
				perPage: perPageShow,
				sort: sort || Sort.Desc,
				brandId: brandId,
				brandCity: brandCity,
			},
		},
	})

	const isScrollBlocked = useRef(false)

	// useEffect(() => {
	// 	const handleScroll = () => {
	// 		if (isScrollBlocked.current) return

	// 		const { scrollTop, clientHeight, scrollHeight } = document.documentElement
	// 		if (scrollTop + clientHeight >= scrollHeight * 0.9) {
	// 			if (page % step !== 0) {
	// 				setPage((prev) => prev + 1)
	// 			}
	// 		}
	// 	}

	// 	window.addEventListener('scroll', handleScroll)

	// 	return () => {
	// 		window.removeEventListener('scroll', handleScroll)
	// 	}
	// }, [page])

	// const updateUrlParameters = (newPage: number) => {
	// 	const params = new URLSearchParams(searchParams?.toString())
	// 	const displayPage = Math.floor((newPage - 1) / step) + 1
	// 	params.set('page', String(displayPage))
	// 	push('?' + params.toString())
	// }

	return {
		page,
		setPage,
		products: data?.products.products || [],
		count: data?.products.count || 0,
		step,
		perPageShow
	}
}
