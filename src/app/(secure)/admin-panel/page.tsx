// import NotFoundPage from '@/app/not-found'
import Sidebar from '@/components/screens/secure/admin/Sidebar'
// import Users from '@/components/screens/secure/admin/Users' // Import Users component

import { NO_INDEX_PAGE } from '@/constants/seo.constants'
import type { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Panel',
	...NO_INDEX_PAGE,
}



export default async function AdminPanelPage({
	searchParams,
}: any) {
	// const isUsersPage = searchParams.page === 'users';
	

	// const { error, brand, tariffs, categories } = await useAccount()	
	


	return (
		<div className="flex">
      <Sidebar />     
		<div className='p-4 text-center'>(тут можно сделать вывод общей информации-статистики)</div>
      </div>

	)
}
