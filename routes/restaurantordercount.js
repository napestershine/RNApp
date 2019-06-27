import React from 'react';
import { Scene, Actions } from 'react-native-router-flux';
import List from '../components/restaurantordercount/List';
import Create from '../components/restaurantordercount/Create';
import Show from '../components/restaurantordercount/Show';
import Update from '../components/restaurantordercount/Update';
import {delayRefresh} from '../utils/helpers';

export default [
          <Scene
              rightTitle="Add"
              onRight={() => Actions.restaurantordercountCreate()}
              key="restaurantordercountList" component={List}
              title="List of RestaurantOrderCounts"
              initial
          />,
          <Scene key="restaurantordercountCreate" component={Create}
                 title="Add a new restaurantordercount"/>,
          <Scene key="restaurantordercountShow" component={Show}
                 title="RestaurantOrderCount"
                 leftTitle="< List of RestaurantOrderCounts"
                 onLeft={() => {
                   Actions.pop();
                   delayRefresh();
                 }}/>,
          <Scene key="restaurantordercountUpdate" component={Update}
                 title="Update RestaurantOrderCount"/>,
];
