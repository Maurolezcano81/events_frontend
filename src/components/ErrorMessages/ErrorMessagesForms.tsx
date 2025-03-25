import React from "react";
import { ErrorMessageProps } from "./ErrorMessages.types";


const ErrorMessagesFroms: React.FC<ErrorMessageProps> = ({ errors }) => {
    return (
        <div>
            {errors &&
                Object.entries(errors).map(([field, messages]) => (
                    <div key={field}>
                        <small>
                            {messages.map((msg, index) => (
                                <li key={index}>{msg}</li>
                            ))}
                        </small>
                    </div>
                ))}
        </div>
    );
};

export default ErrorMessagesFroms;