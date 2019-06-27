import React from 'react';
import { Scene, Actions } from 'react-native-router-flux';
import List from '../components/foodsymbol/List';
import Create from '../components/foodsymbol/Create';
import Show from '../components/foodsymbol/Show';
import Update from '../components/foodsymbol/Update';
import {delayRefresh} from '../utils/helpers';

export default [
          <Scene
              rightTitle="Add"
              onRight={() => Actions.foodsymbolCreate()}
              key="foodsymbolList" component={List}
              title="List of FoodSymbols"
              initial
          />,
          <Scene key="foodsymbolCreate" component={Create}
                 title="Add a new foodsymbol"/>,
          <Scene key="foodsymbolShow" component={Show}
                 title="FoodSymbol"
                 leftTitle="< List of FoodSymbols"
                 onLeft={() => {
                   Actions.pop();
                   delayRefresh();
                 }}/>,
          <Scene key="foodsymbolUpdate" component={Update}
                 title="Update FoodSymbol"/>,
];
