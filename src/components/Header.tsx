import {
	Box,
	Button,
	Flex,
	Hide,
	HStack,
	Show,
	Text,
	useColorModeValue,
} from '@chakra-ui/react';
import { HeaderDrawer } from './HeaderDrawer';
import { JessieLogoButton } from './JessieLogoButton';

export const Header = ({ title }: { title: string }) => {
	const navColor = useColorModeValue('black', 'white');

	return (
		<Flex
			justifyContent={{ base: "flex-end", md: "center"}}
			alignItems="center"
			height="64px"
			borderBottom={'1px solid'}
			borderColor={'brand.100'}
			backgroundColor={'brand.100'}
			flexDirection={'row'}
			px={{ base: '0rem', md: '2rem', lg: '8rem' }}
			width={'100%'}
		>
			<Hide above="md">
				<Box>
					<HeaderDrawer />
				</Box>
			</Hide>
			<Show above="md">
				<HStack spacing={6} fontWeight={'semibold'} fontSize={'sm'}>
					<a

					>
						<Button
							whiteSpace={'nowrap'}
							variant="link"
							color={navColor}
							fontWeight={'semibold'}
							fontSize={'sm'}
						>
							<Text>About</Text>
						</Button>
					</a>
					<a

					>
						<Button
							whiteSpace={'nowrap'}
							variant="link"
							color={navColor}
							fontWeight={'semibold'}
							fontSize={'sm'}
						>
							<Text>Experience</Text>
						</Button>
					</a>

					<a

					>
						<Button
							whiteSpace={'nowrap'}
							variant="link"
							color={navColor}
							fontWeight={'semibold'}
							fontSize={'sm'}
						>
							<Text>Projects</Text>
						</Button>
					</a>


					<Flex
						width="100%"
						justifySelf="flex-start"
						alignSelf="left"
						backgroundColor={"red"}
					>
					<a

					>
						<Button
							position={{ base: "static", md: "absolute" }}
							top={{ base: "0", md: "3" }}
							right={{ base: "0", md: "10" }}
							width={'100px'}
							bg="white"
							color="brand.100"
							fontSize={{ xs: 'xs', md: 'xs' }}
							whiteSpace={'break-spaces'}
							border="2px"
							borderRadius={"0px"}
							borderColor={'black'}
						>
							{/* <ArrowBackIcon /> */}
							<Text>Resume</Text>
						</Button>
					</a>
					</Flex>
				</HStack>
			</Show>
			<JessieLogoButton />
		</Flex>
	);
};

Header.defaultProps = {
	title: 'with-chakra-ui-typescript',
};
