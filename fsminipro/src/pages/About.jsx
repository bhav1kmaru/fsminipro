import { Button, Flex, Heading, Input, Stack, Text } from '@chakra-ui/react'
import axios from 'axios';
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';

const About = () => {
    
  return (
    <div>
      <Heading as="h2" textAlign="center">
        About
      </Heading>
      <Stack w="30%" m="auto" mt="100px">
        <Heading as="h3" textAlign="center">
          Packages Used
        </Heading>
        <Text>Nodemon</Text>
        <Text>Express</Text>
        <Text>Mongoose</Text>
        <Text>DotEnv</Text>
        <Text>JWT</Text>
        <Text>Bcrypt</Text>
        <Text>ChakraUI</Text>
        <Text>React Router Dom</Text>
        <Text>Axios</Text>
      </Stack>
    </div>
  );
}

export default About