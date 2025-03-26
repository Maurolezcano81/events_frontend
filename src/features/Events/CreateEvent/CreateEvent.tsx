import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import EventCreateSchema, { EventCreateType } from "../Events.schema";
import LeftSide from "./LeftSide";
import RightSide from "./RightSide";
import ElegantTheme from "../../../components/Ticket/ElegantTheme";
import React from 'react';
import { Button } from "primereact/button";
import { useAuthStore } from "../../../stores/AuthStore";
import { useCreateEvent } from "../useEvents";
import ErrorMessagesFroms from "../../../components/ErrorMessages/ErrorMessagesForms";
import { yearToDayAndHourToSecond } from "../../../utils/DateFormatter";

const CreateEvent = () => {

    const clonedChildren = React.cloneElement(<ElegantTheme />, { textColor: "#c9a55c" });
    const user = useAuthStore((state) => state.user);

    const { mutate: CreateEventHook, onSuccess, isPending, isError, error } = useCreateEvent()

    const methods = useForm({
        resolver: zodResolver(EventCreateSchema),
        mode: "all",
        defaultValues: {
            fondo_color: "#e6eef4",
            texto_color: "#c9a55c",
            nombre: "Nombre del Evento",
            descripcion: "Una celebración especial",
            privacidad_evento: "Publico",
            lugar: "Lugar del Evento",
            fecha_y_hora: new Date(),
            ticket_fk: {
                name: "Elegante",
                children: clonedChildren
            },
            anfitrion: "Anfitrión",
        }
    })

    const onSubmit = (data: EventCreateType) => {

        const { ticket_fk, ...rest } = data;

        const newData = {
            ...rest,
            tipo_invitacion: ticket_fk.name,
            usuario_fk: user?.id,
            estado_evento: "alta",
            fecha_y_hora: yearToDayAndHourToSecond(data.fecha_y_hora),
            ticket_fk: { name: ticket_fk.name }
        }

        console.log(newData);

        CreateEventHook(newData)
    }


    return (
        <FormProvider {...methods}>
            <form
                onSubmit={methods.handleSubmit(onSubmit)}
                className="items-center justify-center w-full h-full px-4">
                <div
                    className="grow-1 "
                >
                    <h2
                        className="text-xl font-semibold"
                    >
                        Creación de Eventos
                    </h2>

                    <p className="text-sm text-gray-400">
                        Completa el formulario para poder empezar a gestionar tu evento.
                    </p>


                </div>

                <div className="flex flex-col gap-4 my-8 lg:flex-row">

                    <LeftSide
                    />

                    <RightSide
                    />


                </div>

                {isError && error && (
                    <div className="p-2 my-6 text-white bg-red-400 rounded-md">
                        <p>{error.message}</p>
                        <ErrorMessagesFroms
                            errors={error.errors!}
                        />
                    </div>
                )}

                <div className="w-full text-right">
                    <Button
                        type="submit"
                        className="flex items-center justify-center w-full gap-4 border-none md:w-fit bg-neutral-700"
                        loading={isPending}
                        disabled={Object.keys(methods.formState.errors).length > 0}
                    >
                        Crear Evento
                    </Button>

                </div>

            </form>
        </FormProvider>
    )
}

export default CreateEvent;