import {Outlet} from 'react-router-dom'
import Header from '../../components/Header'
import SideBar from '../../components/Sidebar'

const PageLayout =()=>{
    return(
        <>
        <SideBar/>
        <Header/>
        <Outlet/>
        </>
    )
}

export default PageLayout 