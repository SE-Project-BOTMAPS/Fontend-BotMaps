import { Dropdown } from "primereact/dropdown";
import "../styles/Sidebar.css";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";

        

function Sidebar() {
  return (
    <div className="">
      {/* <div className="flex flex-col bg-gradient-to-r from-cyan-300 to-blue-400 w-96 rounded-md px-4 py-8 my-8 mx-4"> */}
      <div className="flex flex-col bg-sky-400 w-96 rounded-md px-4 py-8 my-8 mx-4 shadow-2xl">
        <img src="../btlg1-removebg-preview.png" className="mb-8" alt="logo"></img>
        <div className="p-inputgroup flex-3 mb-8 ">
          <span className="p-input-icon-left">
            <i className="pi pi-search" />
            <InputText placeholder="Name" className="w-full" />
          </span>
          <Dropdown />
        </div>
        <Button label="Search"/>

      </div>
    </div>
  );
}

export default Sidebar;
