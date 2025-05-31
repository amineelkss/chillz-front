import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

const ProtectedRoute = ({ }) => {
    const { user, loading } = useAuth();

    if (loading) {
        return <div className="text-center mt-20">Chargement...</div>;
    }

    if (!user || user.role !== 'ADMIN') {
        return <Navigate to="/unauthorized" replace />;
    }

    return <Outlet />;
};

export default ProtectedRoute;
