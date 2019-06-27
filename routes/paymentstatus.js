import React from 'react';
import { Scene, Actions } from 'react-native-router-flux';
import List from '../components/paymentstatus/List';
import Create from '../components/paymentstatus/Create';
import Show from '../components/paymentstatus/Show';
import Update from '../components/paymentstatus/Update';
import {delayRefresh} from '../utils/helpers';

export default [
          <Scene
              rightTitle="Add"
              onRight={() => Actions.paymentstatusCreate()}
              key="paymentstatusList" component={List}
              title="List of PaymentStatuss"
              initial
          />,
          <Scene key="paymentstatusCreate" component={Create}
                 title="Add a new paymentstatus"/>,
          <Scene key="paymentstatusShow" component={Show}
                 title="PaymentStatus"
                 leftTitle="< List of PaymentStatuss"
                 onLeft={() => {
                   Actions.pop();
                   delayRefresh();
                 }}/>,
          <Scene key="paymentstatusUpdate" component={Update}
                 title="Update PaymentStatus"/>,
];
