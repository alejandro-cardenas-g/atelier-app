import jwtDecode from "jwt-decode";

export const validateJwt = <T>(token: string): Promise<T> => {
    return new Promise((resolve, reject) => {
        const payload = jwtDecode<T>(token);
        resolve(payload);
    })
}
