import {ImageList, ImageListItem, Typography } from "@mui/material"
import { Box } from "@mui/system";
function Rightbar(){
    return(
        <Box flexDirection={"column"} sx={{ p:3 }}>
            <Typography variant="h6">
                Latest Photos
            </Typography>
            <ImageList sx={{width:250}}>
                <ImageListItem >
                    <img src="./assets/1.jpg" />
                </ImageListItem>
                <ImageListItem >
                    <img src="./assets/1.jpg" />
                </ImageListItem>
                <ImageListItem >
                    <img src="./assets/1.jpg" />
                </ImageListItem>
                <ImageListItem >
                    <img src="./assets/1.jpg" />
                </ImageListItem>
            </ImageList>
        </Box>
    )
}
export default Rightbar