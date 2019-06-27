import React from 'react';
import { Scene, Actions } from 'react-native-router-flux';
import List from '../components/food/List';
import Create from '../components/food/Create';
import Show from '../components/food/Show';
import Update from '../components/food/Update';
import {delayRefresh} from '../utils/helpers';

export default [
          <Scene
              rightTitle="Add"
              onRight={() => Actions.foodCreate()}
              key="foodList" component={List}
              title="List of Foods"
              initial
          />,
          <Scene key="foodCreate" component={Create}
                 title="Add a new food"/>,
          <Scene key="foodShow" component={Show}
                 title="Food"
                 leftTitle="< List of Foods"
                 onLeft={() => {
                   Actions.pop();
                   delayRefresh();
                 }}/>,
          <Scene key="foodUpdate" component={Update}
                 title="Update Food"/>,
];
