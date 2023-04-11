import React from 'react'
import { Drawer, DrawerBody, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton, Button, useDisclosure, VStack, HStack } from "@chakra-ui/react"
import { Link } from "react-router-dom"
import { BiMenuAltLeft } from "react-icons/bi"
const Header = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <>
            <Button
                zIndex={'overlay'}
                pos={'fixed'}
                top={'3'}
                left={'4'}
                colorScheme='purple'
                p={'0'}
                w={'9'}
                h={'9'}
                borderRadius={"full"}
                onClick={onOpen}
            >
                <BiMenuAltLeft size={'20'} />
            </Button>
            <Drawer isOpen={isOpen} placement='start' onClose={onClose}>
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader>
                        Abhishek Kumar
                    </DrawerHeader>
                    <DrawerBody>
                        <VStack alignItems={'flex-start'}>
                            <Button onClick={onClose} colorScheme='purple' variant={'ghost'}>
                                <Link to={'/'}>Home</Link>
                            </Button>
                            <Button onClick={onClose} colorScheme='purple' variant={'ghost'}>
                                <Link to={'/videos'}>Videos</Link>
                            </Button>
                            <Button onClick={onClose} colorScheme='purple' variant={'ghost'}>
                                <Link to={'/upload'}>Contribute</Link>
                            </Button>
                        </VStack>
                        <HStack position={'absolute'} bottom={"10"} left={"3"}>
                            <Button onClick={onClose}>
                                <Link to={"/login"} colorScheme={'purple'}>login</Link>
                            </Button>
                            <Button onClick={onClose} variant={'outline'}>
                                <Link to={"/signup"} colorScheme={'purple'}>signup</Link>
                            </Button>
                        </HStack>
                    </DrawerBody>
                </DrawerContent>
            </Drawer >
        </>
    )
}

export default Header