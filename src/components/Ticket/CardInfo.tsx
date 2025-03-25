interface ClassicTicketProps {
    bgColor: string;
    textColor: string;
    name: string;
    description: string;
    location: string;
    date: string;
    time: string;
    user: string;
}

const ClassicTicket: React.FC<ClassicTicketProps> = ({
    bgColor,
    textColor,
    name,
    description,
    location,
    date,
    time,
    user
}) => {
    return (
        <div
            style={{
                backgroundColor: bgColor,
                color: textColor
            }}
            className={`p-4 border-dashed border-2 rounded-lg text-center w-72`}>
            <h2 className="text-xl font-bold">{name}</h2>
            <p className="text-sm">{description}</p>
            <p className="text-xs">Lugar: {location}</p>
            <p className="text-xs">Fecha: {date}</p>
            <p className="text-xs">Hora: {time}</p>
            <p className="text-xs">Invitado por: {user}</p>
        </div>
    );
};

export default ClassicTicket;
