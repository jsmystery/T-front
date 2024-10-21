import type {
	Advertising,
	AllProducts,
	AnnouncementCard,
	OrderInput,
	Product,
	ProductCard,
	Tariff,
} from '@/__generated__/output'
import type { Dispatch, SetStateAction } from 'react'
import type { IClassName } from '../../common/class-name/class-name.interface'
import type { IHeading } from '../../common/heading/heading.interface'
import type { IPagination } from '../../common/pagination/pagination.interface'
import type { IPageSearchParam } from '../../common/param/param.interface'

export interface IProduct extends IPageSearchParam {
	product: Product
}

export interface IAnnouncements {
	setBalance: Dispatch<SetStateAction<number>>
	tariffs: Tariff[]
	onCreateProductCompleteValue?: boolean 
}

export interface IAnnouncementCard {
	placeOrder: (data: OrderInput, price: number, closeModal: () => void) => void
	className?: string
	announcement: AnnouncementCard
	tariffs: Tariff[]
	onDeleteAnnouncement?: function		
	onEditAnnouncement?: function		
}

export interface IProductsFiltersProps {
	hasSize?: boolean
	hasSort?: boolean
	hasCity?: boolean
	hasProvider?: boolean
	hasDate?: boolean
}

export interface IProductsFilters extends IProductsFiltersProps {
	wrapperClassName?: string
	isBig: boolean
	setIsBig: Dispatch<SetStateAction<boolean>>
}

export interface IProductState {
	productId: number
	setProducts: Dispatch<SetStateAction<ProductCard[]>>
}

export interface IProductCard extends IClassName {
	isAdmin?: boolean
	product: ProductCard
	setProducts: Dispatch<SetStateAction<ProductCard[]>>
}

export interface IProducts extends AllProducts {
	isAdmin?: boolean
	heading?: IHeading
	filters?: IProductsFiltersProps
	pagination?: IPagination
	advertising?: Advertising
	hasMoreBtn?: boolean
	hasWrapper?: boolean
	wrapperClassName?: string
	filtersClassName?: string
	listClassName?: string
	smallClassName?: string
	bigClassName?: string
}
