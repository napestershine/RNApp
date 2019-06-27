import React from 'react';
import { Scene, Actions } from 'react-native-router-flux';
import List from '../components/issue/List';
import Create from '../components/issue/Create';
import Show from '../components/issue/Show';
import Update from '../components/issue/Update';
import {delayRefresh} from '../utils/helpers';

export default [
          <Scene
              rightTitle="Add"
              onRight={() => Actions.issueCreate()}
              key="issueList" component={List}
              title="List of Issues"
              initial
          />,
          <Scene key="issueCreate" component={Create}
                 title="Add a new issue"/>,
          <Scene key="issueShow" component={Show}
                 title="Issue"
                 leftTitle="< List of Issues"
                 onLeft={() => {
                   Actions.pop();
                   delayRefresh();
                 }}/>,
          <Scene key="issueUpdate" component={Update}
                 title="Update Issue"/>,
];
