import { TariffType, useDeleteProductMutation, useUpdateProductMutation } from '@/__generated__/output'
import cityIcon from '@/assets/images/icons/city.png'
import Container from '@/components/ui/common/container/Container';
import Section from '@/components/ui/common/section/Section';
import eyeIcon from '@/assets/images/icons/eye.png'
import fillGrayIcon from '@/assets/images/icons/fill-gray.png'
import fillIcon from '@/assets/images/icons/fill.png'
import questionIcon from '@/assets/images/icons/question.png'
import raiseGrayIcon from '@/assets/images/icons/raise-gray.png'
import raiseIcon from '@/assets/images/icons/raise.png'
import rubleBlackIcon from '@/assets/images/icons/ruble-black.png'
import rubleGreenIcon from '@/assets/images/icons/ruble-green.png'
import vipGrayIcon from '@/assets/images/icons/vip-gray.png'
import vipIcon from '@/assets/images/icons/vip.png'
import Picture from '@/components/ui/common/picture/Picture'
import List from '@/components/ui/elements/list/List'
import Modal from '@/components/ui/templates/modal/Modal'
import type { IAnnouncementCard } from '@/shared/interfaces/api/product/product.interface'
import { formatNumber } from '@/utils/formats/format-number.util'
import cn from 'clsx'
import { AlertCircle } from 'lucide-react'
import { useState, type FC } from 'react'
import toast from 'react-hot-toast'
import styles from './AnnouncementCard.module.scss'
import { useRouter } from 'next/navigation'


