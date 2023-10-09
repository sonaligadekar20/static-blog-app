import  ReactDOM  from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './views/Home/Home'
import Post from './views/Posts/Posts'
import ReadPost from './views/ReadPost/ReadPost'

const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home/>
    },
    {
        path: '/posts',
        element: <Post/>
    },
    {
        path: '/post/read/:id', 
        element:<ReadPost/>                
      
    },
    {
        path: '*',
        element:<div>Not Found</div>
    }


])

root.render(<RouterProvider router={router}/>)