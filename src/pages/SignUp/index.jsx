import {Container} from "./styles";
import {Form} from "./styles";
import { Background } from "./styles";

import { FiUser,FiMail, FiLock} from "react-icons/fi";
import { AiOutlineArrowLeft} from "react-icons/ai"

import{InputPassword} from "../../components/InputPassword";
import{Input} from "../../components/Input";
import { Button } from "../../components/Button"


import { Link} from "react-router-dom";



export function SignUp(){
    return(

        <Container>
            <Form>
        
                <div> 
                
                    <h1>RocketMovies</h1>
                    <span>Aplicação para acompanhar tudo que assistir.</span>
                    <h2>Crie sua conta</h2>

                    <fieldset>
                        <Input 
                        placeholder="Nome"
                        icon={FiUser}
                        type="text"
                        />
                        
                        <Input 
                        placeholder="E-mail"
                        icon={FiMail}
                        type="email"
                        />
                        <InputPassword 
                        placeholder="Senha"
                        icon={FiLock}
                        
                        />
   
                    </fieldset>

                    <Button title="Cadastrar"/>
                </div>
                
                
                 {/*fazer virar um link depois*/}
                    <Link to="/">
                        <AiOutlineArrowLeft/>
                        <span>Voltar para o login</span>
                    
                    
                    </Link>
                

                
                
            
            </Form>

            <Background/>



        </Container>


    )


}