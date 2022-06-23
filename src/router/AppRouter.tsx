import { BrowserRouter} from "react-router-dom";
import { AuthRouter } from './auth/auth.router';
import { Suspense } from "react";
import { Spinner } from "../components/Common/Spinner.component";

export const AppRouter = () => {

    return (
        <Suspense fallback={<Spinner/>}>
            <BrowserRouter>

                <AuthRouter />

            </BrowserRouter>
        </Suspense>

    )
}
