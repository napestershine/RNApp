import React from 'react';
import { Scene, Actions } from 'react-native-router-flux';
import List from '../components/restaurant/List';
import Create from '../components/restaurant/Create';
import Show from '../components/restaurant/Show';
import Update from '../components/restaurant/Update';
import {delayRefresh} from '../utils/helpers';

export default [
          <Scene
              rightTitle="Add"
              onRight={() => Actions.restaurantCreate()}
              key="restaurantList" component={List}
              title="List of Restaurants"
              initial
          />,
          <Scene key="restaurantCreate" component={Create}
                 title="Add a new restaurant"/>,
          <Scene key="restaurantShow" component={Show}
                 title="Restaurant"
                 leftTitle="< List of Restaurants"
                 onLeft={() => {
                   Actions.pop();
                   delayRefresh();
                 }}/>,
          <Scene key="restaurantUpdate" component={Update}
                 title="Update Restaurant"/>,
];
