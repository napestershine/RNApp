import React from 'react';
import { Scene, Actions } from 'react-native-router-flux';
import List from '../components/faq/List';
import Create from '../components/faq/Create';
import Show from '../components/faq/Show';
import Update from '../components/faq/Update';
import {delayRefresh} from '../utils/helpers';

export default [
          <Scene
              rightTitle="Add"
              onRight={() => Actions.faqCreate()}
              key="faqList" component={List}
              title="List of Faqs"
              initial
          />,
          <Scene key="faqCreate" component={Create}
                 title="Add a new faq"/>,
          <Scene key="faqShow" component={Show}
                 title="Faq"
                 leftTitle="< List of Faqs"
                 onLeft={() => {
                   Actions.pop();
                   delayRefresh();
                 }}/>,
          <Scene key="faqUpdate" component={Update}
                 title="Update Faq"/>,
];
