import { Box, Center, Container, Stack, Heading } from '@chakra-ui/layout';
import { Image, Text } from '@chakra-ui/react';
import React from 'react';
import { FiArrowDown } from 'react-icons/fi';

const BriefProfile: React.FC = () => {
  return (
    <Container maxW={'3xl'}>
      <Stack
        textAlign={'center'}
        align={'center'}
        spacing={{ base: 6, md: 10 }}
        py={{ base: 24, md: 28 }}>
        {/* Avatar */}
        <Center py={12}>
          <Box
            rounded={'99999'}
            mt={-12}
            p={6}
            maxW={'640px'}
            w={'full'}
            pos={'relative'}
            height={'230px'}
            _after={{
              transition: 'all .3s ease',
              content: '""',
              w: 'full',
              h: 'full',
              pos: 'absolute',
              top: 6,
              left: 0,
              borderRadius: 999,
              backgroundImage: `url(/assets/images/iam.jpeg)`,
              filter: 'blur(18px)',
              zIndex: -1,
            }}
            _groupHover={{
              _after: {
                filter: 'blur(20px)',
              },
            }}>
            <Image
              rounded={'9999'}
              height={180}
              width={180}
              alt={'Jan Maru De Guzman'}
              objectFit={'cover'}
              src={'/assets/images/iam.jpeg'}
            />
          </Box>
        </Center>

        {/* Header */}
        <Heading
          fontWeight={700}
          lineHeight={'110%'}
          fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}>
          Jan Maru De Guzman{' '}
          <Text as={'span'} color={'blue.400'}>
            software engineer
          </Text>
        </Heading>
        <Text maxW={'3xl'} color={'gray.500'}>
          I love open-source, more of an{' '}
          <Text as={'span'} fontWeight={'700'} color={'blue.400'}>
            Android
          </Text>{' '}
          developer, experienced as{' '}
          <Text as={'span'} fontWeight={'700'} color={'blue.400'}>
            Web
          </Text>{' '}
          developer, have a knowledge as a back-end developer, and just a good
          person.
        </Text>
        <FiArrowDown />
      </Stack>
    </Container>
  );
};

export default BriefProfile;
