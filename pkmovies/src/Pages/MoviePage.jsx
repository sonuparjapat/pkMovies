import React from 'react'

import {Box, Center, Heading} from "@chakra-ui/react"
import MovieCard from './MovieCard'
import CommonCarousl from "./Carusal"
export default function MoviePage() {
  return (
    <>
    <CommonCarousl/>
    <Box pb="100px">
<Heading><Center>Find Your Movies</Center></Heading>
<MovieCard/>
    </Box>
    </>
  )
}
