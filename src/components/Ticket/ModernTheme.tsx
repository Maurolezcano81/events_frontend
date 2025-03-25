import { getDate, getHours } from "../../utils/DateFormatter";
import { useFormContext } from "react-hook-form";

interface TextColorProps {
    textColor?: string
}

const ModernTheme: React.FC<TextColorProps> = ({
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
            <div className="pb-4 mb-6 border-b" style={{ borderColor: `#${textColor}` }}>
                <h1 className="text-3xl font-bold">{name}</h1>
                <p className="mt-2 opacity-80">{description}</p>
            </div>

            <div className="flex flex-col justify-center flex-1">
                <div className="grid grid-cols-2 gap-y-8 gap-x-4">
                    <div>
                        <div className="text-sm tracking-wider uppercase opacity-70">Fecha</div>
                        <div className="mt-1 text-xl">{date}</div>
                    </div>
                    <div>
                        <div className="text-sm tracking-wider uppercase opacity-70">Hora</div>
                        <div className="mt-1 text-xl">{time}</div>
                    </div>
                    <div>
                        <div className="text-sm tracking-wider uppercase opacity-70">Lugar</div>
                        <div className="mt-1 text-xl">{location}</div>
                    </div>
                    <div>
                        <div className="text-sm tracking-wider uppercase opacity-70">Anfitrión</div>
                        <div className="mt-1 text-xl">{host}</div>
                    </div>
                </div>
            </div>

            <div className="pt-6 mt-6 text-center border-t" style={{ borderColor: `#${textColor}` }}>
                <div className="text-sm tracking-widest uppercase">Esperamos contar con tu presencia</div>
            </div>
        </div>
    );
};

export default ModernTheme;
