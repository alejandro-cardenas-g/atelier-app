import { RuleObject } from "antd/lib/form";
import * as yup from 'yup';

export const validateEmail = async(_: RuleObject, value: string):Promise<any> => {
    
    const schemaEmail = yup.object().shape({
        email: yup.string()
            .email('Ingrese una correo válido')
    });

    return await schemaEmail.validate({email: value});

}