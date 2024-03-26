import { Box, Typography } from '@mui/material'
import React from 'react'

const Clothing = ({heading}) => {
  return (
    <Box className='ClothingPage'>
        <Typography>{heading}</Typography>
    </Box>
  )
}

export default Clothing