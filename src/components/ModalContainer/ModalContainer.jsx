import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';

function ModalContainer(props){
  return (
    <div>
      <Modal open={props.onOpen} showCloseIcon={false} center>
        <h2>Login to Codedesk</h2>
        <input type={'text'} />
        <input type={'password'} />
        
        <button onClick={props.onClose}>Sign in</button>
      </Modal>
    </div>
  );
};
export default ModalContainer