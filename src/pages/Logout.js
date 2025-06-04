import React, { useState } from "react";
import "./Logout.css";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from 'react-router-dom';

const Logout = ({ onClose }) => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const { logout } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async () => {
        setLoading(true);
        setError(null);

        try {
            const res = await fetch(`${process.env.REACT_APP_API_URL}/user/logout`, {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                credentials: 'include',
            });

            const data = await res.json();

            if (!res.ok) {
                setError(data.message);
            } else {
                logout(); // nettoyage local via le contexte
                onClose(); // fermer la popup
                navigate("/");
            }
        } catch (error) {
            setError({general: "Erreur réseau, veuillez réessayer."});
            console.error("Erreur réseau :", error);
        } finally {
            setLoading(false);
        }
    };


    return (
        <div className="logout-overlay" onClick={onClose}>
            <div
                className="logout-popup"
                onClick={(e) => e.stopPropagation()}
            >
                <h2>Confirmer la déconnexion</h2>

                {error && <p style={{ color: "red" }}>{error}</p>}

                <div className="logout-buttons">
                    <button
                        onClick={onClose}
                        disabled={loading}
                        className="logout-btn-cancel"
                    >
                        Annuler
                    </button>
                    <button
                        onClick={handleSubmit}
                        disabled={loading}
                        className="logout-btn-logout"
                    >
                        {loading ? "Déconnexion..." : "Se déconnecter"}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Logout;
