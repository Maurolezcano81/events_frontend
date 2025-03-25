import CardButton from "../../../components/Buttons/CardButton";
import IconEvent from "../../../components/Icons/IconEvent";
import { dayToYearAndHourToMinute } from "../../../utils/DateFormatter";
import { CardEventProps } from "../Events.types";
import { MapPin, CalendarClock, UsersRound } from 'lucide-react'

const CardEvent: React.FC<CardEventProps> = ({
    event
}) => {

    return (
        <ol
            key={event.id}
            className="flex flex-col items-start gap-4 p-6 shadow-md"
        >
            <div
                className="flex flex-wrap gap-12"
            >

                <IconEvent
                    text={dayToYearAndHourToMinute(event.fecha_y_hora)}
                >
                    <CalendarClock />
                </IconEvent>

                <IconEvent
                    text={event.lugar}
                >
                    <MapPin />
                </IconEvent>

            </div>


            <p
                className="h-10 overflow-hidden font-semibold"
            >{event.nombre}</p>
            
            <p
                className="h-[5ch] overflow-hidden"
            >{event.descripcion}</p>

            <div>
                <IconEvent
                    text={"10"}
                >
                    <UsersRound />
                </IconEvent>
            </div>

            <div className="flex justify-end w-full">
                <CardButton
                    redirectTo={`/evento/${event.id}`}
                    text={"Ver más"}
                />
            </div>
        </ol >
    )
}

export default CardEvent;
