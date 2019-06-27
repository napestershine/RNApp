import React from 'react';
import { Scene, Actions } from 'react-native-router-flux';
import List from '../components/foodorder/List';
import Create from '../components/foodorder/Create';
import Show from '../components/foodorder/Show';
import Update from '../components/foodorder/Update';
import {delayRefresh} from '../utils/helpers';

export default [
          <Scene
              rightTitle="Add"
              onRight={() => Actions.foodorderCreate()}
              key="foodorderList" component={List}
              title="List of FoodOrders"
              initial
          />,
          <Scene key="foodorderCreate" component={Create}
                 title="Add a new foodorder"/>,
          <Scene key="foodorderShow" component={Show}
                 title="FoodOrder"
                 leftTitle="< List of FoodOrders"
                 onLeft={() => {
                   Actions.pop();
                   delayRefresh();
                 }}/>,
          <Scene key="foodorderUpdate" component={Update}
                 title="Update FoodOrder"/>,
];
