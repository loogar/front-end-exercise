import { useEffect, useState } from 'react'
import { Products } from '../type'

type UseFetchProductsType = {
	loadMoreProducts: () => void
	showLoadMore: boolean
	productsToDisplay: Products[]
}

export const useLoadMore = (products: Products[]): UseFetchProductsType => {
	const [productsToDisplay, setProductsToDisplay] = useState(products.slice(0, 3)) // initially we will show 3 blogs

	const [showLoadMore, setShowLoadMore] = useState(true)

	useEffect(() => {
		const initialProducts = products.slice(0, 3)
		setProductsToDisplay(initialProducts)
	}, [products])

	const loadMoreProducts = () => {
		let currentLoadedProducts = [...productsToDisplay]
		if (currentLoadedProducts.length < products.length) {
			currentLoadedProducts = products.slice(0, currentLoadedProducts.length + 3)
			setProductsToDisplay(currentLoadedProducts)
		} else {
			setShowLoadMore(false)
		}
	}

	return { loadMoreProducts, productsToDisplay, showLoadMore }
}
