import React from 'react';
import { Scene, Actions } from 'react-native-router-flux';
import List from '../components/province/List';
import Create from '../components/province/Create';
import Show from '../components/province/Show';
import Update from '../components/province/Update';
import {delayRefresh} from '../utils/helpers';

export default [
          <Scene
              rightTitle="Add"
              onRight={() => Actions.provinceCreate()}
              key="provinceList" component={List}
              title="List of Provinces"
              initial
          />,
          <Scene key="provinceCreate" component={Create}
                 title="Add a new province"/>,
          <Scene key="provinceShow" component={Show}
                 title="Province"
                 leftTitle="< List of Provinces"
                 onLeft={() => {
                   Actions.pop();
                   delayRefresh();
                 }}/>,
          <Scene key="provinceUpdate" component={Update}
                 title="Update Province"/>,
];
