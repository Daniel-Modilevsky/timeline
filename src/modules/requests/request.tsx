import React from "react";
import { Request } from "./request.iterface";
import RequestTag from "../../elements/tag";
import { Timeline } from "antd";
import "antd/dist/antd.css";


type SingleRequestProps = {
  request: Request;
  dayOn: boolean;
};

const SingleRequest: React.FC<SingleRequestProps> = (props) => {
  const { dayOn } = props;
  const { request } = props;
  const { date } = request;
  const { time } = request;

  const timeWithotYear = date.substring(0, date.length - 4);
  const timeWithotDate = time.substring(10, time.length);
  let custumPath:string;

  if(request.path.includes("2fb")){
    const indexStart = request.path.indexOf("2fb");
    custumPath = request.path.slice(0, indexStart) + "user_id";
  } else{
    custumPath = request.path;
  }

  return (
    <>       
        <Timeline.Item label={dayOn ?  (<span style={{display:"inline-block", backgroundColor:"#ddd" , height: 40, padding: 10, width:90, marginLeft:-100}}>
        {timeWithotYear}
        </span>) : (<span style={{display:"inline-block", height: 40, padding: 10, width:90}}>
        </span>)} style={{marginLeft:100, display:"block", height:60, marginTop:-8}}>{timeWithotDate}{" "}<RequestTag method={request.method} />{" "}{custumPath}</Timeline.Item>
    </>
  );
};

export default SingleRequest;

SingleRequest.defaultProps = {};
