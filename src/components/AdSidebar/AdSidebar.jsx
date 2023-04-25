import styles from './AdSidebar.module.css';
import { useState } from 'react'
import ModalContainer from '../ModalContainer/ModalContainer';
import React from 'react';

function AdSidebar(){
    const [open, setOpen] = useState(false);
    return(
        <>
        
        <div className={styles.adSidebarContainer}>
            <div className={styles.adSidebarLikes}>
            <div style={{paddingLeft:"30px"}}>
            <h4 >1431</h4>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16"> 
                    <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>
                    <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
                </svg>
                </div>
        
                <div style={{paddingLeft:"30px"}}>
            <h4 >782</h4>
                <svg xmlns="http://www.w3.org/2000/svg"  width="16" height="16" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16"> 
                    <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
                </svg>
                </div>
            
        
                <div style={{paddingLeft:"30px"}}>
                <h4 >48</h4>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
                         <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
                    </svg>
            </div>
        
        </div>
       
       
        
            <button style={{ background: "rgb(237, 73, 127)", color: "white",marginLeft:"30px"}} > Applay for interview
            </button>
            <p style={{paddingLeft:"30px",paddingTop:"60px"}}><b>Salary</b></p>
            <div>
            <input className={styles.adSidebarInput} type="text" placeholder="$3000-$5000/month" id="subdomain"/>
            </div>
            <p style={{paddingLeft:"30px"}}><b>Work type</b></p>
            <div>
            <input className={styles.adSidebarInput} type="text" placeholder="Remote"  id="subdomain"/>
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
export default AdSidebar