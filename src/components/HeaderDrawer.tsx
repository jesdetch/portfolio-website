import { HamburgerIcon } from '@chakra-ui/icons';
import {
	Button,
	Drawer,
	DrawerBody,
	DrawerCloseButton,
	DrawerContent,
	DrawerFooter,
	DrawerHeader,
	DrawerOverlay,
	Flex,
	Text,
	useColorModeValue,
	useDisclosure,
	VStack,
} from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';

export const HeaderDrawer = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const navColor = useColorModeValue('black', 'white');
	const drawerBg = useColorModeValue('brand.900', 'brand.200');

	return (
		<>
			<Button color="text" onClick={onOpen} backgroundColor={'inherit'}>
				<HamburgerIcon boxSize={5} />
			</Button>
			<Drawer isOpen={isOpen} placement="right" onClose={onClose}>
				<DrawerOverlay />
				<DrawerContent backgroundColor={drawerBg}>
					<DrawerCloseButton size={'lg'} />
					<DrawerBody>
						<VStack
							spacing={10}
							align="stretch"
							marginTop={10}
							alignItems="left"
							justifyContent="left"
							flex={1}
							color="colors.gray.500"
							fontSize={'xl'}
							fontWeight={'semibold'}
						>
							<a>
								<Button
									display="flex"
									variant={'link'}
									fontSize={'xl'}
									color={navColor}
									fontWeight={'semibold'}
								>
									<Text>About</Text>
								</Button>
							</a>
							<a>
								<Button
									display="flex"
									variant={'link'}
									fontSize={'xl'}
									color={navColor}
									fontWeight={'semibold'}
								>
									<Text>Projects</Text>
								</Button>
							</a>

							<a>
								<Button
									display="flex"
									variant={'link'}
									fontSize={'xl'}
									color={navColor}
									fontWeight={'semibold'}
								>
									{/* <ArrowBackIcon /> */}
									<Text>Contact</Text>
								</Button>
							</a>
						</VStack>
					</DrawerBody>
					<DrawerFooter borderTop={'1px solid'} borderColor={'brand.200'} />
				</DrawerContent>
			</Drawer>
		</>
	);
};
