import { Container} from "./styles";
import React,{useState} from "react";

import {AiFillEye} from "react-icons/ai"

export function InputPassword({icon:Icon,...rest}){
   
    const [values,setValues]=React.useState({ // setValues: O que irá ser usado para 
        password:"",
        showPassword: false
    });
   

    const handleClickShowPassword=()=>{
        setValues({showPassword:!values.showPassword}) 

    };

    const handlePasswordChange = (prop) => (event) => {
        setValues({[prop]: event.target.value });
    };

    
    const [isCapsLockOn,setIsCapsLockOn]=useState(false);

    const checkCapsLockOn=(event)=>{
        if(event.getModifierState('CapsLock')){
            setIsCapsLockOn(true)

        }else{
            setIsCapsLockOn(false)
        };
    }


 
    return(
    
        <Container {...rest}>


            {Icon && <Icon size={20}/>}
            
            <input 
            type={values.showPassword? "text":"password"}
            onChange={handlePasswordChange("password")}
            onKeyUp={checkCapsLockOn}

            
            
        
            {...rest}/>

            {isCapsLockOn &&( //criando tag com uma condição.
                <p className="caps-lock-warning">
                    CapsLock está ligado.
                </p>
                )
            }
            
            <button 
            onClick={handleClickShowPassword}
            type="button"         
            >
            
                <AiFillEye 
                name="eye" 
                size={25}/>
            
            </button>
    
           
           
        </Container>
         
    )
}
