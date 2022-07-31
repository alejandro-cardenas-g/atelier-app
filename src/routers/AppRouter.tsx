import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import { Suspense } from "react"

import { Spinner } from "../components/Common/Spinner.component"
import { AuthNavigation } from "../components/Routing/authNavigation.component";
import { routes } from './routes';

export const AppRouter = () => {
    return (
        <Suspense fallback={<Spinner/>}>

            <BrowserRouter>

                <Routes>

                    {
                        routes.map(({
                            isIndexComponent,
                            path: pathMain,
                            redirect,
                            routes:childroutes,
                            index:Index,
                            pathIndexRedirect, 
                            indexHasLayout, 
                            layout:LayoutMain, 
                            isPrivate:IsPrivateMain
                        }) => {
                            return(

                                <Route path={pathMain} key={pathMain}>

                                    {

                                        isIndexComponent === 1 
                                        ?
                                            <Route index element={<Navigate to={pathIndexRedirect!}/>}/>
                                        :
                                            
                                            indexHasLayout === true
                                            ?
                                                <Route index element={<AuthNavigation isPrivate={IsPrivateMain}>
                                                    <LayoutMain>
                                                        <Index/>
                                                    </LayoutMain>
                                                </AuthNavigation>}/> 
                                            :
                                                <Route index element={<Index/>}/>
                                        
                                    }
                                    
                                    {
                                        childroutes && 

                                        childroutes.map(({props, path, layout:Layout, isPrivate, component:Component, componentProps}) => {

                                            return(
                                                <Route path={path} key={path} element={
                                                    <AuthNavigation isPrivate={isPrivate}>
                                                        <Layout {...props}>
                                                            <Component {...componentProps}/>
                                                        </Layout>
                                                    </AuthNavigation>
                                                }/>
                                            )
                                        })

                                    }

                                    <Route path='*' element={<Navigate to={redirect}/>}/>

                                </Route>

                            )
                        })
                    }

                </Routes>
            
            </BrowserRouter>

        </Suspense>

    )
}
