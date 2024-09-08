'use client'
import Products from '@/components/blocks/products/Products'
import Advertising from '@/components/parts/advertising/Advertising'
import Container from '@/components/ui/common/container/Container'
import Section from '@/components/ui/common/section/Section' // Ensure this path is correct
import type { IUserIsAdmin } from '@/shared/interfaces/api/user/user.interface'
import type { FC } from 'react'
import {
	HOME_BANNER_ADVERTISING_DATA,
	HOME_LARGE_ADVERTISING,
	HOME_SMALL_ADVERTISING_DATA,
} from '../data/advertising.data'
import cn from 'clsx'
import styles from './HomeVip.module.scss'
import { Sort, useProductsQuery } from '@/__generated__/output'

const HomeVip: FC<IUserIsAdmin> = ({ isAdmin }) => {
	const { data, error } = useProductsQuery({
		variables: {
			query: {
				page: 1,
				perPage: 10,
				sort: Sort.Desc,
			},
		},
	})

	console.log(data?.products.products)
	
	return (
		<Section className={styles.section}>
			<Container>
				<div className={styles.wrapper}>
					<Advertising
						className={styles.bigAdd}
						advertising={HOME_LARGE_ADVERTISING.advertising}
					/>
					<div className={styles.fill}>
						<Advertising
							className={cn(styles.sellerAdd, styles.bigAdd)}
							advertising={HOME_BANNER_ADVERTISING_DATA.advertising}
						/>
						<div className={styles.box}>
							<Advertising
								className={styles.smallAdd}
								advertising={HOME_SMALL_ADVERTISING_DATA.advertising}
							/>
							{!error && data?.products && (
								<Products
									isAdmin={isAdmin}
									hasWrapper={false}
									listClassName={styles.products}
									smallClassName={styles.product}
									products={data.products.products}
									count={data.products.count}
								/>
							)}
						</div>
					</div>
				</div>
			</Container>
		</Section>
	)
}

export default HomeVip
