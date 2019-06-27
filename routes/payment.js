import React from 'react';
import { Scene, Actions } from 'react-native-router-flux';
import List from '../components/payment/List';
import Create from '../components/payment/Create';
import Show from '../components/payment/Show';
import Update from '../components/payment/Update';
import {delayRefresh} from '../utils/helpers';

export default [
          <Scene
              rightTitle="Add"
              onRight={() => Actions.paymentCreate()}
              key="paymentList" component={List}
              title="List of Payments"
              initial
          />,
          <Scene key="paymentCreate" component={Create}
                 title="Add a new payment"/>,
          <Scene key="paymentShow" component={Show}
                 title="Payment"
                 leftTitle="< List of Payments"
                 onLeft={() => {
                   Actions.pop();
                   delayRefresh();
                 }}/>,
          <Scene key="paymentUpdate" component={Update}
                 title="Update Payment"/>,
];
