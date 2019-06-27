import React from 'react';
import { Scene, Actions } from 'react-native-router-flux';
import List from '../components/language/List';
import Create from '../components/language/Create';
import Show from '../components/language/Show';
import Update from '../components/language/Update';
import {delayRefresh} from '../utils/helpers';

export default [
          <Scene
              rightTitle="Add"
              onRight={() => Actions.languageCreate()}
              key="languageList" component={List}
              title="List of Languages"
              initial
          />,
          <Scene key="languageCreate" component={Create}
                 title="Add a new language"/>,
          <Scene key="languageShow" component={Show}
                 title="Language"
                 leftTitle="< List of Languages"
                 onLeft={() => {
                   Actions.pop();
                   delayRefresh();
                 }}/>,
          <Scene key="languageUpdate" component={Update}
                 title="Update Language"/>,
];
