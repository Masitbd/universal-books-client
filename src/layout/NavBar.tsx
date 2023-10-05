import { signOut } from 'firebase/auth';
import { useState } from 'react';
import { AiFillHeart } from 'react-icons/ai';
import { FaClipboardList } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import { auth } from '../lib/firebase';
import { useGetBooklistsQuery } from '../redux/features/readinglist/readinglist';
import { setUser } from '../redux/features/user/userSlice';
import { useGetWishlistsQuery } from '../redux/features/wishlist/wishlistApi';
import { useAppDispatch, useAppSelector } from '../redux/hooks';

const NavBar = () => {
  const [wishlistOpen, setWishlistOpen] = useState(false);
    const {user} = useAppSelector(state => state.user)
    const dispatch = useAppDispatch()
    const { data: readingLists } = useGetBooklistsQuery(user?.email!);
    const { data: wishlists } = useGetWishlistsQuery(user.email!);


    const handleLogout = ()=>{
        signOut(auth).then(() => {
            dispatch(setUser(null))
            window.location.reload()
            
          })
    }

    return (
<nav className="flex items-center justify-between flex-wrap bg-stone-600 p-6 px-32">
  <div className="flex items-center flex-shrink-0 text-white mr-6">
    <svg className="fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"/></svg>
    <Link to='/'>
    <span className="font-semibold text-xl tracking-tight">Universal Books</span>
    </Link>
  </div>
  <div className="block lg:hidden">
    <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-500 hover:text-red hover:border-white">
      <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
    </button>
  </div>
  <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
    <div className="text-sm lg:flex-grow">
      
   <Link to='/'> 
        <span className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">Home</span>
   </Link>
   <Link to='/all-books'> 
        <span className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">Books</span>
   </Link>
      <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
        About Me
      </a>
    </div>
   <div>
    
      <span>
      <Link
            to={`/reading-list/${user?.email}`}
            className="btn btn-ghost btn-circle"
            onClick={() => setWishlistOpen(false)}
          >
            <div className="indicator">
              <FaClipboardList className="text-[1.30rem] text-info" />
              <span className="badge bg-slate-300 badge-sm indicator-item  animate-spin">
                {readingLists?.readingPlan?.length || 0}
              </span>
            </div>
          </Link>
      </span>
      <span  tabIndex={0}
            className="btn btn-ghost btn-circle"
            onClick={() => setWishlistOpen(!wishlistOpen)} >
      <div className="indicator mr-5">
              <AiFillHeart className="text-2xl text-error" />
              <span className="badge badge-sm indicator-item animate-spin">
                {wishlists?.total || 0}
              </span>
        </div>
        {wishlistOpen && (
            <div
              tabIndex={0}
              className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-200 shadow"
            >
              <div className="card-body bg-slate-300">
                <span className="font-bold text-sm">10 Items</span>
                <span className="text-info">Subtotal: $599</span>
                <div className="card-actions">
                 
                </div>
                <button type='button' className="bg-blue-500 hover:bg-blue-700 text-white text-sm py-1 rounded">
                    View cart
                  </button>
              </div>
            </div>
        )}
      </span>
    
   {
    !user.email &&
    <>
    <Link to='/login' className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">
    Login
    </Link>
  </>
   }
   {
    user.email &&
    <>
 <Link to='/login' onClick={handleLogout} className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">
    Logout
 </Link>  </>
   }
   </div>
  </div>
</nav>  
        
    );
};

export default NavBar;