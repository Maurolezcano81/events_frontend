import React from "react";
import { HeaderButtonTypes } from "./ButtonTypes";
import { Link } from "react-router-dom";


const CardButton: React.FC<HeaderButtonTypes> = ({
    text,
    redirectTo
}) => {

    return (
        <Link
            className="px-6 py-2 bg-zinc-700 text-gray-50"
            to={redirectTo}
        >
            {text}
        </Link>
    )
}

export default CardButton;