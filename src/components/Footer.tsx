import { Search2Icon, SearchIcon } from '@chakra-ui/icons';
import {
	background,
	border,
	Box,
	Button,
	Divider,
	Flex,
	FlexProps,
	Grid,
	GridItem,
	HStack,
	IconButton,
	Spacer,
	Stack,
	Text,
	useColorMode,
	useColorModeValue,
	VStack,
} from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';
import { FaRegHandPeace, FaTwitter, FaGithub } from 'react-icons/fa';
import { BlockFive } from './BlockFive';
import { ScrollAnimation } from './ScrollAnimation';

export const Footer = (props: FlexProps) => {
	const navColor = useColorModeValue('black', 'white');
	const borderColor = useColorModeValue('brand.200', 'brand.500');

	return (
		<Flex
			as="footer"
			mb={0}
			flexDirection={'column'}
			width={'100%'}
			borderTop={'1px solid'}
			borderColor={borderColor}
		//px={{ md: '8rem' }}
		>
			<BlockFive px={{ base: '2rem', md: '4rem', lg: '10rem' }} />

			<Grid
				templateColumns="repeat(5, 1fr)"
				width={'100%'}
				paddingY={20}
				px={{ base: '2rem', md: '4rem', lg: '10rem' }}
				borderTop={'1px solid'}
				borderColor={borderColor}
			>
				<GridItem
					colSpan={{ xs: 5, md: 2 }}
					h="10"
					height={'fit-content'}
					alignSelf={'center'}
					as={ScrollAnimation}
				>
					<Box paddingY={3}>
						<svg
							width="33"
							height="29"
							viewBox="0 0 33 29"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M22.6347 17.7118L31.0665 25.0762C32.8526 26.6405 32.5987 29.0008 30.1236 29.0008H25.4634C24.729 29.0008 24.0218 28.7355 23.505 28.2506L17.0678 22.2951C16.7505 22.0024 16.2337 22.0024 15.9164 22.2951L9.43388 28.2506C8.91709 28.7263 8.21897 28.9916 7.48459 28.9916H2.75189C0.29488 28.9916 -0.929093 26.2655 0.829802 24.692L8.6995 17.6386C9.20722 17.1812 9.19815 16.4311 8.68136 15.992L1.46445 9.82602C-0.366972 8.27997 0.838868 5.48975 3.33215 5.48975H7.61152C8.32777 5.48975 9.01682 5.7459 9.52454 6.20331L15.9073 11.8844L22.6347 17.7118Z"
								fill="#0C1615"
							/>
							<path
								fill-rule="evenodd"
								clip-rule="evenodd"
								d="M21.1997 4.42065C19.9731 5.73654 18.9951 6.78574 18.9951 9L19.6482 8.99942C19.9026 11.6696 22.1337 13.759 24.8464 13.759C27.7295 13.759 30.0686 11.3988 30.0686 8.48961H29.9794C29.8491 6.47727 28.9223 5.49696 27.7682 4.2761C26.8419 3.29619 25.7691 2.16131 24.8439 0.213421C24.7101 -0.0775251 24.2896 -0.0678269 24.1558 0.223119C23.2469 2.22434 22.1489 3.40235 21.1997 4.42065Z"
								fill="#0C1615"
							/>
						</svg>
					</Box>
					<Text fontSize="md" paddingY={3}>
						Ecosystem of three tools that merge fashion, collectibles & other
						cultural assets with blockchain technology.
					</Text>
				</GridItem>

				<GridItem colSpan={5}>
					<Stack
						paddingY={10}
						spacing={5}
						direction={[null, 'column', 'row']}
						justifyContent={{ sx: 'center', md: 'left' }}
						fontWeight={'semibold'}
						fontSize={'sm'}
						color={navColor}
					>
						<ScrollAnimation animation="fade-up">
							<a
								href="https://docs.xsauce.io/getting-started/introduction"
								target={'_blank'}
								rel={'noreferrer'}
							>
								<Button
									whiteSpace={'nowrap'}
									variant="link"
									fontWeight={'semibold'}
									fontSize={'sm'}
									color={navColor}
								>
									<Text>About</Text>
								</Button>
							</a>
						</ScrollAnimation>
						<ScrollAnimation animation="fade-up">
							<a
								href="https://docs.xsauce.io/applications/prediction-markets-v.0-beta"
								target={'_blank'}
								rel={'noreferrer'}
							>
								<Button
									whiteSpace={'nowrap'}
									variant="link"
									fontWeight={'semibold'}
									fontSize={'sm'}
									color={navColor}
								>
									<Text>How it works</Text>
								</Button>
							</a>
						</ScrollAnimation>
						<ScrollAnimation animation="fade-up">
							<Flex flexDirection={'column'}>
								<Link href="/">
									<Button
										whiteSpace={'nowrap'}
										variant="link"
										fontWeight={'semibold'}
										fontSize={'sm'}
										display={'flex'}
										flexDirection={'row'}
										disabled
										justifyContent={'left'}
										alignItems={'left'}
										color={navColor}
									>
										<Text paddingX={1}>The Xchange</Text>
										<svg width="46" height="22" viewBox="0 0 46 22" fill="none" xmlns="http://www.w3.org/2000/svg">
											<rect width="46" height="22" rx="11" fill="#ACFF00" fill-opacity="0.8" />
											<path d="M14.041 8.56534C13.9956 8.16193 13.8081 7.84943 13.4785 7.62784C13.149 7.40341 12.7342 7.29119 12.2342 7.29119C11.8762 7.29119 11.5666 7.34801 11.3052 7.46165C11.0439 7.57244 10.8407 7.72585 10.6958 7.92188C10.5538 8.11506 10.4828 8.33523 10.4828 8.58239C10.4828 8.78977 10.5311 8.96875 10.6277 9.11932C10.7271 9.26989 10.8564 9.39631 11.0154 9.49858C11.1774 9.59801 11.3507 9.68182 11.5353 9.75C11.72 9.81534 11.8975 9.86932 12.068 9.91193L12.9203 10.1335C13.1987 10.2017 13.4842 10.294 13.7768 10.4105C14.0694 10.527 14.3407 10.6804 14.5907 10.8707C14.8407 11.0611 15.0424 11.2969 15.1958 11.5781C15.3521 11.8594 15.4302 12.196 15.4302 12.5881C15.4302 13.0824 15.3024 13.5213 15.0467 13.9048C14.7939 14.2884 14.426 14.5909 13.943 14.8125C13.4629 15.0341 12.8819 15.1449 12.2001 15.1449C11.5467 15.1449 10.9814 15.0412 10.5041 14.8338C10.0268 14.6264 9.65323 14.3324 9.38335 13.9517C9.11346 13.5682 8.96431 13.1136 8.9359 12.5881H10.2569C10.2825 12.9034 10.3848 13.1662 10.5637 13.3764C10.7456 13.5838 10.9771 13.7386 11.2583 13.8409C11.5424 13.9403 11.8535 13.9901 12.1916 13.9901C12.5637 13.9901 12.8947 13.9318 13.1845 13.8153C13.4771 13.696 13.7072 13.5312 13.8748 13.321C14.0424 13.108 14.1262 12.8594 14.1262 12.5753C14.1262 12.3168 14.0524 12.1051 13.9047 11.9403C13.7598 11.7756 13.5623 11.6392 13.3123 11.5312C13.0652 11.4233 12.7853 11.3281 12.4728 11.2457L11.4416 10.9645C10.7427 10.7741 10.1887 10.4943 9.77965 10.125C9.3734 9.75568 9.17028 9.26705 9.17028 8.65909C9.17028 8.15625 9.30664 7.71733 9.57937 7.34233C9.8521 6.96733 10.2214 6.67614 10.6873 6.46875C11.1532 6.25852 11.6788 6.15341 12.264 6.15341C12.8549 6.15341 13.3762 6.2571 13.8279 6.46449C14.2825 6.67188 14.6404 6.95739 14.9018 7.32102C15.1632 7.68182 15.2995 8.09659 15.3109 8.56534H14.041ZM19.6586 15.1321C19.0449 15.1321 18.5094 14.9915 18.052 14.7102C17.5946 14.429 17.2395 14.0355 16.9867 13.5298C16.7338 13.0241 16.6074 12.4332 16.6074 11.7571C16.6074 11.0781 16.7338 10.4844 16.9867 9.97585C17.2395 9.46733 17.5946 9.07244 18.052 8.79119C18.5094 8.50994 19.0449 8.36932 19.6586 8.36932C20.2722 8.36932 20.8077 8.50994 21.2651 8.79119C21.7225 9.07244 22.0776 9.46733 22.3304 9.97585C22.5833 10.4844 22.7097 11.0781 22.7097 11.7571C22.7097 12.4332 22.5833 13.0241 22.3304 13.5298C22.0776 14.0355 21.7225 14.429 21.2651 14.7102C20.8077 14.9915 20.2722 15.1321 19.6586 15.1321ZM19.6628 14.0625C20.0605 14.0625 20.3901 13.9574 20.6515 13.7472C20.9128 13.5369 21.106 13.2571 21.231 12.9077C21.3588 12.5582 21.4228 12.1733 21.4228 11.7528C21.4228 11.3352 21.3588 10.9517 21.231 10.6023C21.106 10.25 20.9128 9.96733 20.6515 9.75426C20.3901 9.54119 20.0605 9.43466 19.6628 9.43466C19.2623 9.43466 18.9299 9.54119 18.6657 9.75426C18.4043 9.96733 18.2097 10.25 18.0819 10.6023C17.9569 10.9517 17.8944 11.3352 17.8944 11.7528C17.8944 12.1733 17.9569 12.5582 18.0819 12.9077C18.2097 13.2571 18.4043 13.5369 18.6657 13.7472C18.9299 13.9574 19.2623 14.0625 19.6628 14.0625ZM26.889 15.1321C26.2754 15.1321 25.7399 14.9915 25.2825 14.7102C24.8251 14.429 24.47 14.0355 24.2172 13.5298C23.9643 13.0241 23.8379 12.4332 23.8379 11.7571C23.8379 11.0781 23.9643 10.4844 24.2172 9.97585C24.47 9.46733 24.8251 9.07244 25.2825 8.79119C25.7399 8.50994 26.2754 8.36932 26.889 8.36932C27.5027 8.36932 28.0382 8.50994 28.4956 8.79119C28.9529 9.07244 29.3081 9.46733 29.5609 9.97585C29.8137 10.4844 29.9402 11.0781 29.9402 11.7571C29.9402 12.4332 29.8137 13.0241 29.5609 13.5298C29.3081 14.0355 28.9529 14.429 28.4956 14.7102C28.0382 14.9915 27.5027 15.1321 26.889 15.1321ZM26.8933 14.0625C27.291 14.0625 27.6206 13.9574 27.8819 13.7472C28.1433 13.5369 28.3365 13.2571 28.4615 12.9077C28.5893 12.5582 28.6532 12.1733 28.6532 11.7528C28.6532 11.3352 28.5893 10.9517 28.4615 10.6023C28.3365 10.25 28.1433 9.96733 27.8819 9.75426C27.6206 9.54119 27.291 9.43466 26.8933 9.43466C26.4927 9.43466 26.1603 9.54119 25.8961 9.75426C25.6348 9.96733 25.4402 10.25 25.3123 10.6023C25.1873 10.9517 25.1248 11.3352 25.1248 11.7528C25.1248 12.1733 25.1873 12.5582 25.3123 12.9077C25.4402 13.2571 25.6348 13.5369 25.8961 13.7472C26.1603 13.9574 26.4927 14.0625 26.8933 14.0625ZM32.6365 11.1136V15H31.3624V8.45455H32.5854V9.51989H32.6664C32.8169 9.1733 33.0527 8.89489 33.3738 8.68466C33.6976 8.47443 34.1053 8.36932 34.5968 8.36932C35.0428 8.36932 35.4334 8.46307 35.7686 8.65057C36.1039 8.83523 36.3638 9.1108 36.5485 9.47727C36.7331 9.84375 36.8255 10.2969 36.8255 10.8366V15H35.5513V10.9901C35.5513 10.5156 35.4277 10.1449 35.1806 9.87784C34.9334 9.60795 34.5939 9.47301 34.1621 9.47301C33.8667 9.47301 33.6039 9.53693 33.3738 9.66477C33.1465 9.79261 32.9661 9.98011 32.8326 10.2273C32.7019 10.4716 32.6365 10.767 32.6365 11.1136Z" fill="#0C1615" />
										</svg>

									</Button>
								</Link>
								<Text
									fontSize={'10px'}
									fontWeight={'medium'}
									alignSelf={'left'}
								>
									- Coming Soon -
								</Text>
							</Flex>
						</ScrollAnimation>
						<ScrollAnimation animation="fade-up">
							<a
								href="https://docs.xsauce.io/connect/socials"
								target={'_blank'}
								rel={'noreferrer'}
							>
								<Button
									whiteSpace={'nowrap'}
									variant="link"
									fontWeight={'semibold'}
									fontSize={'sm'}
									color={navColor}
								>
									{/* <ArrowBackIcon /> */}
									<Text>Contact us</Text>
								</Button>
							</a>
						</ScrollAnimation>
					</Stack>
				</GridItem>

				<GridItem colSpan={{ xs: 5, md: 2 }}>
					<ScrollAnimation animation="fade-up">
						<Text fontSize={'12px'} fontWeight={400}>
							Legal Disclaimer: The prediction market known as "The Xchange" is
							for informational and educational purposes only. "The Xchange" is
							a decentralized protocol operated by autonomous smart contracts
							and does not have a vested interest in the outcomes of any market.
						</Text>
					</ScrollAnimation>
				</GridItem>
			</Grid>
			<Flex
				borderTop={'1px solid'}
				borderColor={borderColor}
				paddingY={5}
				px={'2rem'}
			>
				<Text alignSelf={'center'} fontSize={'xs'}>
					© 2022 Xsauce. All rights reserved.
				</Text>
				<Spacer />
				<HStack spacing={0}>
					<a
						href="https://twitter.com/xsauce_io"
						target={'_blank'}
						rel={'noreferrer'}
					>
						<IconButton
							color={'brand.100'}
							bg={'none'}
							aria-label="Twitter icon"
							icon={<FaTwitter />}
						/>
					</a>
					<a
						href="https://github.com/xsauce-io"
						target={'_blank'}
						rel={'noreferrer'}
					>
						<IconButton
							color={'brand.100'}
							bg={'none'}
							aria-label="Twitter Icon"
							icon={<FaGithub />}
						/>
					</a>
					<a
						href="https://angel.co/company/xsauced-1"
						target={'_blank'}
						rel={'noreferrer'}
					>
						<IconButton
							color={'brand.100'}
							bg={'none'}
							aria-label="Hand Peace"
							icon={<FaRegHandPeace />}
						/>
					</a>
				</HStack>
			</Flex>
		</Flex>
	);
};
