import react from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import pic from "../images/banner1.jpg";
import pic1 from '../images/banner2.jpeg'
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { AudioCard, VideoCard } from 'material-ui-player'
import { LionPlayer } from 'lion-player';
import 'lion-player/dist/lion-skin.min.css';
import home_css from '../css/Home.css';



// import vid from "../videos/video.mp4";


const SOURCES = [
  {
    src: '//ok.ru/videoembed/2313365359230',
    type: 'video/mp4',
  },

];

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
    // marginTop: theme.spacing(5)
  },
  grid: {
    flexGrow: 1,
  },
  paper: {
    backgroundColor: '#FCE1A9',
    margin: theme.spacing(5),
    marginTop: theme.spacing(6),
    textAlign: 'center',
    // color: theme.palette.text.secondary,
  },
  card: {
    maxWidth: '100%',
    color: '#00a6fb'
  },
  media: {
    height: '100%',
    width: 'auto'
  },

  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper1: {
    backgroundColor: '#e3f6f5',
    border: '3px solid #000',
    borderRadius: '30px',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2),
    width: '60%'
  },
  

}));





function Home() {
  let history = useHistory();
    const classes = useStyles();

    return (
      <div style={{textAlign: 'center', marginTop: 40}} className={classes.root}>
        
        
        
      <div className={classes.grid}>
      <Grid container spacing={-5}>
       
        <Grid item xs={12} sm={6} onClick={()=>{history.push('/barbarosa')}}>
          {/* <Paper className={classes.paper} style={{backgroundColor: '#114B5F'}}> */}
            
          <Card className={classes.card,classes.paper} style={{border: 'none', borderRadius: '20px'}}>
      <CardActionArea style={{backgroundColor: '#272643'}}>
        <img src={pic} style={{width: '100%', height: 'auto', backgroundColor:'#272643'}}></img>
        <CardContent>
          <Typography gutterBottom variant="h6" component="h8" style={{color: '#bae8e8'}}>
            Barbarossa
          </Typography>
          
        </CardContent>
      </CardActionArea>
    </Card>
    

          {/* </Paper> */}
        </Grid>
        
        <Grid item xs={12} sm={6} onClick={()=>{history.push('/osman')}}>
          {/* <Paper className={classes.paper} style={{backgroundColor: '#114B5F'}}> */}
            
          <Card className={classes.card,classes.paper} id='card2' style={{border: 'none', borderRadius: '20px'}}>
      <CardActionArea style={{backgroundColor: '#272643'}}>
        <img src={pic1} style={{width: '100%', height: 'auto', backgroundColor:'#272643'}}></img>
        <CardContent>
          <Typography gutterBottom variant="h6" component="h8" style={{color: '#bae8e8'}}>
            Kurulus Osman
          </Typography>
          
        </CardContent>
      </CardActionArea>
    </Card>

          {/* </Paper> */}
        </Grid>
       
      </Grid>
    </div>

      </div>
    );   
}

export default Home;