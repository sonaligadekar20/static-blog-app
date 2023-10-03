import  ReactDOM  from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './views/Home/Home'
import Posts from './views/Posts/Posts';
import ReadPost from './views/ReadPost/ReadPost';

const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home/>
    },
    {
        path: '/posts',
        element: <Posts/>
    },
    {
        path: '/read',
        element: <ReadPost/>
    }


])

root.render(<RouterProvider router={router}/>)