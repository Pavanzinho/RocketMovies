import {Container} from "./styles";
import{Form} from "./styles"

import {Header} from "../../components/Header"
import{Input} from "../../components/Input"
import{TextArea} from "../../components/TextArea"
import{NoteItem} from "../../components/NoteItem";
import {Button} from "../../components/Button"

import{AiOutlineArrowLeft} from "react-icons/ai";

import {Link} from "react-router-dom";

export function NewMovie(){
    return(

        <Container>
            <Header/>
                <main>
                    <Form>
                        <Link to="/"> {/*nth-of-type(1)*/}
                            <AiOutlineArrowLeft/> {/*ENVOLVER O ICONE E O SPAN EM UM LINK*/}  
                            <span>Voltar</span> 
                        </Link> 

                        <h1>Novo filme</h1>
                        
                        <div> {/*nth-of-type(1)*/}
                            <Input placeholder="Título"/>
                            <Input placeholder="Sua nota(de 0 a 5)"/>
                        </div>

                        <TextArea placeholder="Observações"/>
                        
                        <div className="tags">
                            <NoteItem value="React"/>
                            <NoteItem isNew placeholder="Novo Marcador"/>
                        </div> 

                        <footer>
                            <Button title="Excluir Filme" className="darkButton"/>
                            <Button title="Salvar Alterações"/>
                        </footer>
                    </Form>
                </main>
        </Container>
    )
}