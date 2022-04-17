import {
	ListItem,
	UnorderedList,
	VStack,
	Button,
	Text,
	Flex,
	Box,
} from '@chakra-ui/react'
import React, { FC } from 'react'
import { capitalizeFirstLetter } from '../Helpers'
import { useLoadMore } from '../hooks/useLoadMore'
import { Products } from '../type'

type SearchResultsProps = {
	products: Products[]
}

const SearchResults: FC<SearchResultsProps> = ({ products }) => {
	const { onLoadMore, productsToDisplay, showLoadMore, bottomRef } = useLoadMore(products)

	return (
		<VStack h='40vh'>
			<Flex direction='column' justifySelf='flex-start' overflow='scroll'>
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
				{/* use this div to make the scroll automatic  this div is always in view */}
				<Box ref={bottomRef} />
			</Flex>
			{productsToDisplay.length > 0 && showLoadMore ? (
				<Button my={2} py={4} px={9} onClick={onLoadMore}>
					Load more
				</Button>
			) : (
				<Text color='white'>No more products to load 😊 !</Text>
			)}
		</VStack>
	)
}

export default SearchResults
