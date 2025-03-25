import { getDate, getHours } from "../../utils/DateFormatter";
import { useFormContext } from "react-hook-form";

interface TextColorProps {
    textColor?: string
}

const ElegantTheme: React.FC<TextColorProps> = ({
    textColor
}) => {

    const { watch } = useFormContext();


    const name = watch('nombre')
    const description = watch('descripcion')
    const location = watch('lugar')
    const date = getDate(watch('fecha_y_hora'))
    const time = getHours(watch('fecha_y_hora'))
    const host = watch('host_fk')

    return (
        <div
        className="p-2"
            style={{
                color: `#${textColor}`
            }}
        >
            <div className="mt-8 space-y-1 text-center"

            >
                <div className="text-xs tracking-widest">CORDIALMENTE INVITA</div>
            </div>

            <div className="flex flex-col justify-center flex-1 space-y-6 text-center">
                <h1 className="text-4xl font-light tracking-widest">{name}</h1>
                <div className="text-sm italic">{description}</div>
                <div className="w-16 h-[1px] mx-auto my-4" style={{ backgroundColor: `#${textColor}` }}></div>
                <div className="text-lg">{date}</div>
                <div className="text-lg">{time}</div>
            </div>

            <div className="mb-8 space-y-2 text-center">
                <div className="text-sm tracking-widest uppercase">{location}</div>
                <div className="text-xs italic">Organizado por {host}</div>
            </div>
        </div>
    );
};

export default ElegantTheme;
