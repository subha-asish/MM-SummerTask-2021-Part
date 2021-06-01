import { Button, CardHeader } from '@material-ui/core';
import React from 'react';
import './App.css';
import {
  Container, Grid, Typography, Card, CardContent, CardActions, CardActionArea, CardMedia,Avatar,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

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
        <CardHeader avatar={ <Avatar> sp</Avatar>}/>
          <CardActionArea>
          <CardContent>
      <CardMedia component="img" image= "./corona.jpg"/>
            <Typography variant="h5">Title</Typography>
            <Typography variant="subtitle1">aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</Typography>

          </CardContent>
          </CardActionArea>
          <CardActions>
            <Button variant="outlined" color="primary">
              Full Article
</Button>
          </CardActions>
        </Card>
      </Grid>
      <Grid item sm={3}>
        <Card>
        <CardHeader avatar={ <Avatar> sp</Avatar>}/>
          <CardActionArea>
          <CardContent>
      <CardMedia component="img" image= "./corona.jpg"/>
            <Typography variant="h5">Title</Typography>
            <Typography variant="subtitle1">aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</Typography>

          </CardContent>
          </CardActionArea>
          <CardActions>
            <Button variant="outlined" color="primary">
            Full Article
</Button>
          </CardActions>
        </Card>
      </Grid>
      <Grid item sm={3}>
        <Card>
        <CardHeader avatar={ <Avatar> sp</Avatar>}/>
          <CardActionArea>
          <CardContent>
      <CardMedia component="img" image= "./corona.jpg"/>
            <Typography variant="h5">Title</Typography>
            <Typography variant="subtitle1">aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</Typography>

          </CardContent>
          </CardActionArea>
          <CardActions>
            <Button variant="outlined" color="primary">
            Full Article
</Button>
          </CardActions>
        </Card>
      </Grid>
      <Grid item sm={3}>
        <Card>
        <CardHeader avatar={ <Avatar> sp</Avatar>}/>
          <CardActionArea>
          <CardContent>
      <CardMedia component="img" image= "./corona.jpg"/>
            <Typography variant="h5">Title</Typography>
            <Typography variant="subtitle1">aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</Typography>

          </CardContent>
          </CardActionArea>
          <CardActions>
            <Button variant="outlined" color="primary">
              Full Article
</Button>
          </CardActions>
        </Card>
      </Grid>
    </Grid>
  </Container>;
}

export default App;