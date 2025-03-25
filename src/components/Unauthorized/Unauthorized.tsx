import { Ban } from "lucide-react";
import React from "react";
import CardButton from "../Buttons/CardButton";

const Unauthorized: React.FC = () => {


    return (
        <div className="flex items-center justify-center gap-4 w-full min-h-[70vh] flex-col">
            <Ban
                className="w-full min-h-[20vh] text-red-300 opacity-50"
            />
            <p className="text-center">Usted no ha iniciado sesión, no tiene permisos para acceder a esta página.</p>
            <CardButton
                text="Iniciar Sesión"
                redirectTo="/iniciar-sesion"
            />
        </div>
    )
}

export default Unauthorized;