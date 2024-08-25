'use client'

import { BrandCard as BrandCardType } from '@/__generated__/output'
import gridIcon from '@/assets/images/icons/grid-green.png'
import BrandCard from '@/components/parts/brand-card/BrandCard'
import Container from '@/components/ui/common/container/Container'
import Picture from '@/components/ui/common/picture/Picture'
import Section from '@/components/ui/common/section/Section'
import Heading from '@/components/ui/elements/heading/Heading'
import { PUBLIC_PAGES } from '@/constants/url.constants'
import type { IBrands } from '@/shared/interfaces/api/brand/brand.interface'
import cn from 'clsx'
import Link from 'next/link'
import { useState, useEffect, type FC } from 'react'
import { useMediaQuery } from 'react-responsive'
import styles from './Brands.module.scss'

const Brands: FC<IBrands> = ({
	isAdmin,
	heading,
	brands: queriedBrands,
	count,
	wrapperClassName,
	listClassName,
	brandClassName,
}) => {
	const [isMobile, setIsMobile] = useState(false);
	
	const checkMobile = useMediaQuery({ maxWidth: 550 });

	useEffect(() => {
		setIsMobile(checkMobile);
	 }, [checkMobile]);

	const [brands, setBrands] = useState<BrandCardType[]>(queriedBrands)

	return (
		<Section className={wrapperClassName && wrapperClassName}>
			<Container>
				{heading && (
					<Heading
						className={cn(styles.heading, heading.className)}
						variant={heading.variant}
						hasLine={heading.hasLine}
						label={heading.label}
						button={heading.button}
					>
						{heading.children}
					</Heading>
				)}
				<div className={styles.fill}>
					<ul className={cn(styles.list, listClassName)}>
						{brands.map((brand) => (
							<BrandCard
								key={brand.id}
								isAdmin={isAdmin}
								className={brandClassName}
								brand={brand}
								setBrands={setBrands}
							/>
						))}
					</ul>
					{isMobile && (
						<div className={styles.more}>
							<Link className={styles.link} href={PUBLIC_PAGES.ALL_CATEGORIES}>
								<Picture
									src={gridIcon.src}
									alt="Каталог"
								/>
								<span>
									ПОСМОТРЕТЬ <br /> ВСЕХ
								</span>
							</Link>
						</div>
					)}
				</div>
				<button className={styles.download}>ЗАГРУЗИТЬ ЕЩЕ</button>
			</Container>
		</Section>
	)
}

export default Brands
