import{AppRoutes} from "./app.routes"; 
import {AuthRoutes} from "./auth.routes";

import{BrowserRouter} from "react-router-dom"

export function Route(){
    return(
        <BrowserRouter>
            <AuthRoutes/>
        </BrowserRouter>
    )
    

}

//Obs: substituir <AuthRoutes/> por <AppRoutes/> acessar as rotas de aplicação.
