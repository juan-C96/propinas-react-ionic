import React, { Component } from 'react'
import { Segment, Form, Button } from 'semantic-ui-react';
import APagar from './APagar.js'
import './ExploreContainer.css';
import { IonList, IonListHeader, IonInput, IonLabel } from '@ionic/react';
import { IonGrid, IonRow, IonCol } from '@ionic/react';

class App extends Component {

    Operar() {
        var resultado = APagar(parseInt(document.getElementById('total').value), parseInt(document.getElementById('comensales').value), parseInt(document.getElementById('propina').value));
        if (isNaN(resultado))
            alert('Ingrese valores para calcular el pago')
        else
            document.getElementById("result").value = resultado;
        document.getElementById('total').value = null;
        document.getElementById('comensales').value = null;
        document.getElementById('propina').value = null;
    }

    render() {
        return (
            <div className='App'>
                <IonGrid>
                    <IonRow>
                        <IonCol className='col-lg-12 col-md-12 col-20'>
                            <IonList lines="full" class="ion-activated ion-text-center">
                                <IonListHeader lines="full">
                                    <IonLabel> Pagar </IonLabel>
                                </IonListHeader>
                                <Form size='large'>
                                    <Segment stacked>
                                        <Form.Field>
                                            <IonLabel>Importe total de la cuenta:</IonLabel>
                                            <IonInput type='number' id='total' fluid placeholder='Importe de cuenta'></IonInput>
                                            <IonLabel>Número de comensales:</IonLabel>
                                            <IonInput type='number' id='comensales' fluid placeholder='Número de comensales'></IonInput>
                                            <IonLabel>Porciento a dejar en propina(Puede introducir cualquier valor de 0 a 100%):</IonLabel>
                                            <IonInput type='number' id='propina' fluid placeholder='Porciento de propina a dejar'></IonInput>
                                            <Button color='blue' fluid size='large' onClick={this.Operar}>
                                                A pagar por comensales
                                            </Button>
                                        </Form.Field>
                                        <Form.Field>
                                            <IonLabel><Form.Input id='result' fluid value='' placeholder='Resultado' />€</IonLabel>
                                        </Form.Field>
                                    </Segment>
                                </Form>
                            </IonList>
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </div>
        );

    }
}

export default App;