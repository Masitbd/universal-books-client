
import MainLayout from './layout/MainLayout'
import { onAuthStateChanged } from "firebase/auth";
import { auth } from './lib/firebase';
import { useAppDispatch } from './redux/hooks';
import { setUser } from './redux/features/user/userSlice';
import { Toaster } from "react-hot-toast";
import "./App.css";

function App() {
const dispatch = useAppDispatch()
  onAuthStateChanged(auth, (user) => {
  if(user){
 dispatch(setUser(user.email))
  }
  
});
 
 return (
    <>
     <MainLayout />
     <Toaster/>
    </>
  )
}

export default App
