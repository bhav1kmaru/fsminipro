import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Link,
  useToast,
} from "@chakra-ui/react";
import { useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import axios from "axios"
import {Navigate, NavLink} from 'react-router-dom'

export default function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [userDetails,setUserDetails]=useState({name:"",email:"",password:""})

   const [registered, setRegistered] = useState(false);
   const toast = useToast();

   const handleSubmit = async (userDetails) => {
     const response = await axios.post(
       `http://localhost:8080/users/register`,
       userDetails
     );
     console.log(response);

     toast({
       title: `${response.data.message}`,
       status: response.data.message !== "Registered" ? "error" : "success",
       duration: 9000,
       isClosable: true,
     });

     if (response.data.message == "Registered") {
       setRegistered(true);
     }
   };

   if (registered) {
     return <Navigate to="/login" />;
   }


  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg="gray.50"
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"} textAlign={"center"}>
            Sign up
          </Heading>
        </Stack>
        <Box
          rounded={"lg"}
          bg="white"
          boxShadow={"lg"}
          p={8}
        >
          <Stack spacing={4}>
            <HStack>
              <Box>
                <FormControl id="firstName" isRequired>
                  <FormLabel>Name</FormLabel>
                  <Input
                    value={userDetails.name}
                    onChange={(e) => {
                      setUserDetails({ ...userDetails, name: e.target.value });
                    }}
                    type="text"
                  />
                </FormControl>
              </Box>
            </HStack>
            <FormControl id="email" isRequired>
              <FormLabel>Email address</FormLabel>
              <Input
                value={userDetails.email}
                onChange={(e) => {
                  setUserDetails({ ...userDetails, email: e.target.value });
                }}
                type="email"
              />
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input
                  value={userDetails.password}
                  onChange={(e) => {
                    setUserDetails({ ...userDetails, password: e.target.value });
                  }}
                  type={showPassword ? "text" : "password"}
                />
                <InputRightElement h={"full"}>
                  <Button
                    variant={"ghost"}
                    onClick={() =>
                      setShowPassword((showPassword) => !showPassword)
                    }
                  >
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <Stack spacing={10} pt={2}>
              <Button
                loadingText="Submitting"
                size="lg"
                bg={"blue.400"}
                color={"white"}
                _hover={{
                  bg: "blue.500",
                }}
                onClick={()=>{handleSubmit(userDetails)}}
              >
                Register
              </Button>
            </Stack>
            <Stack pt={6}>
              <Text align={"center"}>
                Already a user? <NavLink style={{color:"blue"}} to='/login'>Login</NavLink>
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
