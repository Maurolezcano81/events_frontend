import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useEvents } from "../useEvents";
import Spinner from "../../../components/Spinner/Spinner";
import IconEvent from "../../../components/Icons/IconEvent";
import { dayToYearAndHourToMinute } from "../../../utils/DateFormatter";
import { CalendarClock, Eye, EyeClosed, EyeClosedIcon, EyeOff, Icon, LucideEye, MapPin } from "lucide-react";

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
                        <div className="flex flex-col gap-4 p-4">
                            <h2
                                className="text-2xl font-semibold text-zinc-700"
                            >
                                {event.nombre}
                            </h2>


                            <div className="flex flex-wrap gap-4">
                                <IconEvent text={dayToYearAndHourToMinute(event.fecha_y_hora)}>
                                    <CalendarClock />
                                </IconEvent>

                                <IconEvent text={event.lugar}>
                                    <MapPin />
                                </IconEvent>

                                <IconEvent text={event.privacidad_evento} >
                                    {event.privacidad_evento === "Público" && (
                                        <LucideEye />
                                    )}

                                    {event.privacidad_evento === "Privado" && (
                                        <EyeOff />
                                    )}
                                </IconEvent>
                            </div>
                        </div>
                    )
            }

        </>
    )
}

export default SingleEvent;