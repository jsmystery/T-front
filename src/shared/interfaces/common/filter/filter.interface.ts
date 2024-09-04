import {
	type FullestQueryInput,
	type QueryInput,
	Sort,
} from '@/__generated__/output'
import type { IClassName } from '../class-name/class-name.interface'

export interface IFilter extends IClassName {
	image: {
		src: string
		alt: string
	}
	options: string[]
	isSearchable?: boolean
	label?: string
	isMulti?: boolean
	onFilterChange?: Function
}

export interface IFilterProps extends IClassName {
	updateQueryFilters: (key: keyof QueryInput, value: string | null) => void
}

export interface IFullestFilterProps extends IClassName {
	updateQueryFilters: (
		key: keyof FullestQueryInput,
		value: string | null
	) => void
}

export interface ISortFilter extends IFilterProps {
	sort?: Sort | null
}
