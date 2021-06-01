import React,{ useState } from "react";

import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';






const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 1000,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[600],
  },
}));



export default function FullArticle() {


  const [Like, setLike] = useState(0);
  const increament = () =>{
    setLike(Like+1)
  };
  




  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        
        title="3rd Phase preparation in India"
        subheader="june 01 , 2021"
      />
      <CardMedia
        className={classes.media}
        image=""
        title="TRENDING"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
        inevitable, prepare for new waves: Centre's top scientific advisor
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites" onClick={increament}><h3>{Like}</h3>
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>
          A third phase of the deadly novel coronavirus pandemic is inevitable,
           claimed K Vijay Raghavan, the Principal Scientific Advisor to
            the Government of India on Wednesday.
          </Typography>
          <Typography paragraph>
          Karnataka, Kerala, Tamil Nadu, West Bengal, Rajasthan and Bihar are among the states that show an 
          increasing trend in daily cases, it said. The government also said that 24 
          states and UTs show more than 15 per cent COVID positivity rate.
          </Typography>
          <Typography paragraph>
          The government said on Wednesday a third phase of the coronavirus pandemic was “inevitable”, but it
           is not clear on what time scale this phase would occur and hence, we should be prepared for the same.
            The Union Health Ministry held a briefing on the current COVID-10 situation and the vaccination programme
             underway in the country. Senior officials said the long COVID wave of such 
          “ferocity” that the country was experiencing currently “was not predicted”. Twelve states,
           including Maharashtra, Karnataka,   
          </Typography>
          <Typography>
            Reoprter:Subhasis Pradhan
            NaviNews
            
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}


