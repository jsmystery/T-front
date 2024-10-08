import Picture from '@/components/ui/common/picture/Picture'
import { useOutside } from '@/hooks/helpers/outside/useOutside'
import type { IFilter } from '@/shared/interfaces/common/filter/filter.interface'
import cn from 'clsx'
import { ChevronDown } from 'lucide-react'
import { useState,  createContext, useContext, type FC } from 'react'
import styles from './Filter.module.scss'

export const SelectedOptionsContext = createContext(undefined); // Export the context
// const useSelectedOptions:any = () => useContext(SelectedOptionsContext);
const useSelectedOptions: any = () => {
	const context = useContext(SelectedOptionsContext);
	
	// If the context is not provided, throw an error or return default values
	if (!context) {
	  console.error("useSelectedOptions must be used within a SelectedOptionsContext.Provider");
	  return {
		 selectedOptions: [],  // default empty array
		 setSelectedOptions: () => {}  // default no-op function
	  };
	}
 
	return context;
 };
 



const Filter: FC<IFilter> = ({
	isSearchable,
	isMulti,
	image,
	label,
	options,
	className,
	onFilterChange
}) => {

	
	const { selectedOptions, setSelectedOptions } = useSelectedOptions();
	

	const [isShow, setIsShow] = useState(false)

	const { ref } = useOutside<HTMLDivElement>(() => setIsShow(false))

	const filteredSelectedOptions = selectedOptions.filter(option =>
		options.includes(option)
	);


	const handleOptionSelect = (option: string) => {
		const newSelectedOptions = selectedOptions.includes(option)
			? selectedOptions.filter(o => o !== option)
			: isMulti ? [...selectedOptions, option]:[option];
		setSelectedOptions(newSelectedOptions);

		// Вызываем коллбек при изменении опций
		if (onFilterChange) {
			onFilterChange(newSelectedOptions.join(', '));
		}
	};

	return (
		<div className={cn(styles.filter, className && className)} ref={ref}>
			<button
				className={cn(styles.toggle, {
					[styles.active]: isShow,
				})}
				onClick={() => setIsShow(!isShow)}
			>
				<Picture src={image.src} alt={image.alt} />
				{/* {!isMulti && selectedOptions[0] ? selectedOptions[0] : label} */}

				
				{isMulti && filteredSelectedOptions.length > 0 
					? filteredSelectedOptions.join(', ')  // Показываем все валидные выбранные опции
					: filteredSelectedOptions[0] || label // Для single select показываем одну валидную опцию
				}
			

				<ChevronDown />
			</button>
			<div
				className={cn(styles.fill, {
					[styles.active]: isShow,
				})}
			>
				<ul className={styles.list}>
					{options.map((option, index) => (
						<li className={styles.item} key={index}>
							<button
								className={cn(styles.button, {
									[styles.active]: selectedOptions.includes(option),
								})}
								// onClick={() =>
								// 	setSelectedOptions((prev:any) =>
								// 		isMulti ? [...prev, option] : [option]
								// 	)
								// }
								onClick={() => handleOptionSelect(option)}

							>
								<div className={styles.radio}>
									<span></span>
								</div>
								{option}
							</button>
						</li>
					))}
				</ul>
			</div>
		</div>
	)
}

export default Filter
