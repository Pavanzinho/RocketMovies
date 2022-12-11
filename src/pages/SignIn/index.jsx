import {Container} from "./styles";
import {Form} from "./styles";
import { Background } from "./styles";

import { FiMail, FiLock} from "react-icons/fi";

import{InputPassword} from "../../components/InputPassword";
import{Input} from "../../components/Input"
import { Button } from "../../components/Button"
import { ButtonText } from "../../components/ButtonText";

export function SignIn(){
    return(

        <Container>
            <Form>
        
                <div>    
                    <h1>RocketMovies</h1>
                    <span>Aplicação para acompanhar tudo que assistir.</span>
                    <h2>Faça seu login</h2>

                    <fieldset>
                        <Input
                        placeholder="E-mail"
                        icon={FiMail}
                        />

                        
                        <InputPassword
                        placeholder="Senha"
                        icon={FiLock}
                        />
                       
   
                    </fieldset>

                    <Button title="Entrar"/>
                </div>
                
                <ButtonText to ="/signup" title="Criar conta"/>
            
            </Form>
            
            <Background/>

        </Container>
    )
}