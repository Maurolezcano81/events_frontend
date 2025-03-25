import { useQuery } from "@tanstack/react-query"
import { GetTickets } from "./Ticket.service"
import { Ticket } from "../../TypesGlobals/Ticket.type";



export const useGetTickets = () => {

    return useQuery<Ticket[]>({
        queryKey: ["tickets"],
        queryFn: GetTickets
    })

}