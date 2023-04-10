import { Stack, StackProps } from '@chakra-ui/react';

export const Main = (props: StackProps) => (
	<Stack
		width="100%"
		maxWidth="100%"
		//px={{ base: '0rem', md: '2rem', lg: '8rem' }} //-2rem since there is already a 2px padding in each block
		minHeight="fit-content"
		{...props}
	/>
);
