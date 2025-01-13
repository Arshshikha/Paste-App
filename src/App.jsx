import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "./components/Home"
import Paste from "./components/Paste"
import ViewPaste from "./components/ViewPaste"
import Navbar from "./components/Navbar"
import{FacebookShareButton,FacebookIcon,WhatsappShareButton,WhatsappIcon,EmailShareButton ,EmailIcon,LinkedinShareButton,LinkedinIcon} from "react-share";

const router = createBrowserRouter(
  [
  
    {
      path:"/",
      element:
      <div className="w-full h-full flex flex-col">
        <Navbar/>
        <Home/>
      </div>
    },
    {
      path:"/pastes",
      element: <div className="w-full h-full flex flex-col">
      <Navbar/>
      <Paste/>
    </div>
    },
    {
      path:"/pastes/:id",
      element: <div className="w-full h-full flex flex-col">
      <Navbar/>
      <ViewPaste/>
    </div>,
    }
  ]
)

function App() {
  const shareUrl=window.location.href
    
  return (
    <div>

    <RouterProvider router={router}/>
   <div>
   <FacebookShareButton url={shareUrl}
   quote={'fb icon'}
   hashtag={"#Pic"}>
  <FacebookIcon size={32} round={true} />
</FacebookShareButton>
<br/>
<WhatsappShareButton url={shareUrl}
   quote={'fb icon'}
   hashtag={"#Pic"}>
  <WhatsappIcon size={32} round={true} />
</WhatsappShareButton>

<br/>
<EmailShareButton url={shareUrl}
   quote={'fb icon'}
   hashtag={"#Pic"}>
  <EmailIcon size={32} round={true} />
</EmailShareButton>

<br/>
<LinkedinShareButton url={shareUrl}
   quote={'fb icon'}
   hashtag={"#Pic"}>
  <LinkedinIcon size={32} round={true} />
</LinkedinShareButton>
   </div>
</div> 
  )
};


export default App
