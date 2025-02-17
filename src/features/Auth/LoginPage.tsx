import { Ticket } from "lucide-react";
import { InputText } from "primereact/inputtext";
import React from "react";

import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { LoginForm, loginSchema } from "./auth.schemas";
import { Password } from "primereact/password";
import { Button } from "primereact/button";

const LoginPage: React.FC = () => {

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
        control
    } = useForm<LoginForm>({
        resolver: zodResolver(loginSchema),
        mode: "all"
    })

    const handleFetchLogin = (data: LoginForm) => {
        console.log(data);
    }

    return (
        <div
            className="bg-gray-200 min-h-[100vh] flex items-center justify-center"
        >

            <form
                className="w-[90%] min-h-[70vh] rounded-md shadow-md mt-10 bg-gray-50 py-4 px-4 flex flex-col justify-between md:w-[70%] lg:w-[40%]"
                onSubmit={handleSubmit(handleFetchLogin)}
            >


                <div className="flex items-center justify-between px-4 py-2 ">
                    <div
                        className="rounded-full w-fit bg-zinc-700">
                        <Ticket
                            className="w-12 h-12 p-2 text-gray-50"
                        />
                    </div>

                    <h1 className="text-2xl font-medium text-zinc-700">
                        Inicia Sesión!
                    </h1>
                </div>


                <div
                    className="flex flex-col gap-6"
                >
                    <div className="flex flex-col gap-2">

                        <label htmlFor="email">Correo Eléctronico</label>
                        <InputText
                            placeholder="ejemplo@ejemplo.com"
                            aria-describedby="email-help"
                            id="email"
                            {...register('email')}
                            invalid={errors.email ? true : false}
                        />

                        <small
                            id="email-help"
                            className={`${errors.email
                                ? "text-red-600"
                                : watch("email")
                                    ? "text-green-700"
                                    : "text-black"
                                }`}
                        >
                            {
                                errors.email ? errors.email.message : "Ingrese su direccion de correo electronico."
                            }
                        </small>
                    </div>

                    <div className="flex flex-col gap-2">
                        <label htmlFor="password">
                            Contraseña
                        </label>
                        <Controller
                            name="password"
                            control={control}  // 'control' proviene de 'useForm'
                            render={({ field }) => (
                                <Password
                                    {...field}
                                    placeholder="Ingrese su clave"
                                    toggleMask
                                    pt={{
                                        iconField: {
                                            root: { style: { width: "100%" } },
                                        },
                                        input: { style: { width: "100%" } },
                                        root: { style: { width: "100%" } },
                                    }}
                                    invalid={!!errors.password}
                                />
                            )}
                        />
                        <small className={errors.password ? "text-red-600" : ""}>
                            {errors.password ? errors.password.message : "Ingrese su contraseña."}
                        </small>

                    </div>

                </div>

                <div className="flex justify-end">
                    <Button
                        className="w-fit"

                        type="submit"
                        label="Iniciar"
                        raised
                    />
                </div>
            </form>

        </div>
    )
}


export default LoginPage;