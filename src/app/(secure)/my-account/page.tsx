import NotFoundPage from '@/app/not-found'
import Account from '@/components/screens/secure/account/Account'
import { NO_INDEX_PAGE } from '@/constants/seo.constants'
import { useAccount } from '@/hooks/queries/account/useAccount.hook'
import { IPageSearchParam } from '@/shared/interfaces/common/param/param.interface'
import type { Metadata } from 'next'

export const metadata: Metadata = {
	title: '',
	...NO_INDEX_PAGE,
}



export default async function MyAccountPage({
	searchParams,
}: IPageSearchParam) {
	const { error, brand, tariffs, categories } = await useAccount()
		
	console.log(searchParams);
	


	if (error) {
		return <NotFoundPage />
	}

	return (
		<Account
			searchParams={searchParams}
			brand={brand}
			tariffs={tariffs}
			categories={categories}
		/>
	)
}
