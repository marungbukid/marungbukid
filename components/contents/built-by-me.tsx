import { Container, Stack } from '@chakra-ui/react';
import { Heading, Text } from '@chakra-ui/layout';
import React from 'react';
import { ProjectType } from '../../types/project';
import ProjectView from './project-view';
import { projectsData } from '../../data/projects';

const BuiltByMe: React.FC = () => {
  return (
    <Container maxW={'3xl'} mt={20} mb={20}>
      <Stack
        textAlign={'center'}
        align={'center'}
        spacing={{ base: 16, md: 16 }}>
        <Heading>
          More from{' '}
          <Text
            as={'span'}
            position={'relative'}
            _after={{
              content: "''",
              width: 'full',
              height: '30%',
              position: 'absolute',
              bottom: 1,
              left: 0,
              bg: 'blue.400',
              zIndex: -1,
            }}>
            Me
          </Text>
        </Heading>

        {projectsData.map((project, index) => (
          <ProjectView key={index} project={project} index={index} />
        ))}
      </Stack>
    </Container>
  );
};

export default BuiltByMe;
