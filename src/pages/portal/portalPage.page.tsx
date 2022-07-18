import { Layout } from "antd"
import { ReactElement, useEffect } from 'react';
import { PortalContent } from "../../components/Pages/portal/portalContent.component"
import { PortalSider } from "../../components/Pages/portal/portalSider.component"
import { dispatchGetCommon } from "../../redux/dispatchers/portal/common.dispatch"

export const PortalPage = ({children}: IProps) => {

    useEffect(() => {
        dispatchGetCommon();
    }, [dispatchGetCommon])

    return (
        <Layout className='portal'>
            
            <PortalSider/>
            <PortalContent>
                {children}
            </PortalContent>
  
        </Layout>
    )
}

interface IProps{
    children: ReactElement | ReactElement[]
}
