import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Dashboard from './views/Dashboard'
import Blogs from './views/Blogs';
import Gigs from './views/Gigs';
import Users from './views/Users';
import Messages from './views/Messages'
import Login from './views/Login';
import Register from './views/Regiser';
import AddBlog from './views/AddBlog'
import UpdateBlog from './views/UpdateBlog'
import UpdateGig from './views/UpdateGig'
import AddGig from './views/AddGig'
import PrivateRoutes from './routes/PrivateRoutes';
import PublicRoutes from './routes/PublicRoutes';

function App() {
  return (
    <>
       <BrowserRouter>
        <div className='bg-mainBgLight dark:bg-mainBgDark min-h-[100vh] bg-cover flex items-center justify-center'>
        <Routes>
            <Route path='/*' element={<PublicRoutes/>}>
                <Route path="login" element={<Login/>}/>
                <Route path="register" element={<Register/>}/>
            </Route>
            <Route path='/*' element={<PrivateRoutes/>}>
                <Route path="" element={<Dashboard/>}/>
                <Route path="blogs" element={<Blogs/>}/>
                <Route path="add-blog" element={<AddBlog/>}/>
                <Route path="edit-blog/:id" element={<UpdateBlog/>}/>
                <Route path="add-gig" element={<AddGig/>}/>
                <Route path="edit-gig/:id" element={<UpdateGig/>}/>
                <Route path="gigs" element={<Gigs/>}/>
                <Route path="users" element={<Users/>}/>
                <Route path="messages" element={<Messages/>}/>
            </Route>
        </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
