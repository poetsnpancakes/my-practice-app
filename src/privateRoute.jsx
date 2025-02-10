import useAuthenticate from "./useAuthenticate";
import {Navigate} from 'react-router-dom';


const PrivateRoute = ({ element }) => {
    const { isAuthenticated } = useAuthenticate();
    return isAuthenticated ? element : <Navigate to="/login" />;
  };

  export default PrivateRoute;