import { Sort, useProductsQuery } from '@/__generated__/output'
import type { IPageSearchParam } from '@/shared/interfaces/common/param/param.interface'
import { useRouter } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'

export const useCatalog = ({ searchParams }: IPageSearchParam) => {
	const step = 4
	const { push } = useRouter()

	const [page, setPage] = useState((+(searchParams?.page || 1) - 1) * step + 1)

	const { data } = useProductsQuery({
		variables: {
			query: {
				page,
				perPage: 3,
				sort: Sort.Desc,
			},
		},
	})

	const isScrollBlocked = useRef(false)

	useEffect(() => {
		const handleScroll = () => {
			if (isScrollBlocked.current) return

			const { scrollTop, clientHeight, scrollHeight } = document.documentElement
			if (scrollTop + clientHeight >= scrollHeight * 0.9) {
				if (page % step !== 0) {
					setPage((prev) => prev + 1)
				}
			}
		}

		window.addEventListener('scroll', handleScroll)

		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
	}, [page])

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
	}
}
