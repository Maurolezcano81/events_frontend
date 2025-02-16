import { Link, useLocation } from "react-router-dom";
import { HeaderButtonTypes } from "./ButtonTypes";
import { useEffect, useState } from "react";

const HeaderButton: React.FC<HeaderButtonTypes> = ({
    text,
    redirectTo,
    children
}) => {

    const [activeRoute, setActiveRoute] = useState<boolean>(false);

    const location = useLocation();

    useEffect(() => {
        const path = location.pathname;
        if (path === redirectTo) {
            setActiveRoute(true);
        } else {
            setActiveRoute(false);
        }
    }, [location.pathname, redirectTo]);

    return (
        <Link
            className={`font-semibold transition-colors duration-200 p-8 hover:cursor-pointer ${activeRoute ? "text-gray-50 bg-zinc-700" : "hover:bg-zinc-400 hover:text-gray-50 text-gray-400"} grow-1 text-center md:grow-0 flex gap-1 items-center`}
           to={redirectTo}
        >
            {children}
            {text}
        </Link>
    );
}

export default HeaderButton;
