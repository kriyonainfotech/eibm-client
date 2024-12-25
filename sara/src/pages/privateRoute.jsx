import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const PrivateRoute = ({ children }) => {
    const navigate = useNavigate();
    const apiurl = import.meta.env.VITE_API_URL
    useEffect(() => {
        const checkAdmin = async () => {
            try {
                const res = await axios.get(`${apiurl}/auth/admin/check`, { withCredentials: true });
                
                
                if (res.data.role !== 'admin') {
                    navigate('/signin');
                }
            } catch (error) {
                navigate('/signin');
            }
        };

        checkAdmin();
    }, [navigate]);

    return children;
};

export default PrivateRoute;
