import React from 'react';
import { Scene, Actions } from 'react-native-router-flux';
import List from '../components/tag/List';
import Create from '../components/tag/Create';
import Show from '../components/tag/Show';
import Update from '../components/tag/Update';
import {delayRefresh} from '../utils/helpers';

export default [
          <Scene
              rightTitle="Add"
              onRight={() => Actions.tagCreate()}
              key="tagList" component={List}
              title="List of Tags"
              initial
          />,
          <Scene key="tagCreate" component={Create}
                 title="Add a new tag"/>,
          <Scene key="tagShow" component={Show}
                 title="Tag"
                 leftTitle="< List of Tags"
                 onLeft={() => {
                   Actions.pop();
                   delayRefresh();
                 }}/>,
          <Scene key="tagUpdate" component={Update}
                 title="Update Tag"/>,
];
