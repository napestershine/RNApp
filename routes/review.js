import React from 'react';
import { Scene, Actions } from 'react-native-router-flux';
import List from '../components/review/List';
import Create from '../components/review/Create';
import Show from '../components/review/Show';
import Update from '../components/review/Update';
import {delayRefresh} from '../utils/helpers';

export default [
          <Scene
              rightTitle="Add"
              onRight={() => Actions.reviewCreate()}
              key="reviewList" component={List}
              title="List of Reviews"
              initial
          />,
          <Scene key="reviewCreate" component={Create}
                 title="Add a new review"/>,
          <Scene key="reviewShow" component={Show}
                 title="Review"
                 leftTitle="< List of Reviews"
                 onLeft={() => {
                   Actions.pop();
                   delayRefresh();
                 }}/>,
          <Scene key="reviewUpdate" component={Update}
                 title="Update Review"/>,
];
