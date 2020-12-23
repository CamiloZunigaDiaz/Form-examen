import React, { Component } from 'react'
import Card from 'react-bootstrap/Card';
import CheckBox from './CheckBox/checkbox'
import Validar from './CheckBox/validar'


class Preguntas extends Component {

    

    render() {
        return (
            

                <Card border="info" style={{ width: '50rem' }} >
                    <Card.Body>
                        <CheckBox />
                        <CheckBox />
                        <CheckBox />
                        <CheckBox />
                        <CheckBox />
                        <CheckBox />
                        <CheckBox />
                        <CheckBox />
                        <CheckBox />
                        <CheckBox />
                        <CheckBox />

                        <Validar/>
                    </Card.Body>
                </Card>
                
            









        );


    }
}
export default Preguntas;