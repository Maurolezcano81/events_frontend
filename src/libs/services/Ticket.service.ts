import { endpointsUrls } from "../../constants"
import { Ticket } from "../../TypesGlobals/Ticket.type";



const token = `asd`

export const GetTickets = async (): Promise<Ticket[]> => {
    const response = await fetch(`${endpointsUrls.getTickets}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        }
    });

    const responseInJson = await response.json();

    if (!response.ok) {
        throw new Error(responseInJson.message || "Error al obtener los tickets");
    }

    return responseInJson;
};