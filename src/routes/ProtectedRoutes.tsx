import { Navigate, Outlet} from "react-router-dom";
import { useAuthStore } from "../stores/AuthStore";



const ProtectedRoutes = () => {

    const user = useAuthStore((state) => state.user);

    return user ? <Outlet /> : <Navigate to='iniciar-sesion' replace />
}

export default ProtectedRoutes;