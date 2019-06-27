import React from 'react';
import { Scene, Actions } from 'react-native-router-flux';
import List from '../components/reservation/List';
import Create from '../components/reservation/Create';
import Show from '../components/reservation/Show';
import Update from '../components/reservation/Update';
import {delayRefresh} from '../utils/helpers';

export default [
          <Scene
              rightTitle="Add"
              onRight={() => Actions.reservationCreate()}
              key="reservationList" component={List}
              title="List of Reservations"
              initial
          />,
          <Scene key="reservationCreate" component={Create}
                 title="Add a new reservation"/>,
          <Scene key="reservationShow" component={Show}
                 title="Reservation"
                 leftTitle="< List of Reservations"
                 onLeft={() => {
                   Actions.pop();
                   delayRefresh();
                 }}/>,
          <Scene key="reservationUpdate" component={Update}
                 title="Update Reservation"/>,
];
