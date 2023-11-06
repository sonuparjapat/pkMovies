// src/components/MovieSearch.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Box,
  Image,
  Text,
  Grid,
  Spinner,
  Center,
  Heading,
} from '@chakra-ui/react';
import { Link, useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getmovies } from '../Redux/GetMoveis/Action';
function MovieSearch() {
const [searchParams]=useSearchParams()
//   const [searchParams] = useState(searchParams.get("query")||'Avatar'); // Default search query
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
const location=useLocation()
const dispatch=useDispatch()
const moviedata=useSelector((state)=>state.getmoviesreducer)
const {isLoading,isError,data}=moviedata
  useEffect(() => {
    const params={
        s:searchParams.get("query")?searchParams.get("query"):"avatar",
        apiKey:"f10cad10"
    }
    dispatch(getmovies(params))

  }, [location.search]);
  // console.log(data)
const navigate=useNavigate()
  if(isLoading){
    return <Center height="100vh" ><Heading>Loading...</Heading></Center>
  }else if(isError){
    return <Center height={"100vh"}> <Heading>Something going wrong..</Heading></Center>
  }
  return (
    <Box    mt="10">
     

      <Grid
   
        templateColumns={["repeat(2,1fr)","repeat(3,1fr)","repeat(3,1fr)","repeat(3,1fr)","repeat(4,1fr)"]}
        gap={6}
      >
        {data!=="undefined"&&data.length>=1&&data.map((movie) => (
         <Link to={`/details/${movie.imdbID}`}> <Box
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            boxShadow="md"
            key={movie.imdbID}
          >
            <Image src={movie.Poster} w="100%" alt={movie.Title} />
            <Text fontSize="xl" fontWeight="semibold">
              {movie.Title}
            </Text>
            <Text fontSize="md">{movie.Year}</Text>
          </Box></Link>
        ))}
      </Grid>
      {data.length==0&&<Box ><Heading textAlign={"center"} color={"white"} fontSize={"20px"}>No Data Found!!</Heading></Box>}

      {error && <p>{error}</p>}
    </Box>
  );
}

export default MovieSearch;
