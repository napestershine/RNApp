import React from 'react';
import { Scene, Actions } from 'react-native-router-flux';
import List from '../components/restaurantearningcount/List';
import Create from '../components/restaurantearningcount/Create';
import Show from '../components/restaurantearningcount/Show';
import Update from '../components/restaurantearningcount/Update';
import {delayRefresh} from '../utils/helpers';

export default [
          <Scene
              rightTitle="Add"
              onRight={() => Actions.restaurantearningcountCreate()}
              key="restaurantearningcountList" component={List}
              title="List of RestaurantEarningCounts"
              initial
          />,
          <Scene key="restaurantearningcountCreate" component={Create}
                 title="Add a new restaurantearningcount"/>,
          <Scene key="restaurantearningcountShow" component={Show}
                 title="RestaurantEarningCount"
                 leftTitle="< List of RestaurantEarningCounts"
                 onLeft={() => {
                   Actions.pop();
                   delayRefresh();
                 }}/>,
          <Scene key="restaurantearningcountUpdate" component={Update}
                 title="Update RestaurantEarningCount"/>,
];
