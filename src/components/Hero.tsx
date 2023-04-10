import {
	Box,
	Button,
	Flex,
	Grid,
	GridItem,
	Heading,
	Stack,
	Text,
} from '@chakra-ui/react';
import { FiArrowUpRight } from 'react-icons/fi';
import { ScrollAnimation } from './ScrollAnimation';


export const Hero = ({ title }: { title: string }) => {
	return (
		<Grid
			paddingY={'12'}
			px={{ base: '2rem', md: '10rem' }}
			templateColumns="repeat(5, 1fr)"
			width={'100%'}
			backgroundColor={'#fff0e1'}

		>
			<GridItem
				colSpan={{ xs: 12, md: 2 }}
				height={'fit-content'}
				alignSelf={'center'}
				paddingY={6}
				placeSelf={'start'}

			>
				<Stack>
					<ScrollAnimation animation="fade-up">
						<Heading fontWeight={'semibold'} fontSize="7xl" lineHeight={'base'}>
							Detchi.
						</Heading>
					</ScrollAnimation>
					<ScrollAnimation animation="fade-up">
						<Text fontSize={{ base: 'sm', lg: 'md' }} paddingY={1}>
							Xsauce is a dynamic, decentralized ecosystem which allows you to
							translate your knowledge of culture into money in your pocket.
						</Text>
					</ScrollAnimation>
					<ScrollAnimation animation="fade-up">
						<Flex
							width={'100%'}
							justifyContent={{ base: 'center', md: 'start' }}
						>
							<Button
								width={'170px'}
								bg="brand.100"
								color="black"
								fontSize={{ xs: 'xs', md: 'sm' }}
								whiteSpace={'break-spaces'}
								border="2px"
								borderRadius={'0px'}
								borderColor={'black'}
							>
								<Text whiteSpace={'break-spaces'} padding={2}>
									Contact
								</Text>
								<FiArrowUpRight />
							</Button>
						</Flex>
					</ScrollAnimation>
				</Stack>
			</GridItem>

			<GridItem
				colStart={{ xs: 1, md: 3 }}
				colEnd={{ xs: 6, md: 6 }}
				height={'fit-content'}
				width={'100%'}
				placeSelf={'center'}
				display={"flex"}
			>
				{/*TODO: Fix scaling on small sc */}
				<Box
					height={12}
					width={"100%"}
					backgroundColor={"#F7E548"}
				>
				</Box>
				<Box
					height={7}
					width={"70%"}
					marginTop={4}

					backgroundColor={"#f74896"}
				>
				</Box>
				<Box
					marginTop={4}
					height={10}
					alignSelf={"end"}
					width={"50%"}
					backgroundColor={"#ad3269"}
				>
				</Box>
			</GridItem>
		</Grid>
	);
};

Hero.defaultProps = {
	title: 'with-chakra-ui-typescript',
};
