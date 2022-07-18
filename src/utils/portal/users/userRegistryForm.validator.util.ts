import { RuleObject } from "antd/lib/form";
import * as yup from 'yup';
import { PORTAL_LOCALS } from '../../../locales/portal/portal.locals';

const locals = PORTAL_LOCALS['users']['registry']['form'];

export const validateEmail = async(_: RuleObject, value: string):Promise<any> => {
    
    const schemaEmail = yup.object().shape({
        email: yup.string()
            .required(locals['email']['validators']['required'])
            .email(locals['email']['validators']['email'])
    });

    return await schemaEmail.validate({email: value});

}

export const validatePassword = async(_: RuleObject, value: string):Promise<any> => {
    
    const schemaPassword = yup.object().shape({
        password: yup.string()
            .required(locals['password']['validators']['required'])
            .min(8, locals['password']['validators']['min'])
            .matches(
                /^.*(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/
                , locals['password']['validators']['matches'])
    });

    return await schemaPassword.validate({password: value});

}