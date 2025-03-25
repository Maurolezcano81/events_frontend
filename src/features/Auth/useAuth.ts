
import { useMutation } from '@tanstack/react-query';
import { AuthService } from './auth.service';
import { useAuthStore } from '../../stores/AuthStore';
import { Error } from '../../TypesGlobals/Error';
import { Login, Register, User } from '../../TypesGlobals/User.type';
import { useNavigate } from 'react-router-dom';

export const useLogin = () => {

    const { setUser } = useAuthStore();

    const navigate = useNavigate();

    const mutation = useMutation<User, Error, Login>({
        mutationFn: AuthService.login,
        onSuccess: (data) => {
            const userData = data;
            setUser(userData);
            setTimeout(() => {
                navigate('/')
            }, 2000)
        },

    })

    return mutation

}

export const useRegister = () => {

    const navigate = useNavigate();


    const mutation = useMutation<User, Error, Register>({
        mutationFn: AuthService.register,
        onSuccess: () => {
            setTimeout(() => {
                navigate('/iniciar-sesion')
            }, 2000)
        }
    })

    return mutation
}