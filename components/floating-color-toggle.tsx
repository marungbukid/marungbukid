import { Button, IconButton } from '@chakra-ui/button';
import { useColorMode } from '@chakra-ui/color-mode';
import { Stack } from '@chakra-ui/layout';
import { FiMoon, FiSun, FiFacebook, FiLinkedin } from 'react-icons/fi';
import Link from 'next/link';

const FloatingColorToggle: React.FC = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Stack
      direction={'row'}
      position='fixed'
      top='0'
      right='0'
      p={4}
      zIndex={4}>
      <Link href='/me' passHref>
        <Button p={4} variant='ghost' href='/me'>
          Me
        </Button>
      </Link>
      <Link href='https://www.facebook.com/deguzman.maru' passHref>
        <IconButton
          p={4}
          variant='ghost'
          aria-label='facebook'
          icon={<FiFacebook />}
        />
      </Link>

      <Link href='https://www.linkedin.com/in/marungbukid/' passHref>
        <IconButton
          p={4}
          variant='ghost'
          aria-label='linkedin'
          icon={<FiLinkedin />}
        />
      </Link>
      <Button onClick={toggleColorMode} variant='link' p={2}>
        {colorMode === 'light' ? <FiMoon /> : <FiSun />}
      </Button>
    </Stack>
  );
};

export default FloatingColorToggle;
