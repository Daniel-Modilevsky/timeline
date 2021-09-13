import React, { useEffect } from "react";
import SingleRequest from "./request";
import "antd/dist/antd.css";
import { Request } from "./request.iterface";
import { Timeline } from "antd";

type RequestListProps = {
  filteredrequests: Request[];
};

const RequestList: React.FC<RequestListProps> = (props) => {
  const { filteredrequests } = props;

  useEffect(() => {}, [filteredrequests]);

  const isDayOn = (index: number) => {
    if (index === 0) return true;
    else if (filteredrequests[index].date !== filteredrequests[index - 1].date)
      return true;
    else return false;
  };

  return (
    <div
      style={{
        maxHeight: 800,
        overflow: "auto",
        display: "blcok",
        padding: 20,
        margin: "50px auto",
        backgroundColor: "white",
        boxShadow:
          "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
      }}
    >
      <Timeline>
        {filteredrequests.map((request: Request, index: number) => {
          return (
            <SingleRequest
              key={request.id}
              request={request}
              dayOn={isDayOn(index)}
            />
          );
        })}
      </Timeline>
    </div>
  );
};

export default RequestList;

RequestList.defaultProps = {};
