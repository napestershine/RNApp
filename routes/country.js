import React from 'react';
import { Scene, Actions } from 'react-native-router-flux';
import List from '../components/country/List';
import Create from '../components/country/Create';
import Show from '../components/country/Show';
import Update from '../components/country/Update';
import {delayRefresh} from '../utils/helpers';

export default [
          <Scene
              rightTitle="Add"
              onRight={() => Actions.countryCreate()}
              key="countryList" component={List}
              title="List of Countrys"
              initial
          />,
          <Scene key="countryCreate" component={Create}
                 title="Add a new country"/>,
          <Scene key="countryShow" component={Show}
                 title="Country"
                 leftTitle="< List of Countrys"
                 onLeft={() => {
                   Actions.pop();
                   delayRefresh();
                 }}/>,
          <Scene key="countryUpdate" component={Update}
                 title="Update Country"/>,
];
