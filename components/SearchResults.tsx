import { ListItem, UnorderedList, VStack, Button, Text, Flex } from '@chakra-ui/react'
import React, { FC } from 'react'
import { capitalizeFirstLetter } from '../Helpers'
import { useLoadMore } from '../hooks/useLoadMore'
import { Products } from '../type'

type SearchResultsProps = {
	products: Products[]
}

const SearchResults: FC<SearchResultsProps> = ({ products }) => {
	const { loadMoreProducts, productsToDisplay, showLoadMore } = useLoadMore(products)

	if (productsToDisplay.length === 0) {
		return <Text color='white'>Search for a Product.</Text>
	}

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
