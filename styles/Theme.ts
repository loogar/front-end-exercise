import { extendTheme } from '@chakra-ui/react'
import { createBreakpoints } from '@chakra-ui/theme-tools'

const breakpoints = createBreakpoints({
	sm: '30em',
	md: '48em',
	lg: '62em',
	xl: '80em',
	'2xl': '96em',
})

const colors = {
	primary: '#55D7FF',
	secondary: '#DB0992',
	black: '#000000	',
	white: '#FFFFFF	',
}

const overrides = {
	colors,
	breakpoints,
}

const theme = extendTheme(overrides)

export default theme
