import { Controller, useFormContext } from "react-hook-form"
import { EventCreateType } from "../Events.schema"
import ErrorTextLabel from "../../../components/message/ErrorTextLabel"
import { Dropdown } from "primereact/dropdown"
import TicketTemplate from "../../../components/Ticket/Ticket"
import ElegantTheme from "../../../components/Ticket/ElegantTheme"
import FestiveTheme from "../../../components/Ticket/FestiveTheme"
import { ColorPicker } from "primereact/colorpicker"
import { Ticket } from "../../../TypesGlobals/Ticket.type"
import MinimalistTheme from "../../../components/Ticket/MinimalistThe"
import ModernTheme from "../../../components/Ticket/ModernTheme"


const type_invitations: Ticket[] = [
    {
        name: "Elegante",
        children: <ElegantTheme />
    },
    {
        name: "Festivo",
        children: <FestiveTheme />
    },
    {
        name: "Minimalista",
        children: <MinimalistTheme />
    },
    {
        name: "Moderno",
        children: <ModernTheme />
    }
]

const TicketInput: React.FC = () => {

    const { control, watch, register, formState: { errors } } = useFormContext<EventCreateType>();

    const selectedTicketName = watch("ticket_fk");

    return (
        <div className="items-center">
            <div className="flex flex-col">
                <label
                    htmlFor="">Típo de Invitación</label>

                <Controller
                    name="ticket_fk"
                    control={control}
                    render={({ field }) => (
                        <Dropdown
                            className="w-full my-2"
                            pt={{
                                root: { className: "!w-[100%]" }
                            }}
                            invalid={!!errors.ticket_fk?.message}
                            options={type_invitations}
                            placeholder="Seleccione una carta"
                            value={field.value}
                            optionLabel="name"
                            onChange={(e) => field.onChange(e.value)}
                        />
                    )}
                />

            </div>

            {errors && errors.ticket_fk && (
                <ErrorTextLabel
                    message={errors.ticket_fk.message!}
                />
            )}

            <div className="">
                <ColorPicker
                    className="my-2 mr-2"
                    {...register('texto_color')}
                    format="hex"
                    defaultColor="#000000"
                />
                <label
                    htmlFor="">Selecciona un color para el texto
                </label>
            </div>

            {errors && errors.texto_color && (
                <ErrorTextLabel
                    message={errors.texto_color.message!}
                />
            )}

            <div className="">
                <ColorPicker
                    className="my-2 mr-2"
                    {...register('fondo_color')}
                    format="hex"
                    defaultColor="#ffffff"
                />
                <label
                    htmlFor="">Selecciona un color para el fondo
                </label>
            </div>

            {errors && errors.fondo_color && (
                <ErrorTextLabel
                    message={errors.fondo_color.message!}
                />
            )}


            {selectedTicketName && selectedTicketName.children && (
                <TicketTemplate>
                    {selectedTicketName.children}
                </TicketTemplate>
            )}


        </div>
    )
}

export default TicketInput