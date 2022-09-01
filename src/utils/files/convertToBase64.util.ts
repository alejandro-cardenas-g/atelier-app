import { ICommonProps } from "../../interfaces/common/common.interface";
import { IBase64Doc } from "../../interfaces/files/documentsObject.component";

export const converToBase64 = (file: File):Promise<string> => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = error => reject(error);
});

export const convertToObjetBae64 = (file: File, otherProps: ICommonProps = {}):Promise<IBase64Doc> => new Promise((resolve,reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve({
        buffer: (reader.result as string).split(';base64,')[1],
        size: file.size,
        type: file.type,
        name: file.name,
        ...otherProps
    });
    reader.onerror = error => reject(error);
});