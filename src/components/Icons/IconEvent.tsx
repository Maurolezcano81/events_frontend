import React from "react";

interface IconEventProps {
    children: React.ReactNode,
    text: string
}

const IconEvent: React.FC<IconEventProps> = ({
    children,
    text
}) => {
    return (
        <div
            className="flex items-center gap-2 text-zinc-400"
        >
            {children}
            <p>{text}</p>
        </div>
    )
}

export default IconEvent;