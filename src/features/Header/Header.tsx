import { useLocation, useNavigate } from "react-router-dom";
import HeaderButton from "../../components/Buttons/HeaderButton";
import { useEffect, useState } from "react";
import { ArrowBigLeft, ArrowDownLeftIcon, ArrowLeftIcon, ArrowLeftSquareIcon } from "lucide-react";

const Header = () => {

    const location = useLocation()
    const navigate = useNavigate()
    const [canChangeToBackArrow, setCanChangeToBackArrow] = useState<boolean>(false)


    useEffect(() => {
        if (location.pathname.includes("/evento/")) {
            setCanChangeToBackArrow(true)
        } else {
            setCanChangeToBackArrow(false)
        }
    }, [location])

    return (
        <header
            className="flex justify-between h-full mb-4 bg-neutral-50 md:32"
        >
            <nav className="flex items-center w-full shadow-md h-22">
                {canChangeToBackArrow ? (
                    <HeaderButton
                        text="Volver"
                        redirectTo="/"
                    >
                        <ArrowLeftIcon />
                    </HeaderButton>
                )
                    :
                    (
                        <HeaderButton
                            text={"Mis Eventos"}
                            onClick={() => console.log("Click")}
                            redirectTo="/"
                        />
                    )
                }

                <HeaderButton
                    text={"Crear Evento"}
                    onClick={() => console.log("Click")}
                    redirectTo="/crear_evento"
                />

            </nav>


        </header>
    )
}

export default Header;