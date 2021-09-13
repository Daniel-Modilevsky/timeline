import React from "react";

// UI
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

// STYLE
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    flexGrow: 1,
  },
  icon: {
    marginRight: theme.spacing(2),
    height: 50,
    width: 110,
  },
  title: {
    flexGrow: 1,
    color:"white",
  },
}));

type HeaderProps = {};

const Header: React.FC<HeaderProps> = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <img
            src={
              "http://med-fom-fmprpostgrad.sites.olt.ubc.ca/files/2016/02/Timeline-for-Scholarship-Projects.png"
            }
            alt={"logo"}
            className={classes.icon}
          />
          <Typography variant="h6" className={classes.title}>
            Time Line Task
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;

Header.defaultProps = {};
