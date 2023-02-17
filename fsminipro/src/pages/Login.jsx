import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import axios from "axios";
import { useContext, useState } from "react";
import { Navigate, NavLink } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

export default function Login() {
    const [creds,setCreds]=useState({email:"",password:""})
    const {login,isAuth}=useContext(AuthContext)

    const handleSubmit=async(creds)=>{
        const response=await axios.post(`http://localhost:8080/users/login`,creds)
        console.log(response)
        if(response.data.msg==='Logged In'){
            localStorage.setItem('token',JSON.stringify(response.data.token))
            login()
        }
    }

    if(isAuth){
        return <Navigate to='/' />
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
          <Heading fontSize={"4xl"}>Login</Heading>
        </Stack>
        <Box
          rounded={"lg"}
          bg="white"
          boxShadow={"lg"}
          p={8}
        >
          <Stack spacing={4}>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input
                value={creds.email}
                onChange={(e) => setCreds({ ...creds, email: e.target.value })}
                type="email"
              />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input
                value={creds.password}
                onChange={(e) => setCreds({ ...creds, password: e.target.value })}
                type="password"
              />
            </FormControl>
            <Stack spacing={10}>
              <Stack
                direction={{ base: "column", sm: "row" }}
                align={"start"}
                justify={"space-between"}
              >
                <Checkbox>Remember me</Checkbox>
                <Link color={"blue.400"}>Forgot password?</Link>
              </Stack>
              <Button
                bg={"blue.400"}
                color={"white"}
                _hover={{
                  bg: "blue.500",
                }}
                onClick={()=>handleSubmit(creds)}
              >
                Login
              </Button>
              <Text textAlign='center'>New user?<NavLink style={{color:"blue"}} to='/register'>Register</NavLink></Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
