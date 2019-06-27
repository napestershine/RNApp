import React from 'react';
import { Scene, Actions } from 'react-native-router-flux';
import List from '../components/menucategory/List';
import Create from '../components/menucategory/Create';
import Show from '../components/menucategory/Show';
import Update from '../components/menucategory/Update';
import {delayRefresh} from '../utils/helpers';

export default [
          <Scene
              rightTitle="Add"
              onRight={() => Actions.menucategoryCreate()}
              key="menucategoryList" component={List}
              title="List of MenuCategorys"
              initial
          />,
          <Scene key="menucategoryCreate" component={Create}
                 title="Add a new menucategory"/>,
          <Scene key="menucategoryShow" component={Show}
                 title="MenuCategory"
                 leftTitle="< List of MenuCategorys"
                 onLeft={() => {
                   Actions.pop();
                   delayRefresh();
                 }}/>,
          <Scene key="menucategoryUpdate" component={Update}
                 title="Update MenuCategory"/>,
];
