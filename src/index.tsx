import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import RouterApplication from "./routes/router";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <RouterApplication />
  </BrowserRouter>,
  document.getElementById("root")
);

reportWebVitals();
