import { Sort, useCategoriesQuery } from '@/__generated__/output'
import type { IOption } from '@/shared/interfaces/common/form/form.interface'

export const useAllCategories = () => {
	const { data } = useCategoriesQuery({
		variables: {
			query: {
				sort: Sort.Desc,
			},
		},
		// Use fetchPolicy if needed:
		// fetchPolicy: 'no-cache',
	})

	// If you need to map the data to a different format
	// const categories = data?.categories.map(
	// 	({ name, id }): IOption => ({
	// 		label: name,
	// 		value: id,
	// 	})
	// )
	const categories = data?.categories

	// Return the mapped categories, or the raw data if you prefer
	return {
		categories,
		rawData: data?.categories, // optional, if you need raw data
	}
}
