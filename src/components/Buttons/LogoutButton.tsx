import React from "react"
import { useAuthStore } from "../../stores/AuthStore"
import { useNavigate } from "react-router-dom"

const LogoutButton: React.FC = () => {
    const { clearUser } = useAuthStore()
    const navigate = useNavigate();

    const handleLogout = () => {

        clearUser();

        setTimeout(() => {
            navigate('/iniciar-sesion')
        }, 0)
    }

    return (
        <button
            className="px-4 py-4 font-semibold bg-red-600 md:px-8 min-h-12 text-gray-50"
            onClick={handleLogout}
        >
            Salir
        </button>
    )
}

export default LogoutButton