import React from 'react';
import { Scene, Actions } from 'react-native-router-flux';
import List from '../components/invoice/List';
import Create from '../components/invoice/Create';
import Show from '../components/invoice/Show';
import Update from '../components/invoice/Update';
import {delayRefresh} from '../utils/helpers';

export default [
          <Scene
              rightTitle="Add"
              onRight={() => Actions.invoiceCreate()}
              key="invoiceList" component={List}
              title="List of Invoices"
              initial
          />,
          <Scene key="invoiceCreate" component={Create}
                 title="Add a new invoice"/>,
          <Scene key="invoiceShow" component={Show}
                 title="Invoice"
                 leftTitle="< List of Invoices"
                 onLeft={() => {
                   Actions.pop();
                   delayRefresh();
                 }}/>,
          <Scene key="invoiceUpdate" component={Update}
                 title="Update Invoice"/>,
];
