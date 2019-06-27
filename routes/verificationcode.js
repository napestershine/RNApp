import React from 'react';
import { Scene, Actions } from 'react-native-router-flux';
import List from '../components/verificationcode/List';
import Create from '../components/verificationcode/Create';
import Show from '../components/verificationcode/Show';
import Update from '../components/verificationcode/Update';
import {delayRefresh} from '../utils/helpers';

export default [
          <Scene
              rightTitle="Add"
              onRight={() => Actions.verificationcodeCreate()}
              key="verificationcodeList" component={List}
              title="List of VerificationCodes"
              initial
          />,
          <Scene key="verificationcodeCreate" component={Create}
                 title="Add a new verificationcode"/>,
          <Scene key="verificationcodeShow" component={Show}
                 title="VerificationCode"
                 leftTitle="< List of VerificationCodes"
                 onLeft={() => {
                   Actions.pop();
                   delayRefresh();
                 }}/>,
          <Scene key="verificationcodeUpdate" component={Update}
                 title="Update VerificationCode"/>,
];
