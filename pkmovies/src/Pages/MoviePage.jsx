import React from 'react'
import CarouselComponent from './Carusal'
import {Box, Center, Heading} from "@chakra-ui/react"
import MovieCard from './MovieCard'
export default function MoviePage() {
  return (
    <>
    <CarouselComponent/>
    <Box pb="100px">
<Heading><Center>Find Your Movies</Center></Heading>
<MovieCard/>
    </Box>
    </>
  )
}