const AnnouncementCard: FC<IAnnouncementCard> = ({
	placeOrder,
	tariffs,
	announcement,
	className,
	onDeleteAnnouncement,
	onEditAnnouncement
}) => {

	const router = useRouter();

	const [{ isShow, type }, setModalState] = useState({
		isShow: false,
		type: TariffType.Top,
	})
	const [editItem, setEditItem] = useState(false) // Added state for editItem
	const currentTariff = tariffs.find((tariff) => tariff.type === type)
	const isTop = type === TariffType.Top
	const isFill = type === TariffType.Fill
	const [name, setName] = useState(announcement.name)
	const [about, setAbout] = useState(announcement.about)
	const [productPrice, setProductPrice] = useState(Number(announcement.pricesFull[0].price))
	const [productPrice2, setProductPrice2] = useState()
	const [productPrice3, setProductPrice3] = useState()
	const [productMinQuantity, setProductMinQuantity] = useState(Number(announcement.pricesFull[0].minQuantity))
	const [productMinQuantity2, setProductMinQuantity2] = useState()
	const [productMinQuantity3, setProductMinQuantity3] = useState()


	const [UpdateProductMutate] = useUpdateProductMutation({
		fetchPolicy: 'no-cache',
		onError: ({ message }) => {
		  toast.error(message);
		},
		onCompleted: () => {
		  console.log('Product saved');
		  toast.success("Изменения сохранены");
		  onEditAnnouncement()
		  setEditItem(false)
		}
	 });


	const handleEditItem = () => {
		if (!name || !about  || !productPrice || !productMinQuantity || productPrice < 1) {
			toast.error("Пожалуйста, заполните все поля.");
			return;
		 }
	
	
		 UpdateProductMutate({
			variables: {
				id: announcement.id,
			  data: {
				 name: name,
				 about: about,
				 price: productPrice,	
				 minQuantity: productMinQuantity,	
				 price2: productPrice2,
				 minQuantity2: productMinQuantity2,	
				 price3: productPrice3,	
				 minQuantity3: productMinQuantity3,	
			  },
			},
		 });;
	  };

	const [deleteProductMutate] = useDeleteProductMutation({
		fetchPolicy: 'no-cache',
		onError: ({ message }) => {
			toast.error(message)
		},
		onCompleted: () => {
			onDeleteAnnouncement()
		}
	})

	const handleDelete = () => deleteProductMutate({
		variables: {
			id: announcement.id
		}})

	const handleEdit = () => setEditItem(true) 

	return (
		<>
		{!editItem && (
			<div className={cn(styles.announcement, className && className)}>
				<div className={styles.fill}>
					<div className={styles.poster}>
						<Picture src={announcement.posterPath} alt={announcement.name} />
					</div>
					<div className={styles.box}>
						<List
							listClassName={styles.terms}
							itemClassName={styles.term}
							items={[
								{
									label: `Артикул: ${announcement.sku}`,
								},
								{
									label: announcement.createdAt,
								},
								{
									label: (
										<>
											{announcement.views}
											<Picture src={eyeIcon.src} alt="Глаз" />
										</>
									),
								},
							]}
						/>
						<h2 className={styles.name}>{announcement.name}</h2>
						<div
							className={cn(styles.price, {
								[styles.hot]: false,
							})}
						>
							{announcement.maxPrice >= 1000000 ? (
								<>
									<span>От</span> {formatNumber(announcement.minPrice)}
								</>
							) : (
								<>
									{announcement.minPrice === announcement.maxPrice
										? formatNumber(announcement.minPrice)
										: formatNumber(announcement.minPrice) +
										  ' - ' +
										  formatNumber(announcement.maxPrice)}
								</>
							)}
							<Picture
								src={true ? rubleGreenIcon.src : rubleBlackIcon.src}
								alt="Рубли"
							/>
						</div>
						<div className={styles.city}>
							<Picture src={cityIcon.src} alt="Город" />
							{announcement.city}
						</div>
						<div className={styles.editWrap}>
							<button className={styles.editBtn} onClick={handleEdit}> {/* Edited to use handleEdit */}
								Изменить
							</button>
							<button className={styles.delBtn} onClick={handleDelete}>
								Удалить
							</button>
						</div>
					</div>
					<div className={styles.serviceWrap}>
						<div className={styles.serviceBtnWrap}>
							<button className={styles.editBtn}>
								<Picture src={raiseIcon.src} alt="Поднять" />
								Поднять объявление
							</button>
							<Picture className={styles.hint} src={questionIcon.src} alt="Подсказка" />
						</div>
						<div className={styles.serviceBtnWrap}>
							<button className={styles.delBtn}>
								<Picture src={fillIcon.src} alt="Выделить" />
								Выделить цветом
							</button>
							<Picture className={styles.hint} src={questionIcon.src} alt="Подсказка" />
						</div>

						<div className={styles.serviceBtnWrap}>
							<button className={styles.delBtn}>
								<Picture src={vipIcon.src} alt="Размещение" />
								Размещение
							</button>
							<Picture className={styles.hint} src={questionIcon.src} alt="Подсказка" />
						</div>
					</div>
				</div>
				<div className={styles.payments}>
					{tariffs.map((tariff) => {
						const isFill = tariff.type === TariffType.Fill
						const isTop = tariff.type === TariffType.Top

						const order = announcement.orders?.find(
							({ tariff: { type } }) => type === tariff.type
						)

						const isActive = !order?.expirationDate
						const isLittleLeft = order?.isLittleLeft

						return (
							<div key={tariff.type} className={styles.payment}>
								<button
									type="button"
									className={cn(
										styles.pay,
										isActive ? styles.active : styles.payed,
										isLittleLeft && styles.left
									)}
									onClick={() =>
										isActive &&
										setModalState({
											isShow: true,
											type: tariff.type,
										})
									}
								>
									{isLittleLeft && <AlertCircle />}
									<Picture
										src={
											isActive
												? isTop
													? raiseIcon.src
													: isFill
													? fillIcon.src
													: vipIcon.src
												: isTop
												? raiseGrayIcon.src
												: isFill
												? fillGrayIcon.src
												: vipGrayIcon.src
										}
										alt=""
									/>
									{!isActive
										? `До ${order.expirationDate}`
										: isTop
										? 'Поднять объявление'
										: isFill
										? 'Выделить цветом'
										: 'VIP'}
								</button>
								<div className={styles.info}>
									<Picture src={questionIcon.src} alt="Подробно" />
									{tariff.description && (
										<div className={styles.about}>
											<div
												className={styles.description}
												dangerouslySetInnerHTML={{ __html: tariff.description }}
											/>
										</div>
									)}
								</div>
							</div>
						)
					})}
				</div>
			</div>
			 )} 
			{editItem && ( /* Added condition to check if editItem is true */
				<Section className={styles.section}>
					<Container>
						<div className={styles.editFormWrap}>
							<div>
								<div className={`${styles.editHeader} text-center`}>
									<h2>Редактировать объявление</h2>
								</div>
								<div className={styles.inputWrap}>
									<label className={styles.label}>Имя продукта</label>
									<input
										className={styles.inputEdit}
										type="text"
										value={name}
										// onChange={(e) => setBrandName(e.target.value)}
										onChange={(e) => setName(e.target.value)}
									/>
								</div>
								<div className={styles.inputWrap}>
								<label className={styles.label}>Описания</label>
								<textarea
									className={styles.inputEdit}
									value={about}
									onChange={(e) => setAbout(e.target.value)}
								/>
								</div>
								<h4 className="text-center font-bold">Цена за количество товаров в заказе</h4>
								<h6>(есть 3 варианта - первый обязательный для заполнения)</h6>
								<h6>можно поставить разную стоимость за разное количество в заказе</h6>
								<div className={styles.inputWrap}>Вариант 1 (базовый - обязательный для заполнения)</div>

								<div className={styles.inputWrap}>
									<label className={styles.label}>Цена</label>
									<input
										className={styles.inputEdit}
										type="number"
										value={productPrice}
										onChange={(e) => setProductPrice(Number(e.target.value))}
									/>
								</div>
								<div className={styles.inputWrap}>
									<label className={styles.label}>Минимум на заказ</label>
									<input
										className={styles.inputEdit}
										type="number"
										value={productMinQuantity}
										onChange={(e) => setProductMinQuantity(Number(e.target.value))}
									/>
								</div>

								
									<div className={styles.inputWrap}>Вариант 2</div>

								<div className={styles.inputWrap}>
									<label className={styles.label}>Цена</label>
									<input
										className={styles.inputEdit}
										type="number"
										value={productPrice2}
										onChange={(e) => setProductPrice2(Number(e.target.value))}
									/> 
								</div>
								<div className={styles.inputWrap}>
									<label className={styles.label}>Минимум на заказ</label>
									<input
										className={styles.inputEdit}
										type="number"
										value={productMinQuantity2}
										onChange={(e) => setProductMinQuantity2(Number(e.target.value))}
									/>
								</div>

									<div className={styles.inputWrap}>Вариант 3</div>

								<div className={styles.inputWrap}>
									<label className={styles.label}>Цена</label>
									<input
										className={styles.inputEdit}
										type="number"
										value={productPrice3}
										onChange={(e) => setProductPrice3(Number(e.target.value))}
									/>
								</div>
								<div className={styles.inputWrap}>
									<label className={styles.label}>Минимум на заказ</label>
									<input
										className={styles.inputEdit}
										type="number"
										value={productMinQuantity3}
										onChange={(e) => setProductMinQuantity3(Number(e.target.value))}
									/>
								</div>
								




								<div className={styles.saveEditWrap}>
									<button className={styles.newad} onClick={handleEditItem}>
										<span className={styles.editSaveBtn}>
											ИЗМЕНИТЬ ОБЬЯВЛЕНИЕ
										</span>
									</button>
								</div>
							</div>
						</div>
					</Container>
				</Section>
			)}

			{isShow && currentTariff && (
				<Modal
					heading={
						isTop ? 'Поднять объявление' : isFill ? 'Выделить цветом' : 'VIP'
					}
					closeModal={() =>
						setModalState((prev) => ({
							...prev,
							isShow: false,
						}))
					}
				>
					{currentTariff.description && (
						<div
							className={styles.modalDescription}
							dangerouslySetInnerHTML={{ __html: currentTariff.description }}
						/>
					)}
					<button
						className={styles.buy}
						onClick={() =>
							placeOrder(
								{
									productId: announcement.id,
									tariffType: currentTariff.type,
								},
								currentTariff.price,
								() =>
									setModalState((prev) => ({
										...prev,
										isShow: false,
									}))
							)
						}
					>
						Купить за {currentTariff.price} ₽
					</button>
				</Modal>
			)}
		</>
	)
}

export default AnnouncementCard
