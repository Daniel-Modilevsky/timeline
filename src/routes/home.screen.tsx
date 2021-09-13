import React, {useEffect, useState} from "react";
import SideBar from "../layout/sidebar";
import Data from "../modules/users/users.data.json";
import {Request} from "../modules/requests/request.iterface";
import {User, userNames} from "../modules/users/user.interface";
import { dateFromTime } from "../elements/date";
import RequestContainer from "../modules/requests/request.container"

type HomeScreenProps = {};

const HomeScreen: React.FC<HomeScreenProps> = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [requests, setRequests] = useState<Request[]>([]);
  const [userName, setUserName] = useState<string>("");
  const [userID, setUserID] = useState<string>("");
  const [uniqueUsers, setUniqueUsers] = useState<User[]>([]);
  const [errorFlag, setErrorFlag] = useState<boolean>(false);

  
  useEffect(() => {
    getRequests();
  }, []);

  useEffect(() => {
    console.log(requests);
  }, [requests]);

  useEffect(() => {    
   createUniqueUsers();
  }, [users]);

  /**
   * SETTER - USER NAME
   * @param newName 
   * @return void
   */
  const handlerUserName = (newName: string) => {
    const found = uniqueUsers.find(user => user.userName === newName);
    if(found){
      setUserName(found.userName);
      setUserID(found.userID);
      setErrorFlag(false);
    }
    else{
      setUserName("");
      setUserID("");
      setErrorFlag(true);
    }
  };

  /**
   * GET REQUEST - GET ALL REQUESTS FROM JSON DATA FILE
   * Update requests array state and users array state
   * @return {void}
   */
  const getRequests = () => {
    const dataUsers: any = Data;
    let requestArray: Request[] = [];
    let userArray: User[] = [];

    for (let index = 0; index < dataUsers.length; index++) {
      // REQUEST DATA
      let tempDate = new Date(dataUsers[index].timestamp);
      let date = dateFromTime(tempDate);
      const request: Request = {
        id: dataUsers[index].id,
        userID: dataUsers[index].user_id,
        path: dataUsers[index].call_path,
        time: dataUsers[index].timestamp,
        method: dataUsers[index].method,
        statusCode: dataUsers[index].status_code,
        date: date,
      };
      requestArray.push({ ...request });

      // USER DATA
      const user: User = {
        userID: dataUsers[index].user_id,
        userName: ""
      };
      userArray.push({ ...user });
    }
    setRequests([...requestArray]);
    setUsers([...userArray]);
  };
  
  /**
   * CREATE NEW UNIQUE USERS ARRAY
   * Set behavior
   * @return {void}
   */
  const createUniqueUsers = () => {
    const unique = new Set(users.map((item) => item.userID));
    let uniqueArray = Array.from(unique);
    let newUniqueArray: User[] = [];
    for (let index = 0; index < uniqueArray.length; index++) {
      const user: User = {
        userID: uniqueArray[index],
        userName: userNames[index % 10]
      };
      newUniqueArray.push({ ...user });
    }
    setUniqueUsers([...newUniqueArray]);
  };

  
  return (
    <>
      <SideBar users={uniqueUsers} userName={userName} handlerUserName={handlerUserName}/>
      <div
        className="container"
        style={{

          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyItems: "center",
          height: 1010,
          marginLeft:"25%",
          width: "75%",
          backgroundColor: "#f4f6f8",
        }}
      >
        <RequestContainer requests={requests} errorFlag={errorFlag} userName={userName} userID={userID} handlerUserName={handlerUserName}/>
      </div>
    </>
  );
};

export default HomeScreen;

HomeScreen.defaultProps = {};
