import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import AddBook from "../pages/AddBook";
import AllBooks from "../pages/AllBooks";
import BookDetails from "../pages/BookDetails";
import Books from "../pages/Books";
import Home from "../pages/Home";
import Login from "../pages/Login";
import NotFound from "../pages/NotFound";
import ReadlingList from "../pages/ReadingList";
import Signup from "../pages/Signup";
import UpdateBook from "../pages/UpdateBook";
import PrivateRoute from "./PrivateRoute";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,

    children: [
      {
        index: true,
        // element: <BookList />,
        element: <Home />,
      },
      {
        path: "/books",
        element: <Books />,
      },

      {
        path: "/",
        element: <AllBooks />,
      },
      {
        path: "/book-details/:id",
        element: <BookDetails />,
      },

      {
        path: "/add-book",
        element: (
          <PrivateRoute>
            <AddBook />
          </PrivateRoute>
        ),
      },
      {
        path: "/reading-list/:email",
        element: (
          <PrivateRoute>
            <ReadlingList />
          </PrivateRoute>
        ),
      },
      {
        path: "/update-book/:id",
        element: <UpdateBook />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default routes;
