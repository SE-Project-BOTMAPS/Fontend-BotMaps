import {Toast} from "primereact/toast";
import {toastRef} from "../repository";
import Main from "./Route";

function App() {
  return (
    <>
        <Toast ref={toastRef} position="bottom-right"/>
      <Main/>
    </>
  );
}

export default App;
