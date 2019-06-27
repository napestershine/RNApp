import React from 'react';
import { Scene, Actions } from 'react-native-router-flux';
import List from '../components/restaurantphoto/List';
import Create from '../components/restaurantphoto/Create';
import Show from '../components/restaurantphoto/Show';
import Update from '../components/restaurantphoto/Update';
import {delayRefresh} from '../utils/helpers';

export default [
          <Scene
              rightTitle="Add"
              onRight={() => Actions.restaurantphotoCreate()}
              key="restaurantphotoList" component={List}
              title="List of RestaurantPhotos"
              initial
          />,
          <Scene key="restaurantphotoCreate" component={Create}
                 title="Add a new restaurantphoto"/>,
          <Scene key="restaurantphotoShow" component={Show}
                 title="RestaurantPhoto"
                 leftTitle="< List of RestaurantPhotos"
                 onLeft={() => {
                   Actions.pop();
                   delayRefresh();
                 }}/>,
          <Scene key="restaurantphotoUpdate" component={Update}
                 title="Update RestaurantPhoto"/>,
];
