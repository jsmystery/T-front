export const ADMIN_PAGES = {
	ROOT: '/manage',
	ANALYTICS: `/manage/analytics`,
	ADVERTISEMENTS: '/manage/advertisements',
	PRODUCTS: '/manage/products',
}

export const ADMIN_EDITS = {
	ADVERTISING: (id: number) => `${ADMIN_PAGES.ROOT}/advertising/edit/${id}`,
	PRODUCT: (id: number) => `${ADMIN_PAGES.ROOT}/product/edit/${id}`,
}

export const ERROR_PAGES = {
	NOT_FOUND: '/not-found',
}

export const PUBLIC_PAGES = {
	HOME: '/',
	CATALOG: '/catalog',
	TERMS: '/terms',
	POLICY: '/policy',
	ALL_CATEGORIES: '/categories',
	ALL_BRANDS: '/brands',
	BRAND_REVIEWS: (brandId: number) => `/reviews/brand/${brandId}`,
	PRODUCT_REVIEWS: (productId: number) => `/reviews/product/${productId}`,
	PRODUCT: (id: number) => `/product/${id}`,
	CATEGORY: (slug: string) => `/catalog?category=${slug}`,
	SEARCH: (searchTerm: string) => `/catalog?searchTerm=${searchTerm}`,
	PROVIDER: (slug: string) => `/provider/${slug}`,
	BRAND: (slug: string) => `/brand/${slug}`,
}

export const USER_PAGES = {
	ACCOUNT: '/my-account',
	ACCOUNT_EDIT: '/my-account?type=edit',
}
