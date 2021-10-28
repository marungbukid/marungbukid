import {
  Box,
  Container,
  Stack,
  HStack,
  Heading,
  Flex,
  Spacer,
  Grid,
  Center,
} from '@chakra-ui/layout';
import {
  Badge,
  Button,
  IconButton,
  Image,
  Text,
  useBreakpointValue,
  useColorModeValue,
} from '@chakra-ui/react';
import React from 'react';
import { FiArrowLeft, FiArrowRight, FiExternalLink } from 'react-icons/fi';
import { RiGooglePlayFill } from 'react-icons/ri';
import Slider from 'react-slick';
import { ProjectProps } from '../../types/project-props';
import ProjectImage from './project-image';
import Link from 'next/link';

const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const ProjectView: React.FC<ProjectProps> = (props): JSX.Element => {
  const [slider, setSlider] = React.useState<Slider | null>(null);

  const top = useBreakpointValue({ base: '90%', md: '50%' });
  const side = useBreakpointValue({ base: '30%', md: '10px' });

  const getYearBadgeValue = (year?: number): string => {
    switch (year) {
      case NaN:
        return 'Ongoing';
      case undefined:
        return 'Past';
      case new Date().getFullYear():
        return 'Recent';
      default:
        return year.toString();
    }
  };

  const renderDescription = () => {
    return (
      <Center>
        <Box p={8}>
          <Stack textAlign={'left'}>
            <Box direction={'row'}>
              <Badge colorScheme='green'>
                {getYearBadgeValue(props.project.year)}
              </Badge>
            </Box>
            <Heading
              fontWeight={700}
              lineHeight={'110%'}
              fontSize={{ base: '2xl', sm: '3xl', md: '4xl' }}>
              {props.project.title}
            </Heading>
            <Text color={'gray.500'}>{props.project.description}</Text>
            {props.project.url!! && (
              <>
                <Box>
                  <Link href={props.project.url} passHref>
                    <Button
                      leftIcon={
                        props.project.url.includes('play.google') ? (
                          <RiGooglePlayFill />
                        ) : (
                          <FiExternalLink />
                        )
                      }
                      pt={4}
                      pb={4}
                      variant='link'>
                      Visit
                    </Button>
                  </Link>
                </Box>
              </>
            )}
          </Stack>
        </Box>
      </Center>
    );
  };

  const renderImages = () => {
    return (
      <Center>
        <Box
          position={'relative'}
          height={'full'}
          maxW={'290px'}
          w={'290px'}
          overflow={'hidden'}>
          <link
            rel='stylesheet'
            type='text/css'
            charSet='UTF-8'
            href='https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css'
          />
          <link
            rel='stylesheet'
            type='text/css'
            href='https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css'
          />

          {props.project.imageUrls && (
            <>
              {props.project.imageUrls && props.project.imageUrls.length > 1 && (
                <>
                  <IconButton
                    aria-label='left-arrow'
                    borderRadius='full'
                    position='absolute'
                    colorScheme='blue'
                    left={side}
                    variant='ghost'
                    top={top}
                    transform={'translate(0%, -50%)'}
                    zIndex={2}
                    icon={<FiArrowLeft />}
                    onClick={() => slider?.slickPrev()}>
                    <FiArrowLeft />
                  </IconButton>
                  {/* Right Icon */}
                  <IconButton
                    aria-label='right-arrow'
                    borderRadius='full'
                    position='absolute'
                    right={side}
                    colorScheme='blue'
                    top={top}
                    variant='ghost'
                    transform={'translate(0%, -50%)'}
                    zIndex={2}
                    icon={<FiArrowRight />}
                    onClick={() => slider?.slickNext()}></IconButton>
                </>
              )}

              <Slider {...settings} ref={(slider) => setSlider(slider)}>
                {props.project.imageUrls?.map((url, index) => (
                  <ProjectImage key={index} url={url} />
                ))}
              </Slider>
            </>
          )}
        </Box>
      </Center>
    );
  };

  return (
    <Container maxW={'3xl'} m={32} position='relative'>
      <Stack direction={['column', 'row']} spacing={{ base: 8, md: 8 }}>
        {renderDescription()}
        {renderImages()}
      </Stack>
    </Container>
  );
};

export default ProjectView;
