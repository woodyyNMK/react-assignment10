
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
          <Grid item sx={{ display: { xs: 'none', sm: 'none', md: 'block' } }} md={3} >
          <SideBar/>
          </Grid>
          <Grid item xs={12} md={6} > 
            <Content/>
          </Grid>
          <Grid item sx={{ display: { xs: 'none', sm: 'none', md: 'block' } }}  md={3} >
            <Rightbar/>
          </Grid>
        </Grid>
        
      </Container>
    </Box>
  );
}

export default App;
