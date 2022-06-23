import {Route, Routes } from "react-router-dom";
import { AuthNavigation } from "../../components/Routing/authNavigation.component";
import { routes } from './routes';

export const AuthRouter = () => {
    return (
        <Routes>
            {
                routes.map(({component:Component, isPrivate, path, layout:Layout, text}) => {
                    return <Route
                        key={path}
                        path={path}
                        element={
                            <AuthNavigation isPrivate={isPrivate}>
                                <Layout text={text}>
                                    <Component/>
                                </Layout>
                            </AuthNavigation>
                            }
                        />
                })
            }
        </Routes>

    )
}
