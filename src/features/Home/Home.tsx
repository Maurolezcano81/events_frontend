import { Outlet } from "react-router-dom";
import Header from "../Header/Header";

const Home = () => {

    return (
        <div className="bg-gray-200 min-h-[100vh] flex flex-col items-center "
        >

            <div className="w-full md:my-14 md:w-[80%] lg:w-1/2">
                <Header />

                <main
                    className="bg-zinc-50 shadow-md min-h-[85vh] md:min-h-[70vh] p-2">
                    <Outlet />
                </main>
            </div>

        </div>
    )
}


export default Home;