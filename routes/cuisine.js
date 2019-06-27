import React from 'react';
import { Scene, Actions } from 'react-native-router-flux';
import List from '../components/cuisine/List';
import Create from '../components/cuisine/Create';
import Show from '../components/cuisine/Show';
import Update from '../components/cuisine/Update';
import {delayRefresh} from '../utils/helpers';

export default [
          <Scene
              rightTitle="Add"
              onRight={() => Actions.cuisineCreate()}
              key="cuisineList" component={List}
              title="List of Cuisines"
              initial
          />,
          <Scene key="cuisineCreate" component={Create}
                 title="Add a new cuisine"/>,
          <Scene key="cuisineShow" component={Show}
                 title="Cuisine"
                 leftTitle="< List of Cuisines"
                 onLeft={() => {
                   Actions.pop();
                   delayRefresh();
                 }}/>,
          <Scene key="cuisineUpdate" component={Update}
                 title="Update Cuisine"/>,
];
