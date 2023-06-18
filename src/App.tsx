import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Table from "./components/UI/Table";
import AuthorData from "./components/UI/AuthorData";
import BookData from "./components/UI/BookData";
import RootLayout from "./components/UI/RootLayout";

interface data {
  data: any;
}

const App: React.FC<data> = (props) => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: (
            <Table data={props.data.data} isFetching={props.data.isFetching} />
          ),
        },
        { path: "/:author", element: <AuthorData data={props.data.data} /> },
        {
          path: "/:author/:book",
          element: <BookData data={props.data.data} />,
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
