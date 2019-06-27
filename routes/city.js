import React from 'react';
import { Scene, Actions } from 'react-native-router-flux';
import List from '../components/city/List';
import Create from '../components/city/Create';
import Show from '../components/city/Show';
import Update from '../components/city/Update';
import {delayRefresh} from '../utils/helpers';

export default [
          <Scene
              rightTitle="Add"
              onRight={() => Actions.cityCreate()}
              key="cityList" component={List}
              title="List of Citys"
              initial
          />,
          <Scene key="cityCreate" component={Create}
                 title="Add a new city"/>,
          <Scene key="cityShow" component={Show}
                 title="City"
                 leftTitle="< List of Citys"
                 onLeft={() => {
                   Actions.pop();
                   delayRefresh();
                 }}/>,
          <Scene key="cityUpdate" component={Update}
                 title="Update City"/>,
];
