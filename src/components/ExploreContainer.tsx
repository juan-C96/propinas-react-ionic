import './ExploreContainer.css';
import { IonList, IonListHeader, IonInput, IonItem, IonLabel, IonButton,} from '@ionic/react';
import { IonGrid, IonRow, IonCol } from '@ionic/react';
import 'bootstrap/dist/css/bootstrap.min.css';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
//import '../js/calculos';
import React, {useState,useEffect} from 'react';



interface ContainerProps {
  name: string;
}

const ExploreContainer: React.FC<ContainerProps> = ({ name }) => {


  const options = ['0%', '5%', '10%', '15%', '20%', '25%', '30%', '35%', '40%', '45%', '50%', '55%', '60%', '65%', '70%', '75%', '80%', '85%', '90%', '95%', '100%']

  const [numero, setnumero] = useState({
    uno:0,
    dos:0,
    tres:0
  });

  const print = () =>{
    alert("Esta pinga no funciona! " + (numero.uno + numero.dos));
  }
  
  return (
    <IonGrid>
      <IonRow>
        <IonCol className='col-lg-12 col-md-12 col-20'>
          <IonList lines="full" class="ion-activated ion-text-center">
            <IonListHeader lines="full">
              <IonLabel> Pagar </IonLabel>
            </IonListHeader>
            <IonItem>
              <IonLabel>Importe total de la cuenta:</IonLabel>
              <IonInput id='total' min={0} name='uno' value={numero.uno} placeholder="Introduzca el total a pagar." type="number"></IonInput>
            </IonItem>

            <IonItem>
              <IonLabel>Número de comensales:</IonLabel>
              <IonInput id='comensales' name='dos' value={numero.dos} min={0} placeholder="Introduzca la cantidad de comensales." type="number"></IonInput>
            </IonItem>

            <IonItem>
              <IonLabel>Cantidad de propina:</IonLabel>
              <Autocomplete
                options={options}
                style={{ width: "86%", margin: "15px", background: 'CaptionText' }}
                renderInput={(params) =>
                  <TextField {...params} id='propina' value={numero.tres} name='tres' label="Introduzca el porcentaje de propina a dejar." variant="outlined" />}
              />
            </IonItem>

            <IonButton color="success" onClick={print} expand="block">Calcular</IonButton>

            <IonItem>
              <IonLabel position="stacked">Total a pagar:</IonLabel>
              <div id="total"></div>
            </IonItem>


          </IonList>
        </IonCol>
      </IonRow>
    </IonGrid>
  );
};

export default ExploreContainer;
