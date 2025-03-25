import { getDate, getHours } from "../../utils/DateFormatter";
import { useFormContext } from "react-hook-form";

interface TextColorProps {
    textColor?: string
}

const MinimalistTheme: React.FC<TextColorProps> = ({
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
            <div className="right-0 h-full p-6 text-center "

            >
                <div className="text-xs tracking-widest uppercase">{host} presenta</div>
            </div>

            <div className="text-center space-y-6 max-w-[300px]">
                <h1 className="text-3xl font-light tracking-wide">{name}</h1>
                <p className="text-sm opacity-80">{description}</p>

                <div className="w-12 h-px mx-auto my-8 bg-current opacity-50" />

                <div className="space-y-4">
                    <div>
                        <div className="text-sm tracking-wider uppercase opacity-70">Cuándo</div>
                        <div className="mt-1">
                            {date} · {time}
                        </div>
                    </div>

                    <div>
                        <div className="text-sm tracking-wider uppercase opacity-70">Dónde</div>
                        <div className="mt-1">{location}</div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default MinimalistTheme;
