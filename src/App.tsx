import MainPage from "./Pages";
import {Toast} from "primereact/toast";
import {toastRef} from "../repository";

function App() {
  return (
    <>
        <Toast ref={toastRef} position="bottom-right"/>
      <MainPage />
    </>
  );
}

export default App;
