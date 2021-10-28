import { Box, Image, useColorModeValue, Center } from '@chakra-ui/react';

import React from 'react';

export interface ProjectImageProps {
  url: string;
}

const ProjectImage: React.FC<ProjectImageProps> = (props) => {
  return (
    <Center>
      <Box
        boxShadow={'xl'}
        maxW={'270px'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.800')}>
        <Image
          alt={'Jan Maru De Guzman'}
          borderRadius={'lg'}
          objectFit={'cover'}
          src={`/assets/images/projects${props.url}`}
        />
      </Box>
    </Center>
  );
};

export default ProjectImage;
