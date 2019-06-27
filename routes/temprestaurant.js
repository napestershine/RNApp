import React from 'react';
import { Scene, Actions } from 'react-native-router-flux';
import List from '../components/temprestaurant/List';
import Create from '../components/temprestaurant/Create';
import Show from '../components/temprestaurant/Show';
import Update from '../components/temprestaurant/Update';
import {delayRefresh} from '../utils/helpers';

export default [
          <Scene
              rightTitle="Add"
              onRight={() => Actions.temprestaurantCreate()}
              key="temprestaurantList" component={List}
              title="List of TempRestaurants"
              initial
          />,
          <Scene key="temprestaurantCreate" component={Create}
                 title="Add a new temprestaurant"/>,
          <Scene key="temprestaurantShow" component={Show}
                 title="TempRestaurant"
                 leftTitle="< List of TempRestaurants"
                 onLeft={() => {
                   Actions.pop();
                   delayRefresh();
                 }}/>,
          <Scene key="temprestaurantUpdate" component={Update}
                 title="Update TempRestaurant"/>,
];
