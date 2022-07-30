import { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios"
import { useState } from "react";
import { notificationErrorV1 } from "../utils/notifications/notifications.util";

export const usePostAxios = <T=any,R=any>(
    api: AxiosInstance,
    conf?: {
        messageOnError: boolean
    }
) => {
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<AxiosError | null>(null);
    const [result, setResult] = useState<AxiosResponse<R> | null>(null);

    const reset = () => {
        setError(null);
        setResult(null);
        setLoading(false);
    }

    const dispatch = (    
        endpoint: string,
        data: T,
        options: AxiosRequestConfig,
    ) => {
        setError(null);
        setResult(null);
        setLoading(true);
        api.post<R>(endpoint, data, options)
        .then((r) => {
            setResult(r);
            setLoading(false);
        })
        .catch(e => {
            if(e instanceof AxiosError) {
                setError(e)
                if(conf?.messageOnError){
                    notificationErrorV1(e.response?.data.error, 2.1);
                }
            }else{
                notificationErrorV1('Error', 2.1);
            }
            setResult(null);
            setLoading(false);
        })
    }

    return {
        execute: dispatch,
        result,
        loading,
        error,
        reset
    }
}