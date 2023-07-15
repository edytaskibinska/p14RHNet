import Layout from "../Layout/Layout";
import IndexPage from "../Pages/IndexPage";
import EmployeePage from "../Pages/EmployeePage";
import PageNotFound from "../Pages/PageNotFound";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { Outlet } from "react-router-dom";

//Root and routes for all application declaration
const Root = () => {
  return <Layout content={<Outlet />} />;
};

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route path="" element={<IndexPage />} />
      <Route path="/employees" element={<EmployeePage />} />
      <Route path="*" element={<PageNotFound />} />
    </Route>
  )
);

export default Root;
