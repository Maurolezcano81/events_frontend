import React from "react";



interface ErrorTextLabelProps {
    message: string;
}

const ErrorTextLabel: React.FC<ErrorTextLabelProps> = ({
    message
}) => {

    return (
        <p className="text-sm text-red-500">
            {message}
        </p>
    )
}

export default ErrorTextLabel;