

import React, { useEffect, useState } from 'react';
import { Box, Container, Text, Input, Button } from '@chakra-ui/react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { Search2Icon } from '@chakra-ui/icons';

function Navbar() {
  const [searchParams,setSearchParams]=useSearchParams()
  const [query,setQuery]=useState(searchParams.get("query")||"")
const location=useLocation()
  // useEffect(()=>{
  
  // },[])
const handlesearch=()=>{
  const obj={

  }
query?(obj.query=query):(obj.query="avatar")

  setSearchParams(obj)
}
  return (
    <Box as="nav" position="sticky" top={0} zIndex="sticky" bgColor="blue.400" p={4}>
      <Container maxW="container.xl" display="flex" justifyContent="space-between" alignItems="center">
        <Text fontSize={["sm","sm","xl","xl","xl"]} color="white" fontWeight="bold">pkMovies</Text>
        <Input ml="10px"   style={{ textAlign: 'center', fontSize: '18px' }} color="black" value={query}  type="text" placeholder="Search for movies..." onChange={(e)=>setQuery(e.target.value)} bg="white" />
        <Button ml="10px" onClick={handlesearch} colorScheme="teal"><Search2Icon/></Button>
      </Container>
    </Box>
  );
}

export default Navbar;
