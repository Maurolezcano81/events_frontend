import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import EventCreateSchema, { EventCreateType } from "../Events.schema";
import LeftSide from "./LeftSide";
import RightSide from "./RightSide";
import ElegantTheme from "../../../components/Ticket/ElegantTheme";
import React from 'react';

const CreateEvent = () => {

    const clonedChildren = React.cloneElement(<ElegantTheme />, { textColor: "#c9a55c" });


    const methods = useForm({
        resolver: zodResolver(EventCreateSchema),
        mode: "all",
        defaultValues: {
            fondo_color: "#e6eef4",
            texto_color: "#c9a55c",
            nombre: "Nombre del Evento",
            descripcion: "Una celebración especial",
            lugar: "Lugar del Evento",
            fecha_y_hora: new Date(),
            ticket_fk: {
                name: "Elegante",
                children: clonedChildren
            },
            host_fk: "Anfitrión",
        }
    })



    const onSubmit = (data: EventCreateType) => {
        console.log(data);
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




            </form>
        </FormProvider>
    )
}

export default CreateEvent;