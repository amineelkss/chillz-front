import React, { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const res = await fetch(`${process.env.REACT_APP_API_URL}/user/profile`, {
                    method: "GET",
                    credentials: "include",
                });

                if (!res.ok) {
                    if (res.status === 403 || res.status === 401) {
                        // Token expiré ou absent → utilisateur non connecté
                        setUser(null);
                        return;
                    }
                    throw new Error("Erreur inattendue");
                }


                const data = await res.json();
                setUser(data.user);
            } catch (err) {
                console.error("Erreur :", err);
                setUser(null);
            } finally {
                setLoading(false);
            }
        };

        fetchUser();
    }, []);

    const login = (userData) => {
        setUser(userData);
    };

    const logout = () => {
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, login, logout, loading }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
