import React from 'react';
import { Scene, Actions } from 'react-native-router-flux';
import List from '../components/menu/List';
import Create from '../components/menu/Create';
import Show from '../components/menu/Show';
import Update from '../components/menu/Update';
import {delayRefresh} from '../utils/helpers';

export default [
          <Scene
              rightTitle="Add"
              onRight={() => Actions.menuCreate()}
              key="menuList" component={List}
              title="List of Menus"
              initial
          />,
          <Scene key="menuCreate" component={Create}
                 title="Add a new menu"/>,
          <Scene key="menuShow" component={Show}
                 title="Menu"
                 leftTitle="< List of Menus"
                 onLeft={() => {
                   Actions.pop();
                   delayRefresh();
                 }}/>,
          <Scene key="menuUpdate" component={Update}
                 title="Update Menu"/>,
];
