import { ReactElement } from "react";
import { Layout } from "antd"
import { ContentAuth } from "../../components/Pages/auth/contentAuth.component";
import { SiderAuth } from "../../components/Pages/auth/sideAuth.component"

export const AuthPage = ({children, text}:IProps) => {

  return (
    <Layout className='auth'>
        
      <SiderAuth text={text}/>
      
      <ContentAuth>
        {children}
      </ContentAuth>

    </Layout>
  )
}

interface IProps{
  children: ReactElement | ReactElement[];
  text: string;
}