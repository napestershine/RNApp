import React from 'react';
import { Scene, Actions } from 'react-native-router-flux';
import List from '../components/orderitems/List';
import Create from '../components/orderitems/Create';
import Show from '../components/orderitems/Show';
import Update from '../components/orderitems/Update';
import {delayRefresh} from '../utils/helpers';

export default [
          <Scene
              rightTitle="Add"
              onRight={() => Actions.orderitemsCreate()}
              key="orderitemsList" component={List}
              title="List of OrderItemss"
              initial
          />,
          <Scene key="orderitemsCreate" component={Create}
                 title="Add a new orderitems"/>,
          <Scene key="orderitemsShow" component={Show}
                 title="OrderItems"
                 leftTitle="< List of OrderItemss"
                 onLeft={() => {
                   Actions.pop();
                   delayRefresh();
                 }}/>,
          <Scene key="orderitemsUpdate" component={Update}
                 title="Update OrderItems"/>,
];
