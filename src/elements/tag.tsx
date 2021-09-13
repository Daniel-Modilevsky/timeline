import React from "react";
import { Tag } from "antd";
import 'antd/dist/antd.css';

type RequestTagProps = {
  method: string;
};

const RequestTag: React.FC<RequestTagProps> = (props) => {
  const { method } = props;

  const UniqeTag = () => {
    if(method === "DELETE"){
        return <Tag style={{borderRadius:20}} color="red">DELETE</Tag>
    }
    else if(method === "POST"){
        return <Tag style={{borderRadius:20}} color="green">POST</Tag>
    }
    else if(method === "GET"){
        return <Tag style={{borderRadius:20}} color="blue">GET</Tag>
    }
    else if(method === "AUTH"){
        return <Tag style={{borderRadius:20}} color="purple">AUTH</Tag>
    }
    else{
        return <Tag style={{borderRadius:20}} color="orange">PUT</Tag>
    }
  };
  return (
    <>
     {UniqeTag()}
    </>
  );
};

export default RequestTag;

RequestTag.defaultProps = {};
