import React, {useEffect } from "react";
import SingleUser from "../modules/users/user";
import { User } from "../modules/users//user.interface";

import List from "@material-ui/core/List";

type SideBarProps = {
  users: User[];
  handlerUserName:Function;
  userName:string;
};

const SideBar: React.FC<SideBarProps> = (props) => {
  const {users} = props;
  const {handlerUserName} = props;
  const {userName} = props;

  useEffect(() => {
  },[users]);

  useEffect(() => {
  },[userName]);

  return (
    <aside
      style={{
        width: "25%",
        backgroundColor: "#f4f6f8",
        position: "absolute",
        height: 1010,
        borderRight: "1px solid gray",
      }}
    >
      <div style={{padding:10}}>
          <h4 style={{color:"gray", textAlign:"center", marginTop: 15, marginBottom: 10}}> USERS LIST </h4>
        <List>
          {users.map((user: User, index: number) => {
            return <SingleUser key={user.userID} index={index} user={user} userName={userName} handlerUserName={handlerUserName} />;
          })}
        </List>
      </div>
    </aside>
  );
};

export default SideBar;

SideBar.defaultProps = {};
