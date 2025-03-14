"use client";
import {
    Box,
    Button,
    Collapse,
    Flex,
    IconButton,
    Input,
    InputGroup,
    InputLeftElement,
    Popover,
    PopoverContent,
    PopoverTrigger,
    Stack,
    Text,
    useColorMode,
    useColorModeValue,
    useDisclosure,
} from '@chakra-ui/react';
import { CloseIcon, HamburgerIcon, MoonIcon, SunIcon, SearchIcon} from '@chakra-ui/icons';
import {FaGithub} from "react-icons/fa";
import React, {useState} from "react";

const NavBar = () => {
    const {isOpen, onToggle} = useDisclosure();
    const {colorMode, toggleColorMode} = useColorMode();
    const [searchQuery, setSearchQuery] = useState("");

    return (
        <Box boxShadow="sm" bg={useColorModeValue('white', 'gray.900')} px={4}>
            <Flex minH={'70px'} align={'center'} justify={'space-between'}>
                <Flex display={{base: 'flex', md: 'none'}}>
                    <IconButton
                        onClick={onToggle}
                        icon={isOpen ? <CloseIcon w={3} h={3}/> : <HamburgerIcon w={5} h={5}/> }
                        variant={'ghost'}
                        aria-label={'Toggle Navigation'}
                    />
                </Flex>
                
                <Button as="a" href="/" variant="link" fontSize="2xl" fontWeight="bold" _hover={{textDecoration: "none"}}>
                    EIPs Insight
                </Button>
                
                <Flex display={{base: 'none', md: 'flex'}}>
                    <DesktopNav/>
                </Flex>
                
                <InputGroup maxW={{base: "100px", md: "200px"}}>
                    <InputLeftElement pointerEvents="none">
                        <SearchIcon color="gray.400"/>
                    </InputLeftElement>
                    <Input
                        placeholder="Search..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        borderRadius="full"
                    />
                </InputGroup>
                
                <Stack direction={'row'} spacing={4}>
                    <IconButton aria-label="Github" variant="outline" borderRadius="full">
                        <FaGithub/>
                    </IconButton>
                    <IconButton aria-label="Theme Toggle" onClick={toggleColorMode}>
                        {colorMode === 'light' ? <MoonIcon/> : <SunIcon/>}
                    </IconButton>
                </Stack>
            </Flex>

            <Collapse in={isOpen} animateOpacity>
                <MobileNav/>
            </Collapse>
        </Box>
    );
};

const DesktopNav = () => {
    return (
        <Stack direction={'row'} spacing={6}>
            {NAV_ITEMS.map((navItem) => (
                <Box key={navItem.label}>
                    <Popover trigger={'hover'} placement={'bottom-start'}>
                        <PopoverTrigger>
                            <Text as="a" href={navItem.href ?? '#'} fontWeight={500} _hover={{color: 'blue.500'}}>
                                {navItem.label}
                            </Text>
                        </PopoverTrigger>
                        {navItem.children && (
                            <PopoverContent boxShadow={'xl'} p={4} rounded={'xl'}>
                                <Stack>
                                    {navItem.children.map((child) => (
                                        <Text key={child.label} as="a" href={child.href} fontSize={'sm'}>
                                            {child.label}
                                        </Text>
                                    ))}
                                </Stack>
                            </PopoverContent>
                        )}
                    </Popover>
                </Box>
            ))}
        </Stack>
    );
};

const MobileNav = () => {
    return (
        <Stack p={4} spacing={4} align="start" direction="column" display={{md: 'none'}}>
            {NAV_ITEMS.map((navItem) => (
                <Box key={navItem.label} width="full">
                    <Text 
                        as="a" 
                        href={navItem.href ?? '#'} 
                        fontWeight={600} 
                        display="block"
                        py={2}
                        px={4}
                        borderRadius="md"
                        _hover={{ bg: 'gray.700', color: 'white' }}
                    >
                        {navItem.label}
                    </Text>
                    {navItem.children && (
                        <Stack pl={4} spacing={2}>
                            {navItem.children.map((child) => (
                                <Text 
                                    key={child.label} 
                                    as="a" 
                                    href={child.href} 
                                    fontSize="sm" 
                                    display="block"
                                    py={1}
                                    px={4}
                                    borderRadius="md"
                                    _hover={{ bg: 'gray.600', color: 'white' }}
                                >
                                    {child.label}
                                </Text>
                            ))}
                        </Stack>
                    )}
                </Box>
            ))}
        </Stack>
    );
};

const NAV_ITEMS = [
    {label: 'Pecta', href: '#'},
    {label: 'All-Eips', href: '#', children: [
        { label: 'All', href: '#' },
        { label: 'EIP', href: '#' },
        { label: 'ERC', href: '#' },
        { label: 'RIP', href: '#' },
    ]},
    {label: 'Tools', href: '#', children: [
        { label: 'Analytics', href: '#' },
        { label: 'Boards', href: '#' },
        { label: 'Editors & Reviewers LeaderBoard', href: '#' },
        { label: 'EIP Proposal Builder', href: '#' },
        { label: 'Search By', href: '#' },
    ]},
    {label: 'Insight', href: '#', children: [
        { label: '2025', href: '#' },
        { label: '2024', href: '#' },
        { label: '2023', href: '#' },
    ]},
    {label: 'Dashboard', href: '/dashboard'},
    {label: 'More', href: '#'},
];

export default NavBar;
