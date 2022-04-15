import { ListItem, UnorderedList, VStack, Button, Text, Flex } from '@chakra-ui/react'
import React, { FC, useEffect, useState } from 'react'
import { capitalizeFirstLetter } from '../Helpers'
import { Products } from '../type'

type SearchResultsProps = {
	products: Products[]
}

const SearchResults: FC<SearchResultsProps> = ({ products }) => {
	const [productsToDisplay, setProductsToDisplay] = useState(products.slice(0, 3)) // initially we will show 3 blogs

	const [showLoadMore, setShowLoadMore] = useState(true)

	const loadMoreProducts = () => {
		let currentLoadedProducts = [...productsToDisplay]
		if (currentLoadedProducts.length < products.length) {
			currentLoadedProducts = products.slice(0, currentLoadedProducts.length + 3)
			setProductsToDisplay(currentLoadedProducts)
		} else {
			setShowLoadMore(false)
		}
	}

	if (productsToDisplay.length === 0) {
		return <Text color='white'>Search for a Product.</Text>
	}

	useEffect(() => {
		const initialProducts = products.slice(0, 3)
		setProductsToDisplay(initialProducts)
	}, [products])

	return (
		<VStack h='40vh'>
			<Flex justifySelf='flex-start' overflow='scroll'>
				<UnorderedList>
					{productsToDisplay.map((product) => (
						<ListItem color='white' key={product.id}>
							<Flex w={['90vw', '90vw', '70vw', '40vw']} direction='row'>
								<Text mr={1} fontWeight='bold'>
									{capitalizeFirstLetter(product.brand)}
								</Text>
								<Text isTruncated> {`- ${capitalizeFirstLetter(product.name)}`}</Text>
							</Flex>
						</ListItem>
					))}
				</UnorderedList>
			</Flex>
			{productsToDisplay.length > 0 && showLoadMore ? (
				<Button my={2} py={2} px={9} onClick={loadMoreProducts}>
					Load more
				</Button>
			) : (
				<Text color='white'>No more products to load 😶 !</Text>
			)}
		</VStack>
	)
}

export default SearchResults
