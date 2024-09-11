import { Sort, useCategoriesQuery } from '@/__generated__/output'
// import type { IOption } from '@/shared/interfaces/common/form/form.interface'

export const useAllCategories = () => {
	const { data } = useCategoriesQuery({
		variables: {
			query: {
				sort: Sort.Asc,
			},
		},
	})

	const categories = data?.categories

	return {
		categories,
		rawData: data?.categories, // optional, if you need raw data
	}
}
