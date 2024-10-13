'use client'

import { Sort } from '@/__generated__/output'
import sortIcon from '@/assets/images/icons/sort.png'
import AnnouncementCard from '@/components/parts/announcement-card/AnnouncementCard'
import Check from '@/components/ui/elements/check/Check'
import Filter from '@/components/ui/elements/filters/Filter'
import { SITE_NAME } from '@/constants/details.constants'
import { useAnnouncements } from '@/hooks/queries/product/useAnnouncements.hook'
import type { IAnnouncements } from '@/shared/interfaces/api/product/product.interface'
import cn from 'clsx'
import type { FC } from 'react'
import { useState, useEffect } from 'react'
import styles from './Announcements.module.scss'
import AnnouncementSearch from './search/AnnouncementSearch'

const Announcements: FC<IAnnouncements> = ({ tariffs, setBalance }) => {
	const {
		toggle,
		checked,
		setChecked,
		scrollRef,
		// announcements,
		announcements: initialAnnouncements,
		error,
		searchTerm,
		handleSearch,
		placeOrder,
	} = useAnnouncements(
		{
			perPage: 15,
			page: 1,
			sort: Sort.Desc,
		},
		setBalance
	)



	const [announcements, setAnnouncements] = useState(initialAnnouncements) // Highlight: UseState to manage announcements reactively

	useEffect(() => {
		setAnnouncements(initialAnnouncements)
	}, [initialAnnouncements])


	const onDeleteAnnouncementHandler = (id: Number) => {
		setAnnouncements((prev) => prev.filter((announcement) => announcement.id !== id))
	}



	if (error) return null

	return (
		<div className={styles.wrapper}>
			<div className={styles.top}>
				<div className={styles.select}>
					<Check
						isChecked={
							announcements.length === 0
								? false
								: announcements.length === checked.length
						}
						toggle={() =>
							setChecked(
								announcements.length === checked.length
									? []
									: [...announcements.map((a) => a.id)]
							)
						}
					/>
					Выбрать {checked.length} из {announcements.length}
				</div>
				<div className={styles.filter}>
					<span className={styles.label}>сортировка</span>
					<Filter
						options={['01']}
						image={{
							src: sortIcon.src,
							alt: 'Сортировка',
						}}
						label={`По дням на ${SITE_NAME}`}
					/>
				</div>
				<AnnouncementSearch
					searchTerm={searchTerm}
					handleSearch={handleSearch}
				/>
			</div>
			<div className={styles.fill}>
				{announcements.length > 0 && (
					<div
						ref={scrollRef}
						className={cn(styles.announcements, {
							[styles.big]: announcements.length > 3,
						})}
					>
						{announcements.map((announcement) => (
							<div key={announcement.id} className={styles.announcement}>
								<div className={styles.pick}>
									<Check
										isChecked={checked.includes(announcement.id)}
										toggle={() => toggle(announcement.id)}
									/>
								</div>
								<AnnouncementCard
									key={announcement.id}
									placeOrder={placeOrder}
									tariffs={tariffs}
									announcement={announcement}
									onDeleteAnnouncement={() => onDeleteAnnouncementHandler(announcement.id)}
								/>
							</div>
						))}
					</div>
				)}
			</div>
		</div>
	)
}

export default Announcements
