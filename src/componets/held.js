import "../Styles/card.css";
import { ButtonGroup,Divider,Stack,Image,Heading,Text,Button,Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react';
import coco from "../img/coco.jpg";

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
    GridItem,Grid,
  } from '@chakra-ui/react'

  import Repception from "../img/THE RECEPTION.png";
  import Ceremony from "../img/THE CEREMONY.png"
  import Party from "../img/THE PARTY.png"


function Held() {
    return( 
      
      <body>
      <div className="content">     
      <div className="card2">
  
        <div className="container">
         <h1 className="hed">When & Where</h1> 
         <h1 className="sub">Wedding</h1> 
        </div>

        <div className="row">
            <div className="column">
            <Image className="img5" src={Repception} alt="Repception" />
                <h1 className="hedcard">THE RECEPTION</h1>
            </div>

            <div className="column">
            <Image className="img6" src={Ceremony} alt="Ceremony" />
                <h1 className="hedcard">THE CEREMONY</h1>
            </div>


            <div className="column">
            <Image className="img7" src={Party} alt="Party" />
                <h1 className="hedcard">THE PARTY</h1>
            </div>
        </div>


        
      </div>
      </div>

      </body>
            
            
    );
}

export default Held;