import TicketInput from "./TicketInput";

const RightSide: React.FC = () => {

    return (
        <div
            className="flex flex-col gap-2 grow-1"
        >
            <div className="flex flex-col justify-end w-full gap-4">




                <TicketInput
                />

            </div>
        </div>
    )
}

export default RightSide