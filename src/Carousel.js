import React from 'react';
import { Button, CardHeader } from '@material-ui/core';

import './App.css';
import {
  Container, Grid, Typography, Card, CardContent, CardActions, CardActionArea, CardMedia, Avatar,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { Link } from 'react-router-dom';



const useStyles = makeStyles(theme => ({
  root: {
    width: "100vw",
    height: "100vw",
    backgroundcolor: theme.palette.grey[200],
  }
}))


function App() {
  const classes = useStyles();
  return <Container className={classes.root}>
    <Grid container spacing="4" >
      <Grid item sm={3}>
        <Card>
          <CardHeader avatar={<Avatar> sp</Avatar>} />
          <CardActionArea>
            <CardContent>
              <CardMedia component="img" image="/corona.jpg" />
              <Typography variant="h5"> prepare for new waves</Typography>
              <Typography variant="subtitle1">A third phase of the deadly novel 
              coronavirus pandemic is inevitable, claimed K Vijay Raghavan, the 
              Principal Scientific Advisor</Typography>


            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button variant="outlined" color="primary">
              <Link  to="/FullArticle">Full Artice</Link>
            </Button>
          </CardActions>
        </Card>
      </Grid>
      <Grid item sm={3}>
        <Card>
          <CardHeader avatar={<Avatar> sp</Avatar>} />
          <CardActionArea>
            <CardContent>
              <CardMedia component="img" image="./corona.jpg" />
              <Typography variant="h5"> prepare for new waves</Typography>
              <Typography variant="subtitle1">A third phase of the deadly novel 
              coronavirus pandemic is inevitable, claimed K Vijay Raghavan, the 
              Principal Scientific Advisor</Typography>

            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button variant="outlined" color="primary">
              <Link class="nav-link" to="/FullArticle">Full Artice</Link>
            </Button>
          </CardActions>
        </Card>
      </Grid>
      <Grid item sm={3}>
        <Card>
          <CardHeader avatar={<Avatar> sp</Avatar>} />
          <CardActionArea>
            <CardContent>
              <CardMedia component="img" image="./corona.jpg" />
              <Typography variant="h5">Title</Typography>
              <Typography variant="subtitle1">aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</Typography>

            </CardContent>
          </CardActionArea>
          <CardActions>
          <Button variant="outlined" color="primary">
              <Link  to="/FullArticle">Full Artice</Link>
            </Button>
          </CardActions>
        </Card>
      </Grid>
      <Grid item sm={3}>
        <Card>
          <CardHeader avatar={<Avatar> sp</Avatar>} />
          <CardActionArea>
            <CardContent>
              <CardMedia component="img" image="./corona.jpg" />
              <Typography variant="h5">Title</Typography>
              <Typography variant="subtitle1">aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</Typography>

            </CardContent>
          </CardActionArea>
          <CardActions>
          <Button variant="outlined" color="primary">
              <Link  to="/FullArticle">Full Artice</Link>
            </Button>
          </CardActions>
        </Card>
      </Grid>
    </Grid>
  </Container>;
}

export default App;