import { Ticket } from "lucide-react";
import { InputText } from "primereact/inputtext";
import React, { useEffect, useRef } from "react";

import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { LoginForm, loginSchema } from "./auth.schemas";
import { Password } from "primereact/password";
import { Button } from "primereact/button";
import { useLogin } from "./useAuth.ts";
import { Toast } from "primereact/toast";
import ErrorMessagesFroms from "../../components/ErrorMessages/ErrorMessagesForms.tsx";
import { Link } from "react-router-dom";
const LoginPage: React.FC = () => {
    const toast = useRef<Toast>(null);


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

    const { mutate: login, isSuccess, isPending, isError, error } = useLogin()


    const handleFetchLogin = (data: LoginForm) => {
        login(data)
    }

    useEffect(() => {
        if (isError) {
            toast.current?.show({
                severity: "error",
                summary: error.message,
                detail: "Por favor verifica la informacion.",
                life: 3000
            })
        }
        if (isSuccess) {
            toast.current?.show({
                severity: "success",
                summary: "Inicio de sesión exitoso, redirigiendo...",
                detail: "Bienvenido a la aplicación",
                life: 3000
            })
        }
    }, [isSuccess, isError])

    return (
        <div
            className="bg-gray-200 min-h-[100vh] flex items-center justify-center"
        >

            <Toast
                position="top-right"
                ref={toast}

                className="center max-w-[50%] md:right-0"
            />

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
                            className={`text-gray-600 ${errors.email
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
                        <label htmlFor="contrasena">
                            Contraseña
                        </label>
                        <Controller
                            name="contrasena"
                            control={control}
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
                                    invalid={!!errors.contrasena}
                                    feedback={false}
                                />
                            )}
                        />
                        <small className={` text-gray-600 ${errors.contrasena ? "text-red-600" : ""}`}>
                            {errors.contrasena ? errors.contrasena.message : "Ingrese su contraseña."}
                        </small>

                    </div>

                    {isError && (
                        <div className="p-4 bg-red-100 rounded-md">
                            {isError && (
                                error.message && (
                                    <p className="text-red-600">
                                        {error.message}
                                    </p>
                                )
                            )
                            }

                            {error.errors && (
                                <ErrorMessagesFroms
                                    errors={error?.errors}
                                />

                            )
                            }


                        </div>
                    )}


                </div>



                <div className="flex items-center w-full gap-2">
                    <Link
                        to="/registrarse"
                        className="font-light text-gray-500 grow-1 text-md"
                    >
                        ¿No tienes una cuenta? <span className="font-semibold underline">Registrate</span>
                    </Link>

                    <Button
                        className="grow-1"
                        type="submit"
                        label="Iniciar"
                        raised
                        loading={isPending}
                        disabled={Object.keys(errors).length > 0}
                    />
                </div>
            </form>

        </div>
    )
}


export default LoginPage;