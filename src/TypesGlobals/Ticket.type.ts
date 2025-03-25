import { ReactNode } from "react";
import { UseFormWatch } from "react-hook-form";
import { EventCreateType } from "../features/Events/Events.schema";



export interface Ticket {
    name: string,
    children: ReactNode
}

export interface TicketLayoutProps{
    watch: UseFormWatch<EventCreateType>
}