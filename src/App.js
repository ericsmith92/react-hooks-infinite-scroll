import { useState, useEffect } from 'react';
import { useFetch } from './hooks';
import { CssBaseline, Typography, Container } from '@material-ui/core';
import UserCard from './components/UserCard';
import Progress from './components/Progress';

function App() {
  const [results, setResults] = useState(8);
  const users = useFetch('https://api.randomuser.me/', results);

  useEffect(() => {

    const useHandleScroll = () => {
      const scrollTop = ( document.documentElement && document.documentElement.scrollTop ) || document.body.scrollTop;
        const scrollHeight = ( document.documentElement && document.documentElement.scrollHeight ) || document.body.scrollHeight;
        if (scrollTop + window.innerHeight + 50 >= scrollHeight){
          setResults(results + 8);
        }
    }

    window.addEventListener('scroll', useHandleScroll);
    return () => window.removeEventListener('scroll', useHandleScroll);
  }, [results]);

  
    return (
      <div className="App">
          <CssBaseline />
          <Container maxWidth="sm"> 
            <Typography component="div" style={{ backgroundColor: '#cfe8fc', minHeight: '100vh', padding: '10px' }}>
                { 
                  users 
                  ?
                  users.map((user, index) => {
                    return <UserCard key={index} user={user} />
                  })
                  :
                  <Progress />
                }
            </Typography>
          </Container>
      </div>
    );
}

export default App;
