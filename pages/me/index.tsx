import {
  Box,
  Container,
  Heading,
  Stack,
  Text,
  Wrap,
  WrapItem,
} from '@chakra-ui/layout';
import { Avatar, IconButton } from '@chakra-ui/react';
import { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import React from 'react';
import FloatingColorToggle from '../../components/floating-color-toggle';
import { FiArrowLeft } from 'react-icons/fi';

const Me: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Jan Maru De Guzman | Portfolio</title>
        <meta name='description' content="Jan Maru De Guzman's Portfolio" />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <FloatingColorToggle />

      <Container maxW={'3xl'}>
        <Box py={{ base: 4, md: 4 }}>
          <Link href='/' passHref>
            <IconButton
              aria-label='left-arrow'
              position='absolute'
              colorScheme='blue'
              variant='ghost'
              zIndex={2}
              icon={<FiArrowLeft />}>
              <FiArrowLeft />
            </IconButton>
          </Link>
        </Box>

        <Stack
          direction={'row'}
          align={'center'}
          spacing={{ base: 6, md: 10 }}
          py={{ base: 24, md: 28 }}>
          {/* Header */}
          <Heading
            fontWeight={700}
            lineHeight={'110%'}
            fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}>
            Jan Maru De Guzman {<br />}
            <Text as={'span'} color={'blue.400'}>
              software engineer
            </Text>
          </Heading>

          {/* Avatar */}
          <Wrap>
            <WrapItem>
              <Avatar
                size='2xl'
                name='Jan Maru De Guzman'
                src='/assets/images/iam.jpeg'
              />{' '}
            </WrapItem>
          </Wrap>
        </Stack>

        <Stack spacing={{ base: 6, md: 4 }} fontSize={'xl'} mb={10}>
          <Text>
            Senior Software engineer at{' '}
            <Link href='https://bluefletch.com/'>BlueFletch LLC</Link>. Managing
            group of aspiring mobile developers and motivating them to be
            curious.
          </Text>
          <s></s>
          <Text>
            I&apos;ve been a developer since 2013. Aiming to develop a reliable
            app that the end-users want. What drives me to ensure reliable apps
            is when I saw end-users happy and knowing that I delivered such
            trustworthy application.
          </Text>
        </Stack>
      </Container>
    </div>
  );
};

export default Me;
