import React, { useState, useEffect } from "react";

// UI
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";

type SearchUserNameProps = {
    handlerUserName: Function;
    userName: string;
};

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    width: 400,
    marginTop: 20
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
}));

const SearchUserName: React.FC<SearchUserNameProps> = (props) => {
  const classes = useStyles();
  const {handlerUserName} = props;
  const {userName} = props;
  // STATES
  const [searcherdUser, setSearcherdUser] = useState("");


  useEffect(()=>{
    setSearcherdUser(userName);
  },[userName])

  //EVENT-HANDLERS
  const handleSearcherdUser = (val: string) => {
    setSearcherdUser(val);
  };

  const search = () => {
    handlerUserName(searcherdUser);
  };

  return (
    <>
      <Paper component="form" className={classes.root}>
        <InputBase
          className={classes.input}
          placeholder="User Name"
          inputProps={{ "aria-label": "search google maps" }}
          value={searcherdUser}
          onChange={(e) => handleSearcherdUser(e.target.value)}
        />

        <Divider className={classes.divider} orientation="vertical" />
        <IconButton
          className={classes.iconButton}
          aria-label="search"
          color="primary"
          onClick={() => search()}
        >
          <SearchIcon />
        </IconButton>
      </Paper>
    </>
  );
};

export default SearchUserName;

SearchUserName.defaultProps = {};
