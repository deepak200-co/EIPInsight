'use client'

import {
    Box,
    chakra,
    Container,
    SimpleGrid,
    Stack,
    Text,
    useColorModeValue,
    VisuallyHidden,
} from '@chakra-ui/react'
import { ReactNode } from 'react'
import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'
import { motion } from 'framer-motion'

const SocialButton = ({
    children,
    label,
    href,
}: {
    children: ReactNode
    label: string
    href: string
}) => {
    return (
        <chakra.button
            bg={'#1a1d23'}
            color={'white'}
            rounded={'full'}
            w={10}
            h={10}
            cursor={'pointer'}
            as={'a'}
            href={href}
            display={'inline-flex'}
            alignItems={'center'}
            justifyContent={'center'}
            transition={'all 0.3s ease'}
            _hover={{
                bg: '#333842',
                transform: 'scale(1.1)',
            }}>
            <VisuallyHidden>{label}</VisuallyHidden>
            {children}
        </chakra.button>
    )
}

const ListHeader = ({ children }: { children: ReactNode }) => {
    return (
        <Text fontWeight={'bold'} fontSize={'lg'} mb={3} color={'gray.300'}>
            {children}
        </Text>
    )
}

export default function Footer() {
    return (
        <Box bg={'#05070a'} color={'gray.400'}>
            <Container as={Stack} maxW={'6xl'} py={10}>
                <SimpleGrid templateColumns={{ sm: '1fr 1fr', md: '2fr 1fr 1fr' }} spacing={8}>
                    <Stack spacing={6}>
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            <Box>
                                <Text fontSize="xl" fontWeight="bold" color={'white'}>
                                    EIPs Insight
                                </Text>
                                <Text fontSize={'lg'} color={'gray.500'}>v2.0.0</Text>
                            </Box>
                        </motion.div>

                        <Text fontSize={'sm'} color={'gray.500'}>
                            © 2025 EIPs Insight. All rights reserved.
                        </Text>
                        <Stack direction={'row'} spacing={5}>
                            <SocialButton label={'Twitter'} href={'#'}>
                                <FaTwitter size={20} />
                            </SocialButton>
                            <SocialButton label={'YouTube'} href={'#'}>
                                <FaYoutube size={20} />
                            </SocialButton>
                            <SocialButton label={'Instagram'} href={'#'}>
                                <FaInstagram size={20} />
                            </SocialButton>
                        </Stack>
                    </Stack>
                    <Stack align={'flex-start'}>
                        <ListHeader>Company</ListHeader>
                        <Box as="a" href={'#'} _hover={{ color: 'white' }}>
                            About us
                        </Box>
                        <Box as="a" href={'#'} _hover={{ color: 'white' }}>
                            Blog
                        </Box>
                        <Box as="a" href={'#'} _hover={{ color: 'white' }}>
                            Contact us
                        </Box>
                        <Box as="a" href={'#'} _hover={{ color: 'white' }}>
                            Pricing
                        </Box>
                        <Box as="a" href={'#'} _hover={{ color: 'white' }}>
                            Testimonials
                        </Box>
                    </Stack>
                    <Stack align={'flex-start'}>
                        <ListHeader>Support</ListHeader>
                        <Box as="a" href={'#'} _hover={{ color: 'white' }}>
                            Help Center
                        </Box>
                        <Box as="a" href={'#'} _hover={{ color: 'white' }}>
                            Terms of Service
                        </Box>
                        <Box as="a" href={'#'} _hover={{ color: 'white' }}>
                            Legal
                        </Box>
                        <Box as="a" href={'#'} _hover={{ color: 'white' }}>
                            Privacy Policy
                        </Box>
                        <Box as="a" href={'#'} _hover={{ color: 'white' }}>
                            Status
                        </Box>
                    </Stack>
                </SimpleGrid>
            </Container>
        </Box>
    )
}
