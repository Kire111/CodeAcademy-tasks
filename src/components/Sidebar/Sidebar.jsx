import React from 'react'
import { Link } from 'react-router-dom';
import styles from './Sidebar.module.css'
function SideBar() {
    return (
        <div className={styles.sidebarContainer}>
            <div className={styles.sideBarItemsContainer}>
                <div className={styles.item}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className={styles.icon}>
                        <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                    </svg>
                        <Link to={"/"}>
                            <h3>Home</h3>
                        </Link>
                </div>
                <div className={styles.item}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"className={styles.icon} viewBox="0 0 16 16"> 
                        <path d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294l4-13zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0zm6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0z"/>
                    </svg>
                        <h3>Software development</h3>
                </div>
                <div className={styles.item}>
                    <svg width="24" height="24" stroke-width="1.5" className={styles.icon} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> 
                        <path d="M20 12V5.74853C20 5.5894 19.9368 5.43679 19.8243 5.32426L16.6757 2.17574C16.5632 2.06321 16.4106 2 16.2515 2H4.6C4.26863 2 4 2.26863 4 2.6V21.4C4 21.7314 4.26863 22 4.6 22H11" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/> <path d="M8 10H16M8 6H12M8 14H11" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/> <path d="M20.5 20.5L22 22" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/> <path d="M15 18C15 19.6569 16.3431 21 18 21C18.8299 21 19.581 20.663 20.1241 20.1185C20.6654 19.5758 21 18.827 21 18C21 16.3431 19.6569 15 18 15C16.3431 15 15 16.3431 15 18Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/> <path d="M16 5.4V2.35355C16 2.15829 16.1583 2 16.3536 2C16.4473 2 16.5372 2.03725 16.6036 2.10355L19.8964 5.39645C19.9628 5.46275 20 5.55268 20 5.64645C20 5.84171 19.8417 6 19.6464 6H16.6C16.2686 6 16 5.73137 16 5.4Z" fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/> 
                    </svg>
                        <h3>Software testing</h3>
                    
                </div>
                <div className={styles.item}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" className={styles.icon} fill="currentColor" viewBox="0 0 16 16"> 
                        <path d="M8.5 4a4.002 4.002 0 0 0-3.8 2.745.5.5 0 1 1-.949-.313 5.002 5.002 0 0 1 9.654.595A3 3 0 0 1 13 13H.5a.5.5 0 0 1 0-1H13a2 2 0 0 0 .001-4h-.026a.5.5 0 0 1-.5-.445A4 4 0 0 0 8.5 4zM0 8.5A.5.5 0 0 1 .5 8h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5z"/> 
                    </svg>
                        <h3>DevOps</h3>
                </div>
                <div className={styles.item}>
                    <svg xmlns="http://www.w3.org/2000/svg" className={styles.icon} viewBox="0 0 24 24"> <g> 
                        <path fill="none" d="M0 0h24v24H0z"/> <path d="M7.05 14.121L4.93 16.243l2.828 2.828L19.071 7.757 16.243 4.93 14.12 7.05l1.415 1.414L14.12 9.88l-1.414-1.415-1.414 1.415 1.414 1.414-1.414 1.414-1.414-1.414-1.415 1.414 1.415 1.414-1.415 1.415L7.05 14.12zm9.9-11.313l4.242 4.242a1 1 0 0 1 0 1.414L8.464 21.192a1 1 0 0 1-1.414 0L2.808 16.95a1 1 0 0 1 0-1.414L15.536 2.808a1 1 0 0 1 1.414 0zM14.12 18.363l1.415-1.414 2.242 2.243h1.414v-1.414l-2.242-2.243 1.414-1.414L21 16.757V21h-4.242l-2.637-2.637zM5.636 9.878L2.807 7.05a1 1 0 0 1 0-1.415l2.829-2.828a1 1 0 0 1 1.414 0L9.88 5.635 8.464 7.05 6.343 4.928 4.929 6.343l2.121 2.12-1.414 1.415z"/> </g> 
                    </svg>
                        <h3>Design,UX,UI</h3>
                </div>
                <div className={styles.item}>
                    <svg xmlns="http://www.w3.org/2000/svg" className={styles.icon} viewBox="0 0 640 512">
                        <path d="M211.2 96C211.2 131.3 182.5 160 147.2 160C111.9 160 83.2 131.3 83.2 96C83.2 60.65 111.9 32 147.2 32C182.5 32 211.2 60.65 211.2 96zM32 256C32 220.7 60.65 192 96 192H192C204.2 192 215.7 195.4 225.4 201.4C188.2 216.5 159.8 248.6 149.6 288H64C46.33 288 32 273.7 32 256V256zM415.9 200.6C425.3 195.1 436.3 192 448 192H544C579.3 192 608 220.7 608 256C608 273.7 593.7 288 576 288H493.6C483.2 247.9 453.1 215.4 415.9 200.6zM391.2 226.4C423.3 233.8 449.3 257.3 460.1 288C463.7 298 465.6 308.8 465.6 320C465.6 337.7 451.3 352 433.6 352H209.6C191.9 352 177.6 337.7 177.6 320C177.6 308.8 179.5 298 183.1 288C193.6 258.3 218.3 235.2 249.1 227.1C256.1 225.1 265.1 224 273.6 224H369.6C377 224 384.3 224.8 391.2 226.4zM563.2 96C563.2 131.3 534.5 160 499.2 160C463.9 160 435.2 131.3 435.2 96C435.2 60.65 463.9 32 499.2 32C534.5 32 563.2 60.65 563.2 96zM241.6 112C241.6 67.82 277.4 32 321.6 32C365.8 32 401.6 67.82 401.6 112C401.6 156.2 365.8 192 321.6 192C277.4 192 241.6 156.2 241.6 112zM608 416C625.7 416 640 430.3 640 448C640 465.7 625.7 480 608 480H32C14.33 480 0 465.7 0 448C0 430.3 14.33 416 32 416H608z"/>
                    </svg>
                        <h3>Product management</h3>
                </div>
                
            </div>
            {/* <div>Header</div> */}
        </div>
    )
}

export default SideBar
