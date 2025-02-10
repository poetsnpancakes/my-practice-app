import { Navigate } from "react-router-dom";
import useAuthenticate from "./useAuthenticate";


const Dashboard = () => {
    const { isAuthenticated, logout } = useAuthenticate();

    // If not authenticated, redirect to home
    if (!isAuthenticated ) {
        return <Navigate to="/user-login" replace />;
    }

    return (
        <div>
            <h1>Dashboard (Private)</h1>
            <button onClick={logout}>Logout</button>
        </div>
    );
};

export default Dashboard;



 