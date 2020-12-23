import React, { Component } from 'react'
import { LoremIpsum } from 'react-lorem-ipsum';

import Form from 'react-bootstrap/Form'
import Card from 'react-bootstrap/Card'

export default class checkbox extends Component {
    
    render() {
        return (


            <Form>
                <Card>
                    <Card.Header><LoremIpsum avgSentencesPerParagraph={(2)}/></Card.Header>                  
                </Card>              
                {['checkbox'].map((type) => (
                    <div key={type} className="mb-3">
                        <Form.Check type={type} id={'Respuesta1'}>
                            <Form.Check.Input type={type}  />
                            <Form.Check.Label>{<LoremIpsum avgSentencesPerParagraph={(2)}/>}</Form.Check.Label>
                            
                           
                        </Form.Check>
                    </div>
                ))}
                                
                {['checkbox'].map((type) => (
                    <div key={type} className="mb-3">
                        <Form.Check type={type} id={`Respuesta2`}>
                            <Form.Check.Input type={type}  />
                            <Form.Check.Label>{<LoremIpsum avgSentencesPerParagraph={(2)}/>}</Form.Check.Label>
                           
                        </Form.Check>
                    </div>
                ))}
                {['checkbox'].map((type) => (
                    <div key={type} className="mb-3">
                        <Form.Check type={type} id={`Respuesta3`}>
                            <Form.Check.Input type={type}  />
                            <Form.Check.Label>{<LoremIpsum avgSentencesPerParagraph={(2)}/> }</Form.Check.Label>
                           
                        </Form.Check>
                    </div>
                ))}
                {['checkbox'].map((type) => (
                    <div key={type} className="mb-3">
                        <Form.Check type={type} id={`Respuesta4`}>
                            <Form.Check.Input type={type}  />
                            <Form.Check.Label>{<LoremIpsum avgSentencesPerParagraph={(2)}/>}</Form.Check.Label>
                           
                        </Form.Check>
                    </div>
                ))}
                {['checkbox'].map((type) => (
                    <div key={type} className="mb-3">
                        <Form.Check type={type} id={`Respuesta5`}>
                            <Form.Check.Input type={type}  />
                            <Form.Check.Label>{<LoremIpsum avgSentencesPerParagraph={(2)}/>}</Form.Check.Label>
                           
                        </Form.Check>
                    </div>
                ))}
                
            </Form>

        )


    }
}