import React from "react";
import { HeaderButtonTypes } from "./ButtonTypes";
import { Link } from "react-router-dom";


const CardButton: React.FC<HeaderButtonTypes> = ({
    text,
    redirectTo
}) => {

    return (
        <Link
            className="px-6 py-2 transition-all duration-100 border bg-zinc-700 text-gray-50 hover:bg-gray-50 hover:text-zinc-700 hover:border border-zinc-700"
            to={redirectTo}
        >
            {text}
        </Link>
    )
}

export default CardButton;