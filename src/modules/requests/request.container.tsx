import React, { useState, useEffect } from "react";
import ListRequests from "./request.list";
import { Divider } from "antd";
import "antd/dist/antd.css";
import { Request } from "./request.iterface";
import SearchUserName from "../users/user.search";
import { sortByDate } from "../../elements/date";


type RequestContainerProps = {
  requests: Request[];
  userName: string;
  userID: string;
  handlerUserName: Function;
  errorFlag: boolean;
};

const RequestContainer: React.FC<RequestContainerProps> = (props) => {
  const [filteredrequests, setFilteredRequests] = useState<Request[]>([]);
  const { requests } = props;
  const { userName } = props;
  const { userID } = props;
  const { handlerUserName } = props;
  const { errorFlag } = props;
  const errorMessage = "No User by this name";

  useEffect(() => {
    if(userName === ""){
      setFilteredRequests([...requests]);
    }
  }, []);

  useEffect(() => {
    console.log(requests);
    setFilteredRequests([...requests]);

    sortByDate(requests);
  }, [requests]);

  useEffect(() => {
    if(errorFlag){
      setFilteredRequests([...requests]);
    }
    else{
      filterByUserName();
    }
  }, [userName]);

  
  /**
   * FILTER REQUESTS BY USER NAME
   * Can be changed by searching or selecting user name
   * @return {void}
   */
  const filterByUserName = () => {
    if(userName === ""){
      setFilteredRequests([...requests]);
    }
    const array = requests.filter(req => req.userID === userID);
    setFilteredRequests([...array]);
  }

  return (
    <>
      <h4 style={{color:"gray", marginLeft:15 , marginTop: 15, marginBottom: 10}}> TIMELINE REQUESTS : {filteredrequests.length} </h4>
      <SearchUserName handlerUserName={handlerUserName} userName={userName}/>
      {errorFlag && (<p style={{textAlign:"center", color:"red", fontSize: 18}}>{errorMessage}</p>)}
      <Divider />
      <ListRequests filteredrequests={filteredrequests} />
    </>
  );
};

export default RequestContainer;

RequestContainer.defaultProps = {};
