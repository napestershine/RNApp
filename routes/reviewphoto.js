import React from 'react';
import { Scene, Actions } from 'react-native-router-flux';
import List from '../components/reviewphoto/List';
import Create from '../components/reviewphoto/Create';
import Show from '../components/reviewphoto/Show';
import Update from '../components/reviewphoto/Update';
import {delayRefresh} from '../utils/helpers';

export default [
          <Scene
              rightTitle="Add"
              onRight={() => Actions.reviewphotoCreate()}
              key="reviewphotoList" component={List}
              title="List of ReviewPhotos"
              initial
          />,
          <Scene key="reviewphotoCreate" component={Create}
                 title="Add a new reviewphoto"/>,
          <Scene key="reviewphotoShow" component={Show}
                 title="ReviewPhoto"
                 leftTitle="< List of ReviewPhotos"
                 onLeft={() => {
                   Actions.pop();
                   delayRefresh();
                 }}/>,
          <Scene key="reviewphotoUpdate" component={Update}
                 title="Update ReviewPhoto"/>,
];
