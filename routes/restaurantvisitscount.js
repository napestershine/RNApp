import React from 'react';
import { Scene, Actions } from 'react-native-router-flux';
import List from '../components/restaurantvisitscount/List';
import Create from '../components/restaurantvisitscount/Create';
import Show from '../components/restaurantvisitscount/Show';
import Update from '../components/restaurantvisitscount/Update';
import {delayRefresh} from '../utils/helpers';

export default [
          <Scene
              rightTitle="Add"
              onRight={() => Actions.restaurantvisitscountCreate()}
              key="restaurantvisitscountList" component={List}
              title="List of RestaurantVisitsCounts"
              initial
          />,
          <Scene key="restaurantvisitscountCreate" component={Create}
                 title="Add a new restaurantvisitscount"/>,
          <Scene key="restaurantvisitscountShow" component={Show}
                 title="RestaurantVisitsCount"
                 leftTitle="< List of RestaurantVisitsCounts"
                 onLeft={() => {
                   Actions.pop();
                   delayRefresh();
                 }}/>,
          <Scene key="restaurantvisitscountUpdate" component={Update}
                 title="Update RestaurantVisitsCount"/>,
];
