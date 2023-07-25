import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import BookList from "../components/ui/BookList";
import AddBook from "../pages/AddBook";
import AllBooks from "../pages/AllBooks";
import Books from "../pages/Books";
import Login from "../pages/Login";
import NotFound from "../pages/NotFound";
import Signup from "../pages/Signup";
import PrivateRoute from "./PrivateRoute";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <App />,

        children: [
        {
            index: true,
            element: <BookList />,
        },
     {
        path: '/books',
        element: <Books/>
     },
     {
      path: '/all-books',
      element: <AllBooks/>
   },
   {
    path: "/add-book",
    element: (
      <PrivateRoute>
        <AddBook />
      </PrivateRoute>
    ),
  },
    ]
    },
    {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/signup',
        element: <Signup />,
      },
      {
        path: '*',
        element: <NotFound />,
      },
])

export default routes
