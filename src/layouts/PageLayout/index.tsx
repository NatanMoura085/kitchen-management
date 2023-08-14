import {Outlet} from 'react-router-dom'
import Header from '../../components/Header'
// import SideBar from '../../components/Sidebar'

const PageLayout =()=>{
    return(
        <>
     
        <Header/>
        <Outlet/>
        </>
    )
}

export default PageLayout 