import { UploadChangeParam, UploadFile } from "antd/lib/upload/interface";
import { DocumentTypeMimeType } from "../../constants/files/mimetypes.constant";
import { notificationErrorV1 } from "../notifications/notifications.util";

export const verifyDocumentTypeAndSize = (
    file: UploadFile,
    types: string[] = DocumentTypeMimeType,
): {
    message: string | null,
    validation: boolean,
} => {
    const result:{
        message: string | null,
        validation: boolean
    } = {
        message: null,
        validation: true
    };
    if(file?.type && file?.size){
        if(!types.includes(file.type)) {
            result.message = 'El tipo del documento no es permitido';
            result.validation = false;
        };
        if(file.size >= 1024*1024*5) {
            result.message = 'El archivo no puede exceder 5MB';
            result.validation = false;
        }
    }else{
        result.message = 'Archivo inválido'
        result.validation = false;
    }
    return result;
}

export const verifyDocumentTypeAndSizeAction = (
    e:UploadChangeParam<UploadFile>
): UploadFile | null => {

    let result: UploadFile | null = null;
    if(e.fileList[0]){
        const file = e.fileList[0];
        const {validation, message} = verifyDocumentTypeAndSize(file);
        result = file;
        if(!validation) {
            notificationErrorV1(message || 'Error', 2.5);
            result = null;
        }
    }else{
        result = null;
    }
    return result;
}

export const verifyDocumentTypePdfAndSizeAction = (
    e:UploadChangeParam<UploadFile>
): UploadFile | null => {

    let result: UploadFile | null = null;
    if(e.fileList[0]){
        const file = e.fileList[0];
        const {validation, message} = verifyDocumentTypeAndSize(file, ['application/pdf']);
        result = file;
        if(!validation) {
            notificationErrorV1(message || 'Error', 2.5);
            result = null;
        }
    }else{
        result = null;
    }
    return result;
}

export const verifyDocumentTypeImageAndSizeAction = (
    e:UploadChangeParam<UploadFile>
): UploadFile | null => {

    let result: UploadFile | null = null;
    if(e.fileList[0]){
        const file = e.fileList[0];
        const {validation, message} = verifyDocumentTypeAndSize(file, ['image/jpeg', 'image/png']);
        result = file;
        if(!validation) {
            let newMessage = message;
            if(message && message === 'El tipo del documento no es permitido') newMessage = `${message}. Solo imágenes.`
            notificationErrorV1(newMessage || 'Error', 2.5);
            result = null;
        }
    }else{
        result = null;
    }
    return result;
}