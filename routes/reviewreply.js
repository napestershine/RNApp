import React from 'react';
import { Scene, Actions } from 'react-native-router-flux';
import List from '../components/reviewreply/List';
import Create from '../components/reviewreply/Create';
import Show from '../components/reviewreply/Show';
import Update from '../components/reviewreply/Update';
import {delayRefresh} from '../utils/helpers';

export default [
          <Scene
              rightTitle="Add"
              onRight={() => Actions.reviewreplyCreate()}
              key="reviewreplyList" component={List}
              title="List of ReviewReplys"
              initial
          />,
          <Scene key="reviewreplyCreate" component={Create}
                 title="Add a new reviewreply"/>,
          <Scene key="reviewreplyShow" component={Show}
                 title="ReviewReply"
                 leftTitle="< List of ReviewReplys"
                 onLeft={() => {
                   Actions.pop();
                   delayRefresh();
                 }}/>,
          <Scene key="reviewreplyUpdate" component={Update}
                 title="Update ReviewReply"/>,
];
