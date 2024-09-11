'use client'

import { UserRole, useBrandQuery } from '@/__generated__/output'
import NotFoundPage from '@/app/not-found'
import Brand from '@/components/screens/public/brand/Brand'
import { BRAND_DATA } from '@/components/screens/public/brand/data/brand.data'
import { getUser } from '@/server/auth/get-server-session'
import type {
	IPageSearchParam,
	IPageSlugParam,
} from '@/shared/interfaces/common/param/param.interface'
import type { Metadata } from 'next'

// export const metadata: Metadata = {
// 	title: '',
// 	description: '',
// }

export default function BrandPage({
	params,
	searchParams,
}: IPageSlugParam & IPageSearchParam) {
	if (!params.slug) return <NotFoundPage />

	const user = getUser()
	const isAdmin = user?.role === UserRole.Admin

	const brandData = useBrandQuery({
		variables: {
			slug: params.slug
			// slug: 'lacoste-kazan',
		},
	});

	console.log(brandData.data?.brand);

	if (brandData.data?.brand) return (
		<Brand brand={brandData.data?.brand} searchParams={searchParams} isAdmin={isAdmin} />
	)
}
