import React, { useEffect, useState } from 'react'
import Header from './Component/Header'
import Caraousal from './Component/Caraousal'
import { Typography,Container, Box, Card, CardContent } from '@mui/material'
import axios from 'axios'



const Dashboard = () => {

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=3');
        setPosts(response.data);
      } catch (error) {
        console.error('Error fetchcing Post:', error);
      }
    };
    fetchPosts();
  }, []);

  return (
    <div className='dashboardWrapper'>
        <Caraousal />
        <Container maxWidth="xl" sx={{mt:1.5}}>
          <Box sx={{display:'flex', gap: '10px'}}>
            {posts.map(post =>(
              <Card  sx={{ minWidth: 275, mb: 1.5 }}>
                <CardContent key={post.id}>
                <Typography variant="h3" component="div">{post.id}</Typography>
                <Typography variant="h5" component="div">{post.title}</Typography>
                <Typography variant="body2">{post.body}</Typography>
              </CardContent>
              </Card>
            ))}
          </Box>
        </Container>
    </div>
  )
}

export default Dashboard