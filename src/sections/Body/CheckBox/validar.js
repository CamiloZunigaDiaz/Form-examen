import checkbox from './checkbox'
import React, { Component } from 'react'
import Button from 'react-bootstrap/Button'



export default class Validar extends Component {

    render() {
        return (
            <Button onClick={this.validarRespuestas()}>validar</Button>
        )
    }
    
    validarRespuestas(respuestaPregunta1, r2){

        if(this.RespuestaPrimerPregunta===document.getElementById('Respuesta1')){
            console.log=("hi")
        }
        console.log=("bye")


    }
}