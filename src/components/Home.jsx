import { Box, Container, Heading, Image, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import img1 from "../assets/1.jpg";
import img2 from "../assets/2.jpg";
import img3 from "../assets/3.jpg";
import img5 from "../assets/5.png";
const headingOptions = {
    pos: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%,-50%)',
    textTransform: 'uppercase',
    p: '4',
    size: '4xl',
};
const Home = () => {
    return (
        <Box>
            <MyCarousel />
            <Container maxW={'container.xl'} minH={'100vh'} p="16">
                <Heading
                    textTransform={'uppercase'}
                    py="2"
                    w={'fit-content'}
                    borderBottom={'2px solid'}
                    m="auto"
                >
                    Services
                </Heading>

                <Stack
                    h="full"
                    p={'4'}
                    alignItems={'center'}
                    direction={['column', 'row']}
                >
                    <Image src={img5} h={['40', '400']} filter={'hue-rotate(-130deg)'} />

                    <Text
                        letterSpacing={'widest'}
                        lineHeight={'190%'}
                        p={['4', '16']}
                        textAlign={'center'}
                    >
                        To better the future of AR/VR and gaming as a service provider company, we invest in research and development, collaborate with industry leaders, provide customized solutions, focus on user experience, and embrace emerging technologies. By doing so, we stay ahead of the curve, offer cutting-edge services, and create immersive and engaging experiences for your clients. As the industry continues to grow and evolve, it's important to be agile and adaptable, constantly innovating and exploring new opportunities to stay competitive and deliver value to our clients.
                    </Text>
                </Stack>
            </Container>
        </Box>
    )
}
const MyCarousel = () => (
    <Carousel autoPlay infiniteLoop interval={1000} showStatus={false} showArrows={false}>
        <Box w="full" h={'100vh'}>
            <Image src={img1} h="full" w={'full'} objectFit={'cover'} />
            <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOptions}>
                Watch The Future
            </Heading>
        </Box>
        <Box w="full" h={'100vh'}>
            <Image src={img2} h="full" w={'full'} objectFit={'cover'} />
            <Heading bgColor={'whiteAlpha.900'} color={'black'} {...headingOptions}>
                Future is Gaming
            </Heading>
        </Box>

        <Box w="full" h={'100vh'}>
            <Image src={img3} h="full" w={'full'} objectFit={'cover'} />
            <Heading bgColor={'whiteAlpha.600'} color={'black'} {...headingOptions}>
                Gaming on Console
            </Heading>
        </Box>
    </Carousel>
)

export default Home