import styles from './LoginSideBar.module.css';
import { useState } from 'react'
import ModalContainer from '../ModalContainer/ModalContainer';
import React from 'react';

function LoginSidebar(){
    const [open, setOpen] = useState(false);
    return(
        <>
        
        <div className={styles.loginSidebarContainer}>
        <h1>Remote hiring <br></br>made easy</h1>
        <ModalContainer onOpen={open} onClose={() =>{setOpen(false)}}/>
       
        <div className={styles.sidebarButton}>
        <button ><img style={{ width: "15px" ,height:"15px"}}  src='https://www.edigitalagency.com.au/wp-content/uploads/new-linkedin-logo-white-black-png.png' ></img> Sign up with Linkdin
            </button>
            
            <button> <img style={{ width: "15px" ,height:"15px"}} src='https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png' ></img> Sign up with Google        
            </button>
                <h5><span>or</span></h5>
            <button style={{ background: "rgb(237, 73, 127)", color: "white"}} > Sign up with phone or Email
            </button>
       
       <p><font size="1">By signing up , you agree to the Terms of Service and <br></br>Privacy Policy , including Cookie Use.</font></p>
       <h3>Already have an account ?</h3>
       
            <button style={{ color: "rgb(237, 73, 127)" }} onClick={() =>{setOpen(true)}}> Sign in
            </button>
            
            </div>
            <footer className={styles.sidebarFooter}>
                <div className={styles.sidebarFooterUl}>
                    <div>&#9400; 2022 Codedesk , Inc</div> 
                    <div>Apply as a developer</div>
                    <div> Blog</div> 
                    <div>Support</div>
                </div>
            </footer>
        
        </div>
        </>
    )
}
export default LoginSidebar