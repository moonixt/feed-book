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
        <div>
        <h1 className='text-white sidehover font-bold' onClick={Tests}>Teste API</h1>
        </div>
        </div>
      </div>
      {/* <List>
        <ListItem>
          <ListItemPrefix>
          </ListItemPrefix>
        </ListItem>
        <ListItem>
          <ListItemPrefix>
          </ListItemPrefix>
          
        </ListItem>
        <ListItem>
          <ListItemPrefix>
          </ListItemPrefix>
          
        
        </ListItem>
        <ListItem>
          <ListItemPrefix>
            <UserCircleIcon className="h-5 w-5" />
          </ListItemPrefix>
          Profile
        </ListItem>
        <ListItem>
          <ListItemPrefix>
            <Cog6ToothIcon className="h-5 w-5" />
          </ListItemPrefix>
          Settings
        </ListItem>
        <ListItem>
          <ListItemPrefix>
            <PowerIcon className="h-5 w-5" />
          </ListItemPrefix>
          Log Out
        </ListItem>
      </List> */}
    </Card>
    </div>
  )
}

export default SidebarComponent
