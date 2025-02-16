import { lazy, Suspense } from "react";
import { useEvents } from "../useEvents";
import Spinner from "../../../components/Spinner/Spinner";

const ListEvents = () => {

    const { events, loading, error } = useEvents();
    
    const Card = lazy(() => import('./CardEvent'));

    return (
        <Suspense fallback={<Spinner />}>

            {
                events && events.length > 0 && events.map((event) => (
                    <Card
                        event={event}
                    />
                ))
            }

        </Suspense>
    )
}

export default ListEvents;