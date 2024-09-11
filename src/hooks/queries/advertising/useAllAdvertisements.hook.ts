import {
	useAdvertisementsQuery,
	Sort
} from '@/__generated__/output'
// import { apolloClient } from '@/api/apollo/apollo.client'

export const useAllAdvertisements = () => {
	const { data } = useAdvertisementsQuery({
		variables: {
			query: {
				sort: Sort.Desc,
			},
		},
	})

	// console.log(data);
	
	return data?.advertisements
	
}
