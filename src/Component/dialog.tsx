import React, { useState } from "react";
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";

interface ModalComponentProps {
  RoomCode: string;
  onHide: () => void;
}

const ModalComponent: React.FC<ModalComponentProps> = ({ RoomCode, onHide }) => {
  return (
    <Dialog
      header={`Room ${RoomCode} Details`}
      visible={true}
      style={{ width: "50vw" }}
      closeOnEscape={true}
      dismissableMask={true}
      onHide={onHide}
    >
      <div>
        {/* Add content inside the modal */}
        <p>Modal Content for Room {RoomCode}</p>
      </div>
      <div className="p-d-flex p-jc-end">
        <Button label="Close" onClick={onHide} className="bg-zinc-700"/>
      </div>
    </Dialog>
  );
};

export default ModalComponent;
