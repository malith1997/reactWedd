import "../Styles/card.css";
import {  Checkbox, CheckboxGroup,Button,Textarea} from '@chakra-ui/react'


function Rspv() {
    return(   
            <div> 
            <h1>RSPV</h1>
            <h4 className="text4">Please use the form below to RSVP your attendance for all events. Thank you! </h4>
                
                <div className="form">
                <center>
                <input className="first" type="text" id="fname" name="firstname" placeholder="First Name"></input>
                <input className="last" type="text" id="Lname" name="Lasttname" placeholder="Last Name"></input>
                </center>
                </div>

                <h4 className="text4">Will you be attending? * </h4>
                <center>
                <Button className="Btn1">
                    <a className="textcolor">No</a>
                </Button>
                </center>

                <h4 className="text4">Number of people in your party. * </h4>

                <center>
                <Button className="Btn2">
                    <a className="textcolor">1</a>
                </Button>
                </center>

                <h4 className="text4">Email * </h4>

                <center>
                <input className="email" type="text" id="email" name="email" placeholder="Email"></input>
                </center>

                <h4 className="text4">Events * </h4>
                
                <Checkbox className="checkbox" defaultChecked>Welcome Drinks</Checkbox>
                <Checkbox className="checkbox" defaultChecked>Taj Mahal Excursion</Checkbox>
                <Checkbox className="checkbox" defaultChecked>Historic Sites of Delhi Tour</Checkbox>
                <Checkbox className="checkbox" defaultChecked>Wedding and Reception</Checkbox>
                <Checkbox className="checkbox" defaultChecked>None of the Above</Checkbox>
                
                <h4 className="text4">Additional comments </h4>
                <center>
                <Textarea className="typearea" placeholder='Type Here' />
                </center>

                <center>
                <Button className="Btn2">
                    <a className="textcolor">Send</a>
                </Button>
                </center>


            </div>
            
    );
}

export default Rspv;