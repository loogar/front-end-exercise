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
import SearchResults from './SearchResults'
import { useFetchProducts } from '../hooks/useFetchProducts'

const SearchForm = () => {
	const [input, setInput] = useState('')

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) =>
		setInput(e.target.value)

	const handleOnSubmit = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (e.key === 'Enter' && input !== '') {
			e.preventDefault()
			onSearch(input)
		}
	}
	const { onSearch, isLoading, isEmpty, results } = useFetchProducts()

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
							onKeyDown={handleOnSubmit}
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

			{isLoading && <Spinner size='lg' color='white' />}

			{!isEmpty && results.length > 0 && !isLoading && (
				<SearchResults products={results} />
			)}

			{isEmpty && (
				<Text color='white'>Sorry we dont have the product you looking for 😪</Text>
			)}
		</VStack>
	)
}

export default SearchForm
