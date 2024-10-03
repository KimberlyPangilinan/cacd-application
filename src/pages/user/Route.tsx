import { Navigate, Outlet } from "react-router-dom";
import { Header } from "../../components/common/Headers";

export const UserRoutes = () => {
  const localStorageToken = localStorage.getItem("token");
  return localStorageToken ? (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="grow">
        <Outlet />
      </main>
    </div>
  ) : (
    <Navigate to="/login" replace />
  );
};
