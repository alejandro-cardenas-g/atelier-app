import { ReactElement } from 'react';

export const PortalContent = ({children}:IProps) => {
    return (
        <div className={'portal__content'}>
            {children}
        </div>
    )
}

interface IProps{
    children:  ReactElement | ReactElement[]
}
