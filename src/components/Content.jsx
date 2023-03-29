import { Grid, Typography, Card, CardContent, CardMedia, CardActionArea  } from "@mui/material"
import { Box } from "@mui/system"

function Content(){
    return(
        <Grid container>
            <Box sx={{ p:3 }}>
                <Typography variant="h4">
                    Welcome to My Website
                </Typography>
                <Typography variant="body1">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae, dignissimos eum perferendis aliquid nihil exercitationem, ratione perspiciatis soluta minus consequatur explicabo corrupti accusamus rem tempore quis! Inventore illum vel dolores.
                    <br />
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae, dignissimos eum perferendis aliquid nihil exercitationem, ratione perspiciatis soluta minus consequatur explicabo corrupti accusamus rem tempore quis! Inventore illum vel dolores.
                </Typography>
            </Box>
            <Grid container sx={{ p:3 }} rowSpacing={3} columnSpacing={3}>
                <Grid item md={6} sm={12} xs={12} sx={{ maxWidth: 1/2 }}>
                    <Card >
                        <CardActionArea>
                            <CardMedia component="img" height="140" image="./assets/1.jpg"/>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                Card Title
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, debitis perferendis? Quis, reiciendis cupiditate. Atque, beatae hic. Deserunt, dicta vero, maxime sint saepe soluta repellendus, veniam perspiciatis adipisci repellat culpa.
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid item md={6} sm={6} xs={12} sx={{ maxWidth: 1/2 }}>
                    <Card >
                        <CardActionArea>
                            <CardMedia component="img" height="140" image="./assets/1.jpg"/>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                Card Title
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, debitis perferendis? Quis, reiciendis cupiditate. Atque, beatae hic. Deserunt, dicta vero, maxime sint saepe soluta repellendus, veniam perspiciatis adipisci repellat culpa.
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid item md={6} sm={6} xs={12} sx={{ maxWidth: 1/2 }}>
                    <Card >
                        <CardActionArea>
                            <CardMedia component="img" height="140" image="./assets/1.jpg"/>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                Card Title
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, debitis perferendis? Quis, reiciendis cupiditate. Atque, beatae hic. Deserunt, dicta vero, maxime sint saepe soluta repellendus, veniam perspiciatis adipisci repellat culpa.
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
            </Grid>
        </Grid>
        

    )
}
export default Content