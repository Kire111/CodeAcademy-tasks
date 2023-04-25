// import logo from './logo.svg';
import './AdPage.module.css';
import Header from '../Header/Header';
import SideBar from '../Sidebar/Sidebar';
import Feed from '../Feed/Feed';
import ModalContainer from '../ModalContainer/ModalContainer';
import { useState } from 'react';
import LoginSidebar from '../LoginSidebar/LoginSidebar';
import React from 'react';
import AdSidebar from '../AdSidebar/AdSidebar';
import FeedItem from '../FeedItem/FeedItem';
import { Router } from 'react-router-dom';
import { useParams } from 'react-router';

function AdPage() {
  const [openModal, setOpenModal] = useState(false)
  const closeModal =() =>{
    setOpenModal(false)
  }
  const params= useParams()

  console.log(params.id);
  return (
    <div className={openModal ? "openModal" : '' }>
      <ModalContainer/>
      <Header/>
      <div className='container'>
        <SideBar />
        <FeedItem  adid={params.id} />
        <AdSidebar />
      </div>
    {/* <Modal/> */}
    {/* <button onClick={()=>{setOpenModal(true)}}>open Modal</button> */}
    </div>
  );
}

export default AdPage;
