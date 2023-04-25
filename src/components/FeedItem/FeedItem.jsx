import React from 'react'
import Ad from '../Ad/Ad'
import styles from './FeedItem.module.css'
import AdSingle from '../AdSingle/AdSingle'
function FeedItem(props) {
    const jobs= [  {
        id: 1,
        name: <div style={{color: "grey"}}>Uber</div>,
        description: "Delivery Software person",
        location: 
        <>
            <svg style={{color: "rgb(121, 119, 119)"}}  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"height={15}width={15} >
                <path d="M168.3 499.2C116.1 435 0 279.4 0 192C0 85.96 85.96 0 192 0C298 0 384 85.96 384 192C384 279.4 267 435 215.7 499.2C203.4 514.5 180.6 514.5 168.3 499.2H168.3zM192 256C227.3 256 256 227.3 256 192C256 156.7 227.3 128 192 128C156.7 128 128 156.7 128 192C128 227.3 156.7 256 192 256z" fill="#797777">
                </path>
            </svg>
            <span style={{color: "grey"}}>Skopje</span>
        </>,
        comment:"I want a lot of skills of communications",
        image:<img width="40" height="40"src={'https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8&w=1000&q=80'} />,
        time:<p style={{color: "grey"}}>&#8226;2h ago</p>,
        requierments:
        <>
        <p>For this job position is very important to have the right motivation <br>
        </br> and to have the right skills and experience for the job</p>
        <div>
        <input className={styles.adSidebarInput} type="text" placeholder="Position requierments" />
        <p>5+ Years od Experience in plain JavaScript </p>
        <input className={styles.adSidebarInput} type="text" placeholder="Position benefits" />
        <p>500K yearly sallary + stock options </p>
        </div>
        </>
    },   
    
         
    
    {
        id: 2,
        name: <div style={{color: "grey"}}>Uber</div>,
        description: "Full Stack Stack JavaScript Developer Wanted",
        location: 
        <>
            <svg style={{color: "rgb(121, 119, 119)"}}  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"height={15}width={15}  >
                <path d="M168.3 499.2C116.1 435 0 279.4 0 192C0 85.96 85.96 0 192 0C298 0 384 85.96 384 192C384 279.4 267 435 215.7 499.2C203.4 514.5 180.6 514.5 168.3 499.2H168.3zM192 256C227.3 256 256 227.3 256 192C256 156.7 227.3 128 192 128C156.7 128 128 156.7 128 192C128 227.3 156.7 256 192 256z" fill="#797777">
                </path>
            </svg>
                <span style={{color: "grey"}}>San Francisco</span>
        </>,
        comment:"dafsdf",
        image:<img width="40" height="40"src={'https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8&w=1000&q=80'} />,
        time:<p style={{color: "grey"}}>&#8226;2h ago</p>,  
        requierments:
        <>
        <p>For this job position is very important to have the right motivation <br>
        </br> and to have the right skills and experience for the job</p>
        <div>
        <input className={styles.adSidebarInput} type="text" placeholder="Position requierments" />
        <p>5+ Years od Experience in plain JavaScript </p>
        <input className={styles.adSidebarInput} type="text" placeholder="Position benefits" />
        <p>500K yearly sallary + stock options </p>
        </div>
        </>
    },
    {
        id: 3,
        name: <div style={{color: "grey"}}>Amazon</div>,
        description: "Full Stack Stack JavaScript Developer Wanted",
        location: 
        <>
            <svg style={{color: "rgb(121, 119, 119)"}}  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"height={15}width={15} >
                <path d="M168.3 499.2C116.1 435 0 279.4 0 192C0 85.96 85.96 0 192 0C298 0 384 85.96 384 192C384 279.4 267 435 215.7 499.2C203.4 514.5 180.6 514.5 168.3 499.2H168.3zM192 256C227.3 256 256 227.3 256 192C256 156.7 227.3 128 192 128C156.7 128 128 156.7 128 192C128 227.3 156.7 256 192 256z" fill="#797777">
                </path>
            </svg>
            <span style={{color: "grey"}}>Skopje</span>
        </>,
         comment:"Here it is ",
         image:<img width="40" height="40"src={'https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8&w=1000&q=80'} />,
         time:<p style={{color: "grey"}}>&#8226;2h ago</p>,  
         requierments:
         <>
         <p>For this job position is very important to have the right motivation <br>
         </br> and to have the right skills and experience for the job</p>
         <div>
         <input className={styles.adSidebarInput} type="text" placeholder="Position requierments" />
         <p>5+ Years od Experience in plain JavaScript </p>
         <input className={styles.adSidebarInput} type="text" placeholder="Position benefits" />
         <p>500K yearly sallary + stock options </p>
         </div>
         </>
    },
    {
        id: 4,
        name: <div style={{color: "grey"}}>Uber</div>,
        description: "Full Stack Stack JavaScript Developer Wanted",
        location: 
        <>
            <svg style={{color: "rgb(121, 119, 119)"}}  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"height={15}width={15} >
                <path d="M168.3 499.2C116.1 435 0 279.4 0 192C0 85.96 85.96 0 192 0C298 0 384 85.96 384 192C384 279.4 267 435 215.7 499.2C203.4 514.5 180.6 514.5 168.3 499.2H168.3zM192 256C227.3 256 256 227.3 256 192C256 156.7 227.3 128 192 128C156.7 128 128 156.7 128 192C128 227.3 156.7 256 192 256z" fill="#797777">
                </path>
            </svg>
            <span style={{color: "grey"}}>Skopje</span>
        </>,
        requierments:
        <div>
            this position needs 5 years experience
        </div>,
         comment:"Here it is ",
         image:<img width="40" height="40"src={'https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8&w=1000&q=80'} />,
         time:<p style={{color: "grey"}}>&#8226;2h ago</p>,  
         requierments:
         <>
         <p>For this job position is very important to have the right motivation <br>
         </br> and to have the right skills and experience for the job</p>
         <div>
         <input className={styles.adSidebarInput} type="text" placeholder="Position requierments" />
         <p>5+ Years od Experience in plain JavaScript </p>
         <input className={styles.adSidebarInput} type="text" placeholder="Position benefits" />
         <p>500K yearly sallary + stock options </p>
         </div>
         </>
    }]
    const findElementById = () =>{
        console.log(props, jobs);
        let item = jobs.find(elem => elem.id == props.adid)
        console.log(item);
        return item
    }
    console.log(findElementById(3));
   let item = findElementById()
    // console.log(item);
    return (
        <div className={styles.feedContainer} style={{border: 'solid green 1px'}}>
            {
                // jobs.map(el =>(
                    <AdSingle data={item} />

                // ))
            }
            

        </div>
    )
}

export default FeedItem
