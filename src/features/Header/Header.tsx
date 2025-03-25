import { useLocation } from "react-router-dom";
import HeaderButton from "../../components/Buttons/HeaderButton";
import { useEffect, useState } from "react";
import { ArrowLeftIcon, EllipsisVertical } from "lucide-react";
import LogoutButton from "../../components/Buttons/LogoutButton";

const Header = () => {

    const location = useLocation()
    const [canChangeToBackArrow, setCanChangeToBackArrow] = useState<boolean>(false)

    useEffect(() => {
        if (location.pathname.includes("/evento/")) {
            setCanChangeToBackArrow(true)
        } else {
            setCanChangeToBackArrow(false)
        }
    }, [location])

    const [canViewOptions, setCanViewOptions] = useState<boolean>(false);

    const handleOptions = () => {
        setCanViewOptions(canViewOptions ? false : true)
    }

    return (
        <header
            className="flex flex-col justify-between h-full mb-4 bg-neutral-50 md:32"
        >
            <nav className="flex items-center justify-between w-full shadow-md h-22">
                <div className="flex">
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
                </div>

                <EllipsisVertical
                    className="items-center text-gray-500 grow-1 md:grow-0 md:w-14"
                    onClick={handleOptions}
                />

            </nav>

            <div className="flex items-center justify-end">
                {
                    canViewOptions && (
                        <LogoutButton
                        />
                    )
                }
            </div>


        </header>
    )
}

export default Header;