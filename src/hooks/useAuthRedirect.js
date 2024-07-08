// src/hooks/useAuthRedirect.js
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

const useAuthRedirect = () => {
    const navigate = useNavigate();
  
    useEffect(() => {
      const params = new URLSearchParams(window.location.search);
      const token = params.get("token");
  
      if (token) {
        localStorage.setItem("token", token);
        const decodedToken = jwtDecode(token);
  
        console.log("Decoded token:", decodedToken); // Debugging
  
        if (decodedToken.roles === "admin" || decodedToken.roles === "superadmin") {
          navigate("/admin/beranda");
        } else {
          navigate("/");
        }
      }
    }, [navigate]);
  };
  
  export default useAuthRedirect;
