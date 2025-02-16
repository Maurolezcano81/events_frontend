import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useEvents } from "../useEvents";
import Spinner from "../../../components/Spinner/Spinner";

const SingleEvent: React.FC = () => {

    const { id } = useParams()
    const { event, fetchEvent, loading, error } = useEvents();

    useEffect(() => {
        fetchEvent(Number(id))
    }, [id])

    console.log(event)
    return (
        <>
            {loading ?
                (<Spinner />)
                :
                error ?
                    (
                        <> error </>
                    )
                    :
                    (
                        <h1>asd</h1>
                    )
            }

        </>
    )
}

export default SingleEvent;