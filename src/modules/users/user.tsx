import React, { useState, useEffect} from "react";
import ListItem from "@material-ui/core/ListItem";
import {User} from "./user.interface"

import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      flexBasis: '33.33%',
      flexShrink: 0,
      
    },
  }),
);

type SingleUserProps = {
  user: User;
  index: number;
  handlerUserName:Function;
  userName: string;
};

const SingleUser: React.FC<SingleUserProps> = (props) => {
  const classes = useStyles();

  const {handlerUserName} = props;
  const { user } = props;
  const { index } = props;
  const {userName} = props;

  const [color,setColor] = useState<string>("black" || "#0275d8"); 
  const [expanded, setExpanded] = React.useState<string | false>(false);

  useEffect(()=>{
    changeColor();
  },[])

  useEffect(()=>{
    changeColor();
  },[userName])


  const changeColor = () => {
    if(userName === user.userName){
      setColor("#0275d8");
    }
    else{
      setColor("black");
    }
  }

  const handleChange = (panel: string) => (event: React.ChangeEvent<{}>, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
    handlerUserName(user.userName);
  };
  return (
    <>
      <ListItem button key={user.userID} style={{ height: 100 }}>
      <div className={classes.root}>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography style={{color:color}} className={classes.heading}>{index} . {user.userName} </Typography>
        </AccordionSummary>
        <AccordionDetails style={{backgroundColor:"#ccc"}}>
          <Typography>
          {user.userID}
          </Typography>
        </AccordionDetails>
      </Accordion>
      </div>
      </ListItem>
    </>
  );
};

export default SingleUser;

SingleUser.defaultProps = {};
