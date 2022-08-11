import { AxiosError } from "axios";

export const reduxRejectedHandler = (error: any) => {
    let payload: {code: number, message: string};
    if(error instanceof AxiosError) payload = {
        code: error.response?.status || 400,
        message: error.response?.data.message
    }
    else payload = {
            code: 400,
            message: 'Error'
        }
    return payload;
}