import { Route , Routes } from "react-router-dom";

import MainPage from "./Pages";
import Table from "./Pages/Table";

const Main =()=>{
    return(
        <Routes>
            <Route path='/' element={<MainPage/>}></Route>
            <Route path='/:floor' element={<Table/>}></Route>
        </Routes>
    )
}
export default Main;
