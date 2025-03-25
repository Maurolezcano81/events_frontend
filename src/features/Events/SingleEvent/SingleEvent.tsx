import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useEvents } from "../useEvents";
import Spinner from "../../../components/Spinner/Spinner";
import IconEvent from "../../../components/Icons/IconEvent";
import { dayToYearAndHourToMinute } from "../../../utils/DateFormatter";
import { CalendarClock, EyeOff, LucideEye, MapPin } from "lucide-react";
import { ScrollPanel } from "primereact/scrollpanel";
import { useAuthStore } from "../../../stores/AuthStore";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

const SingleEvent: React.FC = () => {

    const { id } = useParams()
    const { event, fetchEvent, loading, error } = useEvents();
    const { user } = useAuthStore();

    useEffect(() => {
        fetchEvent(Number(id))
    }, [id])

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
                        event && (
                            <div className="flex flex-col justify-between min-h-[70vh] gap-4 p-4">
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

                                <div>
                                    <h4 className="text-zinc-400">Descripción del Evento: </h4>
                                    <ScrollPanel
                                        className="pt-8 max-h-[200px]"
                                    >
                                        <p>
                                            {event.descripcion}
                                        </p>
                                    </ScrollPanel>
                                </div>

                                {
                                    event.usuario?.id === user?.id && (
                                        <div>
                                            <h4>Invitados</h4>

                                            <DataTable
                                                value={event.invitados}
                                                tableStyle={{ minWidth: '50rem' }}
                                                showGridlines
                                            >
                                                <Column field="nombre" header="Nombre" />
                                                <Column field="email" header="Correo Electronico" />

                                            </DataTable>
                                        </div>
                                    )
                                }
                                <div>

                                </div>
                            </div>
                        )
                    )
            }

        </>
    )
}

export default SingleEvent;