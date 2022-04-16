import { useState } from 'react'
import { Products } from '../type'

type UseFetchProductsType = {
	onSearch: (query: string) => Promise<void>
	isLoading: boolean
	isEmpty: boolean
	results: Products[]
}

export const useFetchProducts = (): UseFetchProductsType => {
	const [isLoading, setIsLoading] = useState(false)
	const [isEmpty, setIsEmpty] = useState(false)
	const [results, setResults] = useState<Products[]>([])

	const onSearch = async (query: string) => {
		setIsLoading(true)
		setIsEmpty(false)
		const response = await fetch(
			`https://thawing-scrubland-03171.herokuapp.com/https://skincare-api.herokuapp.com/product?q=${query}`
		)
		const data = await response.json()
		setResults(data)
		data.length === 0 && setIsEmpty(true)
		setIsLoading(false)
	}

	return { onSearch, isLoading, isEmpty, results }
}
