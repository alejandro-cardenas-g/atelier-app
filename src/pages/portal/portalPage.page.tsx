import { Layout } from "antd"
import { ReactElement } from "react"
import { PortalContent } from "../../components/Pages/portal/portalContent.component"
import { PortalSider } from "../../components/Pages/portal/portalSider.component"

export const PortalPage = ({children}: IProps) => {
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
