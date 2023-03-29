import { AppBar, Link, Toolbar, Typography, Button, Grid, Box,IconButton } from "@mui/material"
import { Menu } from '@mui/icons-material';
export default function Nav(){
    return(
        <Box>
            <AppBar style={{backgroundColor:"#20232a"}} position="static">
            <Toolbar >
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>My Website</Typography>
                <Grid>
                    <Grid item sx={{display : {xs:'block',md:'none'}}}>
                    <IconButton color="inherit">
                    <Menu/>
                    </IconButton>
                    </Grid>
                    <Grid item sx={{ display: { xs: 'none', sm: 'none', md: 'block' } }}>
                        <Button color="inherit">HOME</Button>
                        <Button color="inherit">ABOUT</Button>
                        <Button color="inherit">CONTACT</Button>
                    </Grid>
                    
                </Grid>
                
            </Toolbar>
            </AppBar>
        </Box>
            
    )
}