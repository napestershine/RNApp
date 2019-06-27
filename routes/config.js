import React from 'react';
import { Scene, Actions } from 'react-native-router-flux';
import List from '../components/config/List';
import Create from '../components/config/Create';
import Show from '../components/config/Show';
import Update from '../components/config/Update';
import {delayRefresh} from '../utils/helpers';

export default [
          <Scene
              rightTitle="Add"
              onRight={() => Actions.configCreate()}
              key="configList" component={List}
              title="List of Configs"
              initial
          />,
          <Scene key="configCreate" component={Create}
                 title="Add a new config"/>,
          <Scene key="configShow" component={Show}
                 title="Config"
                 leftTitle="< List of Configs"
                 onLeft={() => {
                   Actions.pop();
                   delayRefresh();
                 }}/>,
          <Scene key="configUpdate" component={Update}
                 title="Update Config"/>,
];
