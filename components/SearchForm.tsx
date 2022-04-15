/* eslint-disable @typescript-eslint/no-explicit-any */
import {
	FormControl,
	Input,
	HStack,
	Button,
	Spinner,
	VStack,
	InputGroup,
	InputRightElement,
	CloseButton,
	Text,
} from '@chakra-ui/react'
import React, { useState } from 'react'
import { Products } from '../type'
import SearchResults from './SearchResults'

const SearchForm = () => {
	const [input, setInput] = useState('')
	const [isLoading, setIsLoading] = useState(false)
	const [isEmpty, setIsEmpty] = useState(false)
	const [results, setResults] = useState<Products[]>([])
	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) =>
		setInput(e.target.value)

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

	return (
		<VStack justifyContent='center' mx='auto'>
			<FormControl justifyContent='center' mt='1rem'>
				<HStack w={['95vw', '95vw', '70vw', '60vw', '40vw']} spacing={4}>
					<InputGroup>
						{input !== '' && (
							<InputRightElement>
								<CloseButton onClick={() => setInput('')} />
							</InputRightElement>
						)}
						<Input
							variant='filled'
							bg='white'
							_focus={{ bg: 'white' }}
							_hover={{ bg: 'white' }}
							border='0.5px solid'
							borderColor='black'
							value={input}
							onChange={handleInputChange}
						/>
					</InputGroup>

					<Button
						_hover={{
							bg: 'primary',
							color: 'black',
						}}
						bg='primary'
						variant='solid'
						color='black'
						py={2}
						px={9}
						onClick={() => onSearch(input)}
					>
						Search
					</Button>
				</HStack>
			</FormControl>

			{isLoading ? (
				<Spinner size='lg' color='white' />
			) : isEmpty ? (
				<Text color='white'>Sorry we dont have the product you looking for 😪</Text>
			) : (
				<SearchResults products={results} />
			)}
		</VStack>
	)
}

export default SearchForm
