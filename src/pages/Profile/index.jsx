import {Container} from "./styles";
import {Form} from "./styles";
import {Avatar} from "./styles";

import { Input} from "../../components/Input"
import{ Button} from "../../components/Button"

import { FiUser,FiMail,FiLock,FiCamera} from "react-icons/fi"

import {AiOutlineArrowLeft} from "react-icons/ai"

import {Link} from "react-router-dom";

export function Profile(){
    return(

        <Container>
            <header>
                <Link to ="/">
                    <AiOutlineArrowLeft/> {/*ENVOLVER O ICONE E O SPAN EM UM LINK*/}  
                    <span>Voltar</span>
                </Link> 
            </header>

            <Form>
                <Avatar> 
                    <img 
                    src="https://github.com/Pavanzinho.png" 
                    alt="Imagem do Usuário"
                    />
                    <label htmlFor="avatar">  
                        <FiCamera/>

                        <input 
                        type="file"
                        id="avatar"
                        />
                    </label>
                </Avatar>
                
                <Input 
                placeholder="Nome"
                icon={FiUser}
                type="text"
                className="SvgMarginInInputs"    
                />
                
                <Input 
                placeholder="E-mail"
                icon={FiMail}
                type="email"
                className="SvgMarginInInputs"
                />

                <Input 
                placeholder="Senha atual"
                icon={FiLock}
                type="password"
                className="SvgMarginInInputs" 
                />

                <Input 
                placeholder="Nova senha"
                icon={FiLock}
                type="password"
                className="SvgMarginInInputs"
                />

                <Button title="Salvar"/>
            </Form>
        </Container>
    )
}