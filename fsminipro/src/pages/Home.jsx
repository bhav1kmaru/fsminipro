import { Box, Button, Container, Flex, Heading, Image, Stack, Text } from '@chakra-ui/react'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

const Home = () => {
   
  return (
    <div>
      <Box>
        <Container>
          <Image src="https://em-content.zobj.net/source/microsoft-teams/337/waving-hand_medium-light-skin-tone_1f44b-1f3fc_1f3fc.png" />
          <Heading as="h2">Hey Folks, I am Bhavik Maru</Heading>
          <Text as="i">
            An ambitious Full Stack Developer who is comfortable working with
            both front-end and back-end technologies. 1200+ hours of coding and
            hands-on experience in developing various Web-Apps and programs
            using Vanilla JavaScript and ReactJS. Looking forward to working as
            an accountable and competent employee in an exciting tech company.
          </Text>
        </Container>
      </Box>
    </div>
  );
}

export default Home