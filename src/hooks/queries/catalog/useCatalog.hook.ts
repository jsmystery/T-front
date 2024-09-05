import { Sort, useProductsQuery } from '@/__generated__/output'
import type { IPageSearchParam } from '@/shared/interfaces/common/param/param.interface'
import { useRouter } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'
const sortMapping:any = {
	'По возрастанию цены': Sort.Asc,
	'По убыванию цены': Sort.Desc,
	'Рейтинг': Sort.Rate,
	'Казань': Sort.City,
	'Провайдер 1': Sort.Brand,
	'Провайдер 4': Sort.Brand,
};


const determineSortType = (filterValues: string[]): Sort[] => {
	return filterValues.map((value) => sortMapping[value]);
};



export const useCatalog = ({ searchParams }: IPageSearchParam, sortType:String) => {
	console.log(sortType);


	// const sortFinalType = determineSortType(sortType);

	
	const step = 1
	const perPageShow = 7
	// const step = 4
	const { push } = useRouter()

	// const [page, setPage] = useState((+(searchParams?.page || 1) - 1) * step + 1)
	const [page, setPage] = useState(+(searchParams?.page || 1))

	const { data } = useProductsQuery({
		variables: {
			query: {
				page,
				perPage: perPageShow,
				// sort: Sort[sortType as keyof typeof Sort],
				sort: Sort.Desc,
				brandId: 2,
				brandCity: "Казань",
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

	const updateUrlParameters = (newPage: number) => {
		const params = new URLSearchParams(searchParams?.toString())
		const displayPage = Math.floor((newPage - 1) / step) + 1
		params.set('page', String(displayPage))
		push('?' + params.toString())
	}

	return {
		page,
		setPage,
		products: data?.products.products || [],
		count: data?.products.count || 0,
		step,
		perPageShow
	}
}
