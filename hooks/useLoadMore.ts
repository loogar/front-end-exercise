import { MutableRefObject, useEffect, useRef, useState } from 'react'
import { Products } from '../type'

type UseFetchProductsType = {
	onLoadMore: () => void
	showLoadMore: boolean
	productsToDisplay: Products[]
	bottomRef: MutableRefObject<null | HTMLDivElement>
}

export const useLoadMore = (products: Products[]): UseFetchProductsType => {
	const [productsToDisplay, setProductsToDisplay] = useState(products.slice(0, 3)) // initially we will show 3 Products

	const [showLoadMore, setShowLoadMore] = useState(true)

	const bottomRef = useRef<null | HTMLDivElement>(null)

	useEffect(() => {
		const initialProducts = products.slice(0, 3)
		setProductsToDisplay(initialProducts)
	}, [products])

	const onLoadMore = () => {
		// auto scroll to the bottom
		bottomRef.current &&
			bottomRef.current.scrollIntoView({
				block: 'end',
				inline: 'center',
				behavior: 'smooth',
			})

		// display three more on every load more

		let currentLoadedProducts = [...productsToDisplay]
		if (currentLoadedProducts.length < products.length) {
			currentLoadedProducts = products.slice(0, currentLoadedProducts.length + 3)
			setProductsToDisplay(currentLoadedProducts)
		} else {
			// hide the load more button when the product length is exceeded
			setShowLoadMore(false)
		}
	}

	return { onLoadMore, productsToDisplay, showLoadMore, bottomRef }
}
