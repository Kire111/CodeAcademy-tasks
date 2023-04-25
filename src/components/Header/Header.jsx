import React from 'react'
import styles from './Header.module.css'
function Header() {
    return (
        <div className={styles.headerContrainer}>
            <div className={styles.headerItemContainer}>
                <h1>Codedesk&#8482;</h1>
            </div>
            <div className={styles.headerItemContainerMain}>
                <input className={styles.inputSearch} type='text' />
            </div>
            <div className={styles.headerContrainerBar}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className={styles.bar}>
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
            </div>
            {/* <div>Header</div> */}
        </div>
    )
}

export default Header