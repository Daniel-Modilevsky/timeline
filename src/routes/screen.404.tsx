import React from "react";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";

type Screen404Props = {};

const Screen404: React.FC<Screen404Props> = () => {
  const error404 =
    "https://www.winx5.com/wp-content/themes/ekommart/assets/images/404/404.png";

  return (
    <div className="App">
      <header className="App-header">
        <div
          style={{
            width: "80%",
            marginTop: "5%",
          }}
        >
          <h2
            style={{
              color: "red",
              textAlign: "center",
              width: "95%",
              fontSize: 40,
            }}
          >
            404{" "}
          </h2>
          <img src={error404} alt="404" />
          <p
            style={{
              color: "red",
              padding: 0,
              textAlign: "center",
              fontSize: 40,
            }}
          >
            This Route is not exist
          </p>
          <ButtonGroup
            disableElevation
            variant="contained"
            color="primary"
            style={{ marginBottom: "5%" }}
          >
            <Button
              onClick={() => {
                window.location.replace("/");
              }}
            >
              Back To Homepage
            </Button>
          </ButtonGroup>
        </div>
      </header>
    </div>
  );
};

export default Screen404;

Screen404.defaultProps = {};
