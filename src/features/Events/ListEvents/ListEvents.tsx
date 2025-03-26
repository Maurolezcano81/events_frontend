import { lazy, Suspense } from "react";
import { useEvents } from "../useEvents";
import Spinner from "../../../components/Spinner/Spinner";
import { useAuthStore } from "../../../stores/AuthStore";
import { Divider } from "primereact/divider";
import Unauthorized from "../../../components/Unauthorized/Unauthorized";

const ListEvents = () => {

    const { events, loading, error } = useEvents();
    const { user } = useAuthStore();

    console.log(events)
    const Card = lazy(() => import('./CardEvent'));

    return (
        <Suspense fallback={<Spinner />}>
            {loading ?
                (
                    <Spinner />
                )
                :
                error ? (
                    <p>Error...</p>
                )

                    :
                    (
                        user ? (
                            <div className="flex flex-col justify-center">
                                <p className="pl-6 text-lg font-bold">Hola, {user?.nombre} 👋 </p>
                                <Divider />

                                {events && events.usuario.eventos.length > 0 && events.usuario.eventos.map((event) => (
                                    <Card
                                        key={event.id}
                                        event={event}
                                    />
                                ))}
                            </div>
                        ) : (
                            <Unauthorized />
                        )
                    )
            }


        </Suspense>
    );
}

export default ListEvents;
