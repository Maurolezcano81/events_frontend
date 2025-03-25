import { endpointsUrls } from '../../constants.ts'
import { Login, Register } from '../../TypesGlobals/User.type.ts'


export const AuthService = {

    async login(data: Login) {
        const response = await fetch(`${endpointsUrls.login}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data),
        });

        if (!response.ok) {
            const errorData = await response.json();

            throw errorData;
        }

        const dataFetch = await response.json()

        return dataFetch.user;
    },

    async register(data: Register) {
        const response = await fetch(`${endpointsUrls.register}`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })

        if (!response.ok) {
            const errorData = await response.json();
            throw errorData;
        }

        const dataInJson = await response.json()

        return dataInJson;

    }

}


