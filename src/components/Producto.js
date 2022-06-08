import React,{Component, useState} from 'react';
import { IonList, IonListHeader, IonInput, IonItem, IonLabel, IonButton,} from '@ionic/react';
import { IonGrid, IonRow, IonCol } from '@ionic/react';
import 'bootstrap/dist/css/bootstrap.min.css';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

const options = ['0%', '5%', '10%', '15%', '20%', '25%', '30%', '35%', '40%', '45%', '50%', '55%', '60%', '65%', '70%', '75%', '80%', '85%', '90%', '95%', '100%']


class Producto extends Component {
    constructor (props) {
        super();
        this.state = {
            stocksprod:props.stock,
            total:0,
        };
    };

    
  
    render(){
        
    
        return (
          /*  <Col sm="6" className="col-12 col-md-6">
                <Card className="Card" body>  
                    <CardImg src={this.props.imagen} className="item-imagen"></CardImg>
                    <CardBody>
                        <CardTitle className="text-center"><b>{this.props.titulo}</b></CardTitle>
                        <CardSubtitle><b>Código:</b> {this.props.codigo}</CardSubtitle>
                        <CardText className="text-justify"><b>Descripción:</b> {this.props.descripcion}</CardText>
                        <CardSubtitle><b>Precio:</b> {this.props.precio} €</CardSubtitle>
                        <CardText>Stock: {this.state.stocksprod} unidades</CardText>
                        <FichaProducto props={this.props} className="Button" reducirCantidad={(e,listaCarro)=>this.cambiarStock(e,listaCarro)}></FichaProducto>
                    </CardBody>
                </Card>
            </Col>*/
<IonGrid>
      <IonRow>
        <IonCol className='col-lg-12 col-md-12 col-20'>
          <IonList lines="full" class="ion-activated ion-text-center">
            <IonListHeader lines="full">
              <IonLabel> Pagar </IonLabel>
            </IonListHeader>
            <IonItem>
              <IonLabel>Importe total de la cuenta:</IonLabel>
              <IonInput id='total' min={0} name='uno' onChange={handleInput} placeholder="Introduzca el total a pagar." type="number"></IonInput>
            </IonItem>

            <IonItem>
              <IonLabel>Número de comensales:</IonLabel>
              <IonInput id='comensales' name='dos' min={0} onChange={handleInput} placeholder="Introduzca la cantidad de comensales." type="number"></IonInput>
            </IonItem>

            <IonItem>
              <IonLabel>Cantidad de propina:</IonLabel>
              <Autocomplete
                options={options}
                style={{ width: "86%", margin: "15px", background: 'CaptionText' }}
                renderInput={(params) =>
                  <TextField {...params} id='propina' name='tres' label="Introduzca el porcentaje de propina a dejar." variant="outlined" />}
              />
            </IonItem>

            <IonButton color="success" onClick={()=>this.print()} expand="block">Calcular</IonButton>

            <IonItem>
              <IonLabel position="stacked">Total a pagar:</IonLabel>
              <div id="total"></div>
              <input value={suma}/>
            </IonItem>


          </IonList>
        </IonCol>
      </IonRow>
    </IonGrid>
        );
    };
};

export default Producto;