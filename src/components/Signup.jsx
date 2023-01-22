import { Avatar, Button, Container, Heading, Input, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {
  return (
    <Container maxW={"container.xl"}
    h={"100vh"}
    p={"16"}
    >
    
    <form>
    <VStack alignItems={"stretch"} 
    spacing={"8"}
    w={['full',"96vh"]}
    m={"auto"}
    my={"16"}
    >
    <Heading textAlign={'center'} textTransform={'uppercase'}>
    Video Hub

    </Heading>
<Avatar alignSelf={'center'}
boxSize={'32'}/>
<Input placeholder={"Name"} type={"text"} required
focusBorderColor={'purple.500'}>
</Input>
    <Input placeholder={"Email"} type={"email"} required
    focusBorderColor={'purple.500'}>
    </Input>
    <Input placeholder={"Password"} type={"password"} required
    focusBorderColor={'purple.500'}>
    </Input>


<Button colorScheme={'purple'} type={'submit'}>Sign Up</Button>
    <Text align={'right'}>Already Signed Up? {' '} 
    <Button variant={'link'}  colorScheme={'purple'} >
    <Link to={'/login'}>
    Login in
    </Link>
    </Button>
    </Text>
    </VStack>
    
    </form>
    </Container>
  )
}

export default Signup
