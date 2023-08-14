
import ProductsPage from "../../components/DataView";

import SideBar from "../../components/Sidebar";

const handleSidebarClick = () => {
  // Lógica que será executada quando o botão de sidebar for clicado
  console.log('Botão do sidebar foi clicado!');
};

const PageHome = () => {  
 
  return (
    <main className="bg-slate-50 flex justify-center w-screen h-screen " >
    <SideBar onClick={handleSidebarClick}/>
    <ProductsPage/> 
    </main>
  );
};

export default PageHome;
