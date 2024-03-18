import React, { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom';


const SplashScreen = () => {
  const [loading, setLoading] = useState(true);
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
      setRedirect(true);
    }, 2000);
  }, []);
  return (
    <div className='splash-screen'>
      {loading ? (
        <>
        <h1>Logo</h1>
        <h3>Welcome to my App</h3>
        </>

      ) : redirect ? (
        <Navigate to="/auth" />
          ) : (
            <>
        
        </>

      )}
    </div>
  )
}

export default SplashScreen