import { Container} from "./styles";
import { Profile } from "./styles";
import {Input} from "../Input"

import {Link} from "react-router-dom";


export function Header(){
    return(
        <Container>
            
            <Link to="/">
               RocketMovies
            </Link>
            <Input placeholder="Pesquisar pelo título"/>

            <Profile>
                    <div>
                        
                        <Link to="/profile">
                            <strong>Thiago Pavan</strong>
                        </Link> {/*nome de usuário*/}
                        
                        <a href="#">sair</a>
                    </div>
                    
                    <img 
                    src="https://github.com/Pavanzinho.png" 
                    alt="Imagem do Usuário" />
            </Profile>

            

        </Container>
    )
    
    

}