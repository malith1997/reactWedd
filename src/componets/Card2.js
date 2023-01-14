
import "../Styles/card.css";
import { ButtonGroup,Divider,Stack,Image,Heading,Text,Button,Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react';
import mendhi from "../img/mendhi.jpg";


function SecondCard() {
    return(   

        
      <div className="content">   
      <div className="card1">
      
        <div className="container">
        <Image className="img1" src={mendhi} alt="mendhi" />
          <h5 className="text1">Please RSVP for this event by filling out the form below. </h5> 
          <Button className="BtnCard">
            <a className="textcolor">View Event</a>
          </Button>
        </div>
      </div>
      </div>
   
            
    );
}

export default SecondCard;