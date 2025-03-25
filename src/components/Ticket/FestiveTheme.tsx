import { useFormContext } from "react-hook-form";
import { getDate, getHours } from "../../utils/DateFormatter";

interface TextColorProps {
    textColor?: string
}

const FestiveTheme: React.FC<TextColorProps> = ({
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
            <div className="absolute top-0 left-0 flex items-center justify-center w-full h-20"
            >
                <div className="w-full h-[1px] opacity-30" style={{ backgroundColor: `#${textColor}` }}></div>
            </div>

            <div className="absolute bottom-0 left-0 flex items-center justify-center w-full h-20">
                <div className="w-full h-[1px] opacity-30" style={{ backgroundColor: `#${textColor}` }}></div>
            </div>

            <div className="absolute top-0 left-0 flex items-center justify-center w-20 h-full">
                <div className="h-full w-[1px] opacity-30" style={{ backgroundColor: `#${textColor}` }}></div>
            </div>

            <div className="absolute top-0 right-0 flex items-center justify-center w-20 h-full">
                <div className="h-full w-[1px] opacity-30" style={{ backgroundColor: `#${textColor}` }}></div>
            </div>

            <div className="text-center space-y-8 max-w-[320px] z-10">
                <div className="space-y-4">
                    <div className="text-sm tracking-widest uppercase opacity-70">¡Celebremos!</div>
                    <h1 className="text-2xl font-bold">{name}</h1>
                    <p className="mt-2 text-sm opacity-80">{description}</p>
                </div>

                <div className="px-6 py-4 border rounded-lg" style={{ borderColor: `#${textColor}` }}>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                            <div className="text-xs tracking-wider uppercase opacity-70">Fecha</div>
                            <div>{date}</div>
                        </div>
                        <div>
                            <div className="text-xs tracking-wider uppercase opacity-70">Hora</div>
                            <div>{time}</div>
                        </div>
                        <div>
                            <div className="text-xs tracking-wider uppercase opacity-70">Lugar</div>
                            <div>{location}</div>
                        </div>
                        <div>
                            <div className="text-xs tracking-wider uppercase opacity-70">Anfitrión</div>
                            <div>{host}</div>
                        </div>
                    </div>
                </div>

                <div className="text-sm tracking-widest uppercase">¡Te esperamos!</div>
            </div>

        </div>
    )
}

export default FestiveTheme;