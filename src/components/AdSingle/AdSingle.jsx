import React from 'react'
import styles from './AdSingle.module.css'
function AdSingle(props) {
    return (
        <div className={styles.AdSingleContainer}>
            {/* <div className={styles.hours}>
                <p>2h ago</p>
            </div> */}
            <div className={styles.imageContainer}>
                <img className={styles.image} src="https://w7.pngwing.com/pngs/557/90/png-transparent-google-logo-g-suite-google-text-logo-business-thumbnail.png" alt="" />
            </div>
            <div className={styles.contentContainer}>
                <h4>{props.data.name}</h4>
                <h2>{props.data.description}</h2>
                <h4>{props.data.location}</h4>
                <p>
                   {props.data.comment}
                </p>
                <h4>{props.data.requierments}</h4>

                {/* <div className={styles.icons}>
                    <div className={styles.icon}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class={styles.iconImage}>
                            <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                            <h4 style={{marginLeft: '10px',color: "grey"}}>1331</h4>
                    </div>
                    <div className={styles.icon}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16"> 
                            <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
                        </svg>
                        <h4 style={{marginLeft: '10px',color: "grey"}}>1331</h4>
                    </div>
                    <div className={styles.icon}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
                            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
                        </svg>
                        <h4 style={{marginLeft: '10px',color: "grey"}}>1331</h4>
                    </div>
                    <div className={styles.icon}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-share" viewBox="0 0 16 16"> 
                            <path d="M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5zm-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z"/>
                        </svg>
                        <h4 style={{marginLeft: '10px',color: "grey"}}>1331</h4>
                    </div>
                    
                </div>
            </div> */}
            <div className="icons">{props.data.likes}</div>
            </div>
            <div className='feed-right'>{props.data.time}</div>
            
        </div>
    )
}

export default AdSingle
