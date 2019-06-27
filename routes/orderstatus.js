import React from 'react';
import { Scene, Actions } from 'react-native-router-flux';
import List from '../components/orderstatus/List';
import Create from '../components/orderstatus/Create';
import Show from '../components/orderstatus/Show';
import Update from '../components/orderstatus/Update';
import {delayRefresh} from '../utils/helpers';

export default [
          <Scene
              rightTitle="Add"
              onRight={() => Actions.orderstatusCreate()}
              key="orderstatusList" component={List}
              title="List of OrderStatuss"
              initial
          />,
          <Scene key="orderstatusCreate" component={Create}
                 title="Add a new orderstatus"/>,
          <Scene key="orderstatusShow" component={Show}
                 title="OrderStatus"
                 leftTitle="< List of OrderStatuss"
                 onLeft={() => {
                   Actions.pop();
                   delayRefresh();
                 }}/>,
          <Scene key="orderstatusUpdate" component={Update}
                 title="Update OrderStatus"/>,
];
