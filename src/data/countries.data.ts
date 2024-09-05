import type { IOption } from '@/shared/interfaces/common/form/form.interface'

export const COUNTRIES_DATA: string[] = [
	// 'Санкт-Петербург',
	// 'Новосибирск',
	// 'Екатеринбург',
	'Москва',
	'Казань',
	// 'Челябинск',
	// 'Красноярск',
	// 'Самара',
]

export const COUNTRIES_SELECT_DATA: IOption[] = COUNTRIES_DATA.map((c) => ({
	label: c,
	value: c,
}))
