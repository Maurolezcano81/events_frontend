import { zodResolver } from "@hookform/resolvers/zod";
import { Ticket } from "lucide-react";
import { InputText } from "primereact/inputtext";
import { Controller, useForm } from "react-hook-form";
import { registerSchema, registerSchemaType } from "./auth.schemas";
import ErrorTextLabel from "../../components/message/ErrorTextLabel";
import { Password } from "primereact/password";
import { Link } from "react-router-dom";
import { Button } from "primereact/button";
import { useRegister } from "./useAuth";
import { useEffect, useRef } from "react";
import { Toast } from "primereact/toast";
import ErrorMessagesFroms from "../../components/ErrorMessages/ErrorMessagesForms";


const
    RegisterPage = () => {

        const { mutate: registerHook, isSuccess, isError, error, isPending } = useRegister()

        const toast = useRef<Toast>(null);

        const { register, handleSubmit, control, formState: { errors } } = useForm({
            resolver: zodResolver(registerSchema),
            mode: "all"
        })

        const onSubmit = (data: registerSchemaType) => {
            registerHook(data)
        }

        useEffect(() => {

            if (isError) {
                toast.current?.show({
                    severity: "error",
                    summary: error.message,
                    detail: "Por favor verífica la información.",
                    life: 3000
                })
            }

            if (isSuccess) {
                toast.current?.show({
                    severity: "success",
                    summary: "Registro exitoso, pronto sera redirigido.",
                    detail: "Registrado exitosamente.",
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
                    className="w-[90%] min-h-[70vh] rounded-md shadow-md mt-10 bg-gray-50 py-4 px-4 flex flex-col justify-between md:w-[70%] lg:w-[40%] mb-4"
                    onSubmit={handleSubmit(onSubmit)}
                >


                    <div className="flex items-center justify-between px-4 py-2 ">
                        <div
                            className="rounded-full w-fit bg-zinc-700">
                            <Ticket
                                className="w-12 h-12 p-2 text-gray-50"
                            />
                        </div>

                        <h1 className="text-2xl font-medium text-zinc-700">
                            Registrate ya!
                        </h1>
                    </div>

                    <div
                        className="flex flex-col gap-6 grow-1 mt-18"
                    >
                        <div className="flex flex-col gap-2">

                            <label htmlFor="nombre">Nombre</label>
                            <InputText
                                placeholder="Ingrese su nombre"
                                id="nombre"
                                {...register("nombre")}
                                invalid={!!errors.nombre?.message}
                            />

                            {errors && errors.nombre && (
                                <ErrorTextLabel
                                    message={errors.nombre.message!}
                                />
                            )}

                        </div>

                        <div className="flex flex-col gap-2">

                            <label htmlFor="apellido">Apellido</label>
                            <InputText
                                placeholder="Ingrese su apellido"
                                id="apellido"
                                {...register("apellido")}
                                invalid={!!errors.apellido?.message}
                            />

                            {errors && errors.apellido && (
                                <ErrorTextLabel
                                    message={errors.apellido.message!}
                                />
                            )}

                        </div>

                        <div className="flex flex-col gap-2">

                            <label htmlFor="nombre_usuario">Nombre de usuario</label>
                            <InputText
                                placeholder="Ingrese un nombre de usuario"
                                id="nombre_usuario"
                                {...register("nombre_usuario")}
                                invalid={!!errors.nombre_usuario?.message}

                            />

                            {errors && errors.nombre_usuario && (
                                <ErrorTextLabel
                                    message={errors.nombre_usuario.message!}
                                />
                            )}

                        </div>

                        <div className="flex flex-col gap-2">

                            <label htmlFor="email">Correo electronico</label>
                            <InputText
                                placeholder="Ingrese un correo electronico"
                                id="email"
                                {...register("email")}
                                invalid={!!errors.email?.message}
                            />

                            {errors && errors.email && (
                                <ErrorTextLabel
                                    message={errors.email.message!}
                                />
                            )}

                        </div>

                        <div className="flex flex-col gap-2">

                            <label htmlFor="contrasena">Contraseña</label>
                            <Controller
                                control={control}
                                name="contrasena"
                                render={({ field }) => (
                                    <Password
                                        {...field}
                                        pt={{
                                            iconField: { root: { className: "w-full" } },
                                            input: { className: "w-full" }
                                        }}
                                        toggleMask
                                        placeholder="Ingrese una contraseña"
                                        id="contrasena"
                                        invalid={!!errors.contrasena?.message}
                                        feedback={false}
                                    />

                                )
                                }
                            />

                            {errors && errors.contrasena && (
                                <ErrorTextLabel
                                    message={errors.contrasena.message!}
                                />
                            )}

                        </div>

                        <div className="flex flex-col gap-2">

                            <label htmlFor="contrasena">Confirmar contraseña</label>
                            <Controller
                                control={control}
                                name="repetir_contrasena"
                                render={({ field }) => (
                                    <Password
                                        {...field}
                                        pt={{
                                            iconField: { root: { className: "w-full" } },
                                            input: { className: "w-full" }
                                        }}
                                        toggleMask
                                        placeholder="Ingrese una contraseña"
                                        id="repetir_contrasena"
                                        invalid={!!errors.repetir_contrasena?.message}
                                        feedback={false}

                                    />

                                )
                                }
                            />

                            {errors && errors.repetir_contrasena && (
                                <ErrorTextLabel
                                    message={errors.repetir_contrasena.message!}
                                />
                            )}

                        </div>



                        {isError && (
                            <div className="p-4 bg-red-200 rounded-md">
                                <p className="text-red-600">{error.message}</p>

                                {error && error.errors && (
                                    <ErrorMessagesFroms
                                        errors={error.errors}
                                    />
                                )}

                            </div>
                        )}


                    </div>

                    <div className="flex flex-row-reverse flex-wrap items-center w-full gap-2 mt-8 lg:flex-row-reverse">

                        <Button
                            className="w-fit grow-1"
                            type="submit"
                            label="Registrarse"
                            raised
                            loading={isPending}
                            disabled={Object.keys(errors).length > 0}
                        />

                        <Link
                            to="/iniciar-sesion"
                            className="font-light text-gray-500 text-md grow-1"
                        >
                            ¿Ya tienes una cuenta? <span className="font-semibold underline">Inicia Sesión</span>
                        </Link>
                    </div>
                </form>
            </div>
        )
    }

export default RegisterPage;