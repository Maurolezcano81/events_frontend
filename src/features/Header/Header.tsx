import HeaderButton from "../../components/Buttons/HeaderButton";

const Header = () => {

    return (
        <header
            className="flex justify-between h-full mb-4 bg-neutral-50 md:32"
        >
            <nav className="flex items-center w-full shadow-md h-22">
                <HeaderButton
                    text={"Mis Eventos"}
                    onClick={() => console.log("Click")}
                    redirectTo="/mis_eventos"
                />

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