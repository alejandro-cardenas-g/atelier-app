import { ReactElement } from "react";

export const ContentAuth = ({children}: IProps) => {
    return (
        <div className='auth__content'>
            {children}
        </div>
    )
}

interface IProps{
    children: ReactElement | ReactElement[];
}