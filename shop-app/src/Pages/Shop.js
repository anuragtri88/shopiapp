import { Box, Typography } from '@mui/material'
import React from 'react'

const Shop = ({heading}) => {
  return (
    <Box className='shopPage'>
        <Typography>{heading}</Typography>
    </Box>
  )
}

export default Shop