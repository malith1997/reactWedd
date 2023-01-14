
import "../Styles/card.css";
import { ButtonGroup,Divider,Stack,Image,Heading,Text,Button,Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react';
import Golf from "../img/golf.jpg";


function FourthCard() {
    return( 
      
      <body>
      <div className="content">     
      <div className="card1">
  
      
      
        <div className="container">
        <Image className="img1" src={Golf} alt="coco" />
          <h5 className="text1">Please RSVP for this event by filling out the form below. </h5> 
          <Button className="BtnCard">
            <a className="textcolor">View Event</a>
          </Button>
        </div>
      </div>
      </div>

      </body>
            
            
    );
}

export default FourthCard;