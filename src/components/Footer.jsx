import {
    Box,
    Button,
    Heading,
    HStack,
    Input,
    Stack,
    Text,
    VStack
} from '@chakra-ui/react'
import React from 'react'
import { AiOutlineSend } from 'react-icons/ai';

const Footer = () => {
    return (
        <Box bgColor={'blackAlpha.900'} minH={'40'} p="16" color={'white'}>
            <Stack direction={['column', 'row']}>
                <VStack
                    w={'full'}
                    borderLeft={['none', '1px solid white']}
                    borderRight={['none', '1px solid white']}
                >
                    <Heading textAlign={'center'}>
                        @anshu51379
                    </Heading>
                    <Text>All rights received</Text>
                </VStack>
                <VStack w={'full'}>
                    <Heading size={'md'} >
                        connect with us
                    </Heading>
                    <Button variant={'link'} colorScheme={'white'}>
                        <a target={'black'} href="https://github.com/anshu51379">
                            Github
                        </a>
                    </Button>
                    <Button variant={'link'} colorScheme={'white'}>
                        <a target={'black'} href="https://youtube.com/AbhishekKumar51379">
                            Youtube
                        </a>
                    </Button>
                    <Button variant={'link'} colorScheme={'white'}>
                        <a target={'black'} href="https://instagram.com/anshu51379">
                            Instagram
                        </a>
                    </Button>
                </VStack>
                <VStack alignItems={'stretch'} w={'full'} px={'4'}>
                    <Heading
                        size="md"
                        textTransform={'uppercase'}
                        textAlign={['center', 'left']}
                    >
                        subscribe to get latest update
                    </Heading>
                    <HStack borderBottom={'2px solid white'} py="2">
                        <Input
                            placeholder="Enter Email Here..."
                            border={'none'}
                            borderRadius="none"
                            outline={'none'}
                            focusBorderColor="none"
                        />
                        <Button
                            p={'0'}
                            colorScheme={'purple'}
                            variant={'ghost'}
                            borderRadius={'0 20px 20px 0'}
                        >
                            <AiOutlineSend size={20} />
                        </Button>
                    </HStack>
                </VStack>
            </Stack>
        </Box>
    )
}

export default Footer