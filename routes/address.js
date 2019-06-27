import React from 'react';
import { Scene, Actions } from 'react-native-router-flux';
import List from '../components/address/List';
import Create from '../components/address/Create';
import Show from '../components/address/Show';
import Update from '../components/address/Update';
import {delayRefresh} from '../utils/helpers';

export default [
          <Scene
              rightTitle="Add"
              onRight={() => Actions.addressCreate()}
              key="addressList" component={List}
              title="List of Addresss"
              initial
          />,
          <Scene key="addressCreate" component={Create}
                 title="Add a new address"/>,
          <Scene key="addressShow" component={Show}
                 title="Address"
                 leftTitle="< List of Addresss"
                 onLeft={() => {
                   Actions.pop();
                   delayRefresh();
                 }}/>,
          <Scene key="addressUpdate" component={Update}
                 title="Update Address"/>,
];
