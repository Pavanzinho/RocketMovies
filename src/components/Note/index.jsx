import {Container} from "./styles";
import {FiStar} from "react-icons/fi";
import {FaStar} from "react-icons/fa"

import {Tag} from "../../components/Tag";

export function Note({data,...rest}){
    return(
        <Container {...rest}>
            
                <h1>{data.title}</h1>
                <div>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FiStar/>
                </div>
            
                <p>
                Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data 
                desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de 
                Cooper, acredita que seu quarto está assombrado por um fantasma que...
                </p>

                {
                    data.tags &&
                        <footer>
                            {
                                data.tags.map(data=><Tag key={data.id} title={data.name}/>)
                            }
                        </footer>
                    }
           



        </Container>

    )


}