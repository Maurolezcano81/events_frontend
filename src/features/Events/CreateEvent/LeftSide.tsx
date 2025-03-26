import { InputText } from "primereact/inputtext"
import ErrorTextLabel from "../../../components/message/ErrorTextLabel"
import { useFormContext } from "react-hook-form";
import { EventCreateType } from "../Events.schema";
import { SelectButton } from "primereact/selectbutton";
import { useState } from "react";
import { Calendar } from "primereact/calendar";
import { Nullable } from "primereact/ts-helpers";



const LeftSide: React.FC = () => {

    const { register, setValue, formState: { errors } } = useFormContext<EventCreateType>();

    const [selectedPrivacity, setSelectedPrivacity] = useState<string | null>(null)
    const [selectedDate, setSelectedDate] = useState<Nullable<Date>>(null)

    const optionsPrivacity = ["Publico", "Privado"]

    return (
        <div className="flex flex-col gap-2 grow-1">

            <div className="">
                <div className="flex flex-col w-full gap-2">
                    <label
                        htmlFor="">Privacidad del evento</label>

                    <SelectButton
                        className="w-full"
                        pt={{
                            root: { className: "flex" },
                            button: { className: "w-[100%]" },
                            label: { className: "w-[100%]" }
                        }}
                        options={optionsPrivacity}
                        value={selectedPrivacity}
                        onChange={(e) => {
                            setSelectedPrivacity(e.value);
                            setValue("privacidad_evento", e.value);
                        }}
                    />

                </div>

                {errors && errors.privacidad_evento && (
                    <ErrorTextLabel
                        message={errors.privacidad_evento.message!}
                    />
                )}

            </div>

            <div className="">
                <div className="">
                    <label
                        htmlFor="">Nombre del evento</label>
                    <InputText
                        className="w-full my-2"
                        placeholder="Ingrese un nombre"
                        invalid={!!errors.nombre?.message}
                        {...register('nombre')}
                    />
                </div>

                {errors && errors.nombre && (
                    <ErrorTextLabel
                        message={errors.nombre.message!}
                    />
                )}

            </div>

            <div className="">
                <div className="">
                    <label
                        htmlFor="">Lugar</label>

                    <InputText
                        className="w-full my-2"
                        placeholder="Ingrese el lugar"
                        invalid={!!errors.lugar?.message}
                        {...register('lugar')}
                    />

                </div>

                {errors && errors.lugar && (
                    <ErrorTextLabel
                        message={errors.lugar.message!}
                    />
                )}

            </div>

            <div className="justify-start">
                <div className="flex flex-col gap-2">
                    <label
                        htmlFor="">Fecha y hora</label>

                    <Calendar
                        className="w-full"
                        invalid={!!errors.fecha_y_hora?.message}
                        pt={{
                            root: {
                                className: "w-full"
                            },
                            input: {
                                className: "w-full"
                            }
                        }}
                        {...register('fecha_y_hora')}
                        value={selectedDate}
                        placeholder="Seleccione una fecha"
                        showTime
                        hourFormat="24"
                    />

                </div>

                {errors && errors.fecha_y_hora && (
                    <ErrorTextLabel
                        message={errors.fecha_y_hora.message!}
                    />
                )}

            </div>

            <div className="">
                <div className="">
                    <label
                        htmlFor="">Descripción</label>

                    <InputText
                        className="w-full my-2"
                        placeholder="Ingrese una breve descripción"
                        invalid={!!errors.descripcion?.message}
                        {...register('descripcion')}
                    />

                </div>

                {errors && errors.descripcion && (
                    <ErrorTextLabel
                        message={errors.descripcion.message!}
                    />
                )}

            </div>

            <div className="">
                <div className="">
                    <label
                        htmlFor="">Anfitrion</label>

                    <InputText
                        className="w-full my-2"
                        placeholder="Nombre del anfitrion"
                        invalid={!!errors.anfitrion?.message}
                        {...register('anfitrion')}
                    />

                </div>

                {errors && errors.anfitrion && (
                    <ErrorTextLabel
                        message={errors.anfitrion.message!}
                    />
                )}

            </div>

        </div>
    )
}

export default LeftSide