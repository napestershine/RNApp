import React from 'react';
import { Scene, Actions } from 'react-native-router-flux';
import List from '../components/contactus/List';
import Create from '../components/contactus/Create';
import Show from '../components/contactus/Show';
import Update from '../components/contactus/Update';
import {delayRefresh} from '../utils/helpers';

export default [
          <Scene
              rightTitle="Add"
              onRight={() => Actions.contactusCreate()}
              key="contactusList" component={List}
              title="List of ContactUss"
              initial
          />,
          <Scene key="contactusCreate" component={Create}
                 title="Add a new contactus"/>,
          <Scene key="contactusShow" component={Show}
                 title="ContactUs"
                 leftTitle="< List of ContactUss"
                 onLeft={() => {
                   Actions.pop();
                   delayRefresh();
                 }}/>,
          <Scene key="contactusUpdate" component={Update}
                 title="Update ContactUs"/>,
];
