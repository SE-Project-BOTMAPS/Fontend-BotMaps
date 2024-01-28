import React from "react";
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";
import {Response} from "../../state/slices/types/room.type.ts";

interface ModalComponentProps {
  data: Response | null;
  onHide: () => void;
}

const ModalComponent: React.FC<ModalComponentProps> = ({ data, onHide }) => {
  return (
    <Dialog
      header={`Room ${data?.events[0].Location.location} Details`}
      visible={true}
      style={{ width: "50vw" }}
      closeOnEscape={true}
      dismissableMask={true}
      onHide={onHide}
      draggable={false}
    >
      <div>
        {/* Add content inside the modal */}
        <p>Modal Content for Room</p>
      </div>
      <div className="p-d-flex p-jc-end">
        <Button label="Close" onClick={onHide} className="bg-zinc-700"/>
      </div>
    </Dialog>
  );
};

export default ModalComponent;
