import React from 'react';
import { Scene, Actions } from 'react-native-router-flux';
import List from '../components/tablereservation/List';
import Create from '../components/tablereservation/Create';
import Show from '../components/tablereservation/Show';
import Update from '../components/tablereservation/Update';
import {delayRefresh} from '../utils/helpers';

export default [
          <Scene
              rightTitle="Add"
              onRight={() => Actions.tablereservationCreate()}
              key="tablereservationList" component={List}
              title="List of TableReservations"
              initial
          />,
          <Scene key="tablereservationCreate" component={Create}
                 title="Add a new tablereservation"/>,
          <Scene key="tablereservationShow" component={Show}
                 title="TableReservation"
                 leftTitle="< List of TableReservations"
                 onLeft={() => {
                   Actions.pop();
                   delayRefresh();
                 }}/>,
          <Scene key="tablereservationUpdate" component={Update}
                 title="Update TableReservation"/>,
];
