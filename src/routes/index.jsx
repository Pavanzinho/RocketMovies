
import {AuthRoutes} from "./auth.routes";

import{BrowserRouter} from "react-router-dom"

export function Route(){
    return(
        <BrowserRouter>
            <AuthRoutes/>
        </BrowserRouter>
    )
    

}
