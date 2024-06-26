import { Navigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export const AdminProtected = ({ children }) => {

    const {currentUser} = useAuth()

    if (currentUser) {
        return children;
    }
    return <Navigate to="/admin/login" />
}