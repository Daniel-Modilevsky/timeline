import React, { useEffect } from "react";
import { Request } from "./request.iterface";
import RequestTag from "../../elements/tag";
import { Timeline } from "antd";
import "antd/dist/antd.css";

type SingleRequestProps = {
  request: Request;
  dayOn: boolean;
  selectedRequest: number;
  index: number;
};

const SingleRequest: React.FC<SingleRequestProps> = (props) => {
  const { dayOn } = props;
  const { request } = props;
  const { date } = request;
  const { time } = request;
  const { selectedRequest } = props;
  const { index } = props;

  useEffect(() => {}, [selectedRequest]);

  const timeWithotYear = date.substring(0, date.length - 4);
  const timeWithotDate = time.substring(10, time.length);
  let backGroundColor: string = "white" || "#edf0f9";

  let custumPath: string;

  if (request.path.includes("2fb")) {
    const indexStart = request.path.indexOf("2fb");
    custumPath = request.path.slice(0, indexStart) + "user_id";
  } else {
    custumPath = request.path;
  }

  if (selectedRequest === index) {
    backGroundColor = "#edf0f9";
  } else {
    backGroundColor = "white";
  }

  return (
    <>
      <Timeline.Item
        label={
          dayOn ? (
            <p
              style={{
                display: "inline-block",
                backgroundColor: "#ddd",
                height: 40,
                padding: 10,
                width: 90,
                marginLeft: -100,
              }}
            >
              {timeWithotYear}
            </p>
          ) : (
            <p
              style={{
                display: "inline-block",
                height: 40,
                padding: 10,
                width: 90,
                marginLeft: -100,
              }}
            >
              {timeWithotDate}
            </p>
          )
        }
        style={{
          backgroundColor: backGroundColor,
          marginLeft: 100,
          display: "flex",
          height: 60,
        }}
      >
        {" "}
        <p style={{ marginTop: 20 }}>
          <RequestTag method={request.method} /> {custumPath}
        </p>
      </Timeline.Item>
    </>
  );
};

export default SingleRequest;

SingleRequest.defaultProps = {};
