import { Grid } from '@mui/material';
import { Box, Container } from '@mui/system';
import Content from './components/Content';
import Nav from './components/Nav'
import Rightbar from './components/Rightbar';
import SideBar from './components/Sidebar';

function App() {
  return (
    <Box>
      <Nav/>
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          <Grid item xs={3}>
          <SideBar/>
          </Grid>
          <Grid item xs={6}> 
            <Content/>
          </Grid>
          <Grid item xs={3}>
            <Rightbar/>
          </Grid>
        </Grid>
        
      </Container>
    </Box>
  );
}

export default App;