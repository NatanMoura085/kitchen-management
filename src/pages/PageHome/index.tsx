import DataView from "../../components/DataView";
import SideBar from "../../components/Sidebar";


const PageHome = () => {  
  return (
    <main className="bg-slate-50 flex justify-center ">
    <SideBar/>
    <DataView/> 
    </main>
  );
};

export default PageHome;
