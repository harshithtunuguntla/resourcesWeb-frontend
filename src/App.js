import logo from './logo.svg';
import './App.css';
import StackWeb from './Components/StackWeb/StackWeb';
import PipelineWeb from './Components/PipelineWeb/PipelineWeb';
import PipelineWebHundred from './Components/PipelineWebHundred/PipelineWebHundred';
import {createBrowserRouter, RouterProvider} from 'react-router-dom' 

function App() {

  const router = createBrowserRouter([
    {
      path:"/",
      element:<><PipelineWeb/></>
    },
    {
      path:"/100",
      element:<><PipelineWebHundred/></>
    },
    {
      path:"/stack/:stackid",
      element:<><StackWeb/></>
    }
  ])

  return (
    <>
     <RouterProvider router={router}/>
    </>
  )

}

export default App;
