
import {Header} from "../../components/Header";
import {Note} from "../../components/Note"

import {Container} from "./styles";
import {Content} from "./styles";
import {MdOutlineAdd} from "react-icons/md"

import{Link} from "react-router-dom";

export function Home(){
    return(
        <Container>
            <Header/>
            <Content>
                <div>
                    <h1>Meus Filmes</h1>
                    
                    <Link to="newmovie">
                        <button>
                            <MdOutlineAdd/>
                            Adicionar filme
                        </button>
                    </Link>
                    
                </div>
                <main>
                <Note to ="/details"data={{
                    title:'Interistellar',
                    tags:[
                        {id:"1",name: 'Física'},
                        {id:"2",name:'Aventura'}     
                    ]
            
                }}
                />
                <Note data={{
                    title:'Interistellar',
                    tags:[
                        {id:"1",name: 'Física'},
                        {id:"2",name:'Aventura'}   
                    ]
                }}
                />

                <Note data={{
                    title:'Interistellar',
                    tags:[
                        {id:"1",name: 'Física'},
                        {id:"2",name:'Aventura'}
                            
                    ]
                }}
                />
                </main> 
            </Content>
        </Container>

    )
    

}