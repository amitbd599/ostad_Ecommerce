import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { getToken } from "../helper/helper";
const PrivateRoute = ({ children }) => {
  const [isLogin, setIsLogin] = useState(false);
  const [loading, setLoading] = useState(true); // Add loading state

  useEffect(() => {
    (async () => {
      try {
        let result = getToken();
        if (result) {
          setIsLogin(true);
        } else {
          setIsLogin(false);
        }
      } catch (error) {
        console.log(error);

        setIsLogin(false);
      } finally {
        setLoading(false); // Set loading to false after verification
      }
    })();
  }, []);

  if (loading) {
    return <></>;
  }

  return isLogin ? children : <Navigate to='/login' />;
};

export default PrivateRoute;
