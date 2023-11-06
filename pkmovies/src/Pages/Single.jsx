import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getsingle } from '../Redux/GetSingle/Action'
import { Center, Heading,Box,Image,Text,Spinner,Badge } from '@chakra-ui/react'

export default function Single() {
    const dispatch=useDispatch()
    const {id}=useParams()
    const data=useSelector((state)=>state.getsinglereducer)
    const {isLoading,isError,single}=data
    console.log(single)
    useEffect(()=>{
        dispatch(getsingle({i:id,apiKey:"f10cad10"}))
    },[])

    if(isLoading){
        return <Center height="100vh"><Heading>Loading...</Heading></Center>
    }
    else if(isError){
      return  <Center height="100vh"><Heading>Something going wrong...</Heading></Center>
    }
  return (
    <Box p={4}>
      {single ? (
        <Box>
          <Center>
            <Image src={single.Poster} alt={single.Title} />
          </Center>
          <Heading as="h2" size="xl" mt={4} textAlign="center">
            {single.Title}
          </Heading>
          <Text fontSize="lg" textAlign="center">
            {single.Year}
          </Text>
          <Badge variant="outline" colorScheme="teal">
            {single.Genre}
          </Badge>
          <Text mt={4}>{single.Plot}</Text>
        
        </Box>
      ) : (
        <Center minH="200px">
          <Spinner size="lg" color="teal.500" />
        </Center>
      )}
    </Box>
  )
}
