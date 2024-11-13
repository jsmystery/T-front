'use client'
import { UserRole, useCurrentProductQuery } from '@/__generated__/output'
import NotFoundPage from '@/app/not-found'
import { PRODUCT_DATA } from '@/components/screens/public/product/data/product.data'
import Product from '@/components/screens/public/product/Product'
import { getUser } from '@/server/auth/get-server-session'
import type {
	IPageIdParam,
	IPageSearchParam,
} from '@/shared/interfaces/common/param/param.interface'
import type { Metadata } from 'next'

// export const metadata: Metadata = {
// 	title: '',
// 	description: '',
// }

export default function ProductPage({
	params,
	searchParams,
}: IPageIdParam & IPageSearchParam) {
	if (!params.id) return <NotFoundPage />

	const user = getUser()
	// const isAdmin = user?.role === UserRole.Admin
	

	const productData = useCurrentProductQuery({
		variables: {
			id: +params.id,
		},
	});

	if (productData.data?.currentProduct)	return (
		<Product
			product={productData.data?.currentProduct}
			// product={PRODUCT_DATA}
			searchParams={searchParams}
			// isAdmin={isAdmin}
		/>
	)
}
