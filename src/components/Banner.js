import Carousel from "react-material-ui-carousel";
import {bannerData} from "./bannerpic/data";
import { makeStyles } from '@material-ui/core/styles'



const useStyles = makeStyles({
    image: {
        width:'100%',
        height: '280px',
    }
})


const Banner = () =>{
    const classes = useStyles();
    return(
       <Carousel animation='slide' cycleNavigation={true}>
       {
           bannerData.map(image => (
               <img src={image} alt=" " className={classes.image}/>
           ))
       }
       </Carousel>
    )
}

export default Banner;