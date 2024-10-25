import {
	AnnouncementCard,
	OrderInput,
	ProductQueryInput,
	useAnnouncementsQuery,
	usePlaceOrderMutation,
} from '@/__generated__/output';
import { useSearchFilter } from '@/hooks/helpers/filters/useSearchFilter';
import {
	Dispatch,
	SetStateAction,
	useEffect,
	useRef,
	useState,
} from 'react';
import toast from 'react-hot-toast';

export const useAnnouncements = (
	query: ProductQueryInput,
	setBalance: Dispatch<SetStateAction<number>>
) => {
	const { searchTerm, debounceSearch, handleSearch } = useSearchFilter();

	const [checked, setChecked] = useState<number[]>([]);
	const [announcements, setAnnouncements] = useState<AnnouncementCard[]>([]);
	const [page, setPage] = useState(1);

	const scrollRef = useRef<HTMLDivElement>(null);

	const [placeOrderMutate] = usePlaceOrderMutation({
		fetchPolicy: 'no-cache',
		onError: ({ message }) => {
			toast.error(message);
		},
	});

	const placeOrder = (
		data: OrderInput,
		price: number,
		closeModal: () => void
	) =>
		placeOrderMutate({
			variables: {
				data,
			},
			onCompleted: ({ placeOrder }) => {
				setAnnouncements((prev) => {
					return prev.map((item) => {
						if (item.id !== data.productId) {
							return item;
						}

						return {
							...item,
							orders: [...item.orders, placeOrder],
						};
					});
				});
				setBalance((prev) => prev && (prev - price < 0 ? prev : prev - price));
				closeModal();
			},
		});

	const { data, error, refetch } = useAnnouncementsQuery({
		fetchPolicy: 'no-cache',
		variables: {
			query: {
				...query,
				searchTerm: debounceSearch,
			},
		},
	});

	useEffect(() => {
		const count = data?.announcements.count || 0;
		const pagesCount = Math.ceil(count / (query.perPage || 15));
		const scrollArea = scrollRef.current;

		if (!scrollArea || pagesCount <= 1 || page >= pagesCount) return;

		const handleScroll = () => {
			const { scrollTop, clientHeight, scrollHeight } = scrollArea;
			if (scrollTop + clientHeight >= scrollHeight * 0.9) {
				setPage((prev) => prev + 1);
			}
		};

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, [page]);

	useEffect(() => {
		const announcements = data?.announcements.announcements;

		if (announcements) {
			setAnnouncements(announcements);
		}
	}, [data]);

	const toggle = (announcementId: number) => {
		setChecked((prev) =>
			prev.includes(announcementId)
				? prev.filter((id) => id !== announcementId)
				: [...prev, announcementId]
		);
	};

	return {
		toggle,
		checked,
		setChecked,
		scrollRef,
		announcements,
		error,
		searchTerm,
		handleSearch,
		placeOrder,
		refetch,
	};
};
