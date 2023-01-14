
import "../Styles/card.css";
import { ButtonGroup,Divider,Stack,Image,Heading,Text,Button,Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react';
import cover from "../img/hero.png";
import enlarged from "../img/photo.png"

import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Input,
    NumberInput,
    NumberInputField,
    NumberIncrementStepper,
    NumberDecrementStepper,
    NumberInputStepper,
  } from '@chakra-ui/react'


function Hero() {
    return( 
      
      <body>
      <div className="content"> 
      <Image className="img1" src={cover} alt="coco" />    
     
  
          <Image className="img2" src={enlarged} alt="coco" />


          <div className="card1">
  
      
      
        <div className="container">
       
        <h1 className="text1"> Will You Attend  ?</h1> 
         
        <FormControl>
            
            <Input placeholder='Name' className="email" type='Name' />
     
        </FormControl>
        
        <FormControl>
        
            <Input placeholder='E-mail' className="email" type='email' />
   
        </FormControl>

        <center>
        <FormControl className="email">
            <NumberInput  max={10} min={1}>
                <NumberInputField className="inputfield" placeholder='Amount' />
                <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
                </NumberInputStepper>
            </NumberInput>
        </FormControl>
        </center> 


        <Button className="BtnCard">
            <a className="textcolor">RSPV</a>
          </Button> 
          
        </div>
      </div>



    
      </div>

      </body>
            
            
    );
}

export default Hero;