import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import SideBar from './components/Sidebar/Sidebar';
import Feed from './components/Feed/Feed';
import ModalContainer from './components/ModalContainer/ModalContainer';
import { useState } from 'react';
import LoginSidebar from './components/LoginSidebar/LoginSidebar';
import React from 'react';

function App() {
  const [openModal, setOpenModal] = useState(false)
  const closeModal =() =>{
    setOpenModal(false)
  }
  return (
    <div className={openModal ? "openModal" : '' }>
      <ModalContainer/>
      <Header/>
      <div className='container'>
        <SideBar />
        <Feed />
        <LoginSidebar />
      </div>
    {/* <Modal/> */}
    {/* <button onClick={()=>{setOpenModal(true)}}>open Modal</button> */}
    </div>
  );
}

export default App;
