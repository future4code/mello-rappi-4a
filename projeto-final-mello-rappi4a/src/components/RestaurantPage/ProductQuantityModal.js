import React, { useState } from "react";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";

function ProductQuantityModal(props) {
  return (
    <div>
      <Dialog open={props.show} onClose={props.handleModal}>
        <DialogTitle>
          <p>Adicione uma quantidade</p>
          <select>
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
          </select>
          <button onClick={props.handleModal}>Adicionar ao carrinho</button>
        </DialogTitle>
      </Dialog>
    </div>
  );
}

export default ProductQuantityModal;
