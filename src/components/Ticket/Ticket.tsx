import React, { ReactElement } from "react";
import { useFormContext } from "react-hook-form";

interface ChildrenProp {
    children: ReactElement<{ textColor: string }>;
}

const TicketTemplate: React.FC<ChildrenProp> = ({
    children
}) => {

    const { watch } = useFormContext();


    const bgColor = watch('fondo_color')
    const textColor = watch('texto_color')

    const clonedChildren = React.cloneElement(children, { textColor });


    return (
        <>
            <h4 className="mt-4 font-semibold text-gray-400">Previsualización</h4>

            <div
                className={`flex flex-col items-center justify-center relative overflow-hidden transition-all duration-300`}
                style={{
                    backgroundColor: `#${bgColor}`
                }}
            >
                {clonedChildren}
            </div>
        </>
    );
};

export default TicketTemplate;
