import { Flex, Text, Image } from '@chakra-ui/react'
import type { NextPage } from 'next'
import SearchForm from '../components/SearchForm'
import Head from 'next/head'

const Home: NextPage = () => {
	return (
		<Flex direction='column'>
			<Head>
				<title>Front-End-Exercise-Jolimoi</title>
				<meta
					name='description'
					content='A front end exercise for Jolimoi interview process'
				/>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<Flex h='50vh' direction={['column', 'column', 'row', 'row']}>
				<Flex
					bg='primary'
					h={['25vh', '25vh', 'auto']}
					w={['100vw', '100vw', '50vw', '50vw']}
				>
					<Flex
						direction='column'
						m='auto'
						textAlign='center'
						fontSize='2xl'
						fontWeight='bold'
					>
						<Text>This is a page for</Text>
						<Text>beauty Product search</Text>
					</Flex>
				</Flex>
				<Flex h={['25vh', '25vh', 'auto']} w={['100vw', '100vw', '50vw', '50vw']}>
					<Image w='100%' src='/beauty-products.jpeg' alt='beauty-products' />
				</Flex>
			</Flex>
			<Flex bg='secondary' direction='column' h='50vh'>
				<SearchForm />
			</Flex>
		</Flex>
	)
}

export default Home
