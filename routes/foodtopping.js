import React from 'react';
import { Scene, Actions } from 'react-native-router-flux';
import List from '../components/foodtopping/List';
import Create from '../components/foodtopping/Create';
import Show from '../components/foodtopping/Show';
import Update from '../components/foodtopping/Update';
import {delayRefresh} from '../utils/helpers';

export default [
          <Scene
              rightTitle="Add"
              onRight={() => Actions.foodtoppingCreate()}
              key="foodtoppingList" component={List}
              title="List of FoodToppings"
              initial
          />,
          <Scene key="foodtoppingCreate" component={Create}
                 title="Add a new foodtopping"/>,
          <Scene key="foodtoppingShow" component={Show}
                 title="FoodTopping"
                 leftTitle="< List of FoodToppings"
                 onLeft={() => {
                   Actions.pop();
                   delayRefresh();
                 }}/>,
          <Scene key="foodtoppingUpdate" component={Update}
                 title="Update FoodTopping"/>,
];
