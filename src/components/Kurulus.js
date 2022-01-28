import { useState } from "react";
import { useHistory } from "react-router-dom";
import Fab from '@material-ui/core/Fab';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import pic from "../images/image.jpg";
import pic1 from '../images/ertugrul_image.jpg'
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import  vid  from "../videos/video.mp4";


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



function TransitionsModal() {
    
    let history = useHistory();
    // const classes = useStyles();


    const classes = useStyles();
    const [open, setOpen] = useState(false);
  
    const handleOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
  
    return (
<>
        <div style={{textAlign: 'center'}} className={classes.root}>
        
        <Fab variant="extended" onClick={()=>{history.push('/')}} style={{backgroundColor: '#272643', color: '#bae8e8', marginTop: 30}}>
        <HomeOutlinedIcon className={classes.extendedIcon} />
          HOME
        </Fab>
        </div>

      <div>
      <Grid container spacing={3}>
         
      <Grid item xs={12} sm={6}>
        {/* <Paper className={classes.paper} style={{backgroundColor: '#114B5F'}}> */}
        
        <Card onClick={setOpen} className={classes.card,classes.paper} style={{border: 'none', borderRadius: '20px'}}>
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
      
      <Grid item xs={12} sm={6}>
        {/* <Paper className={classes.paper} style={{backgroundColor: '#114B5F'}}> */}
          
        <Card className={classes.card,classes.paper} id='card2' style={{border: 'none', borderRadius: '20px'}}>
    <CardActionArea style={{backgroundColor: '#272643'}}>
      <img src={pic} style={{width: '100%', height: 'auto', backgroundColor:'#272643'}}></img>
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
  
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          className={classes.modal}
          open={open}
          onClose={handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={open}>
            <div className={classes.paper1}>
              {/* <h2 id="transition-modal-title">Transition modal</h2> */}
              {/* <p id="transition-modal-description"> */}
              {/* <LionPlayer sources={SOURCES} defaultVolume= '20' /> */}
              {/* </p> */}
              <iframe className="iframe" width="100%" height="315" src={vid} frameborder="0" allow="autoplay" allowfullscreen ></iframe>
              
            </div>
          </Fade>
        </Modal>
      </div>
      </>
    );
  }

  export default TransitionsModal;