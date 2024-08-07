import { useNavigate } from "react-router-dom";

import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
} from "@material-tailwind/react";
import {
  PresentationChartBarIcon,
  ShoppingBagIcon,
  UserCircleIcon,
  Cog6ToothIcon,
  InboxIcon,
  PowerIcon,
} from "@heroicons/react/24/solid";



 const SidebarComponent = () => {

  const NavigateHome = useNavigate();
  const NavigatePosts = useNavigate();
  const NavigateTest = useNavigate();

  const Home = () => {
    NavigateHome('/')
  }

  const Posts = () => {
    NavigateHome('/project')
  }

  const Tests = () => {
    NavigateHome('/test')
  }

  const Publish = () => {
    NavigateHome('/post')
  }

 
   

  return (
    

    <div>
      <Card className="fixed left-0 top-0 sidecolor xl:block lg:hidden md:hidden sm:block hidden h-full   p-4  ">
      <div className="mb-2 p-4">
        <div className="space-y-6 ">
          <div>
            <h1 className="font-bold pb-10">Feedbook</h1>
          </div>
        <div>
        <h1 className='text-white sidehover font-bold' onClick={Home}>Inicio</h1>
        </div>
        <div>
        <h1 className='text-white sidehover font-bold' onClick={Posts}>Postagens</h1>
        </div>
        {/* <div>
        <h1 className='text-white sidehover font-bold' onClick={Tests}>Teste API</h1>
        </div> */}
        <div>
        <h1 className='text-white sidehover font-bold' onClick={Publish}>Publicar</h1>
        </div>
        <div>
          
        </div>
        </div>
        
      </div>

    </Card>

    {/* <div>
    <Card className="fixed right-0 top-24  xl:block lg:hidden md:hidden sm:block hidden h-full   p-4  ">
      <div className="mb-2 p-4">
        <div className="space-y-6 ">
        <div>
        <h1 className='text-black font-bold'>Contatos</h1>
        </div>
       
        </div>
        
      </div>

    </Card>
    </div> */}
    
    </div>
  )
}

export default SidebarComponent
