import React from 'react';
import { Scene, Actions } from 'react-native-router-flux';
import List from '../components/foodcategory/List';
import Create from '../components/foodcategory/Create';
import Show from '../components/foodcategory/Show';
import Update from '../components/foodcategory/Update';
import {delayRefresh} from '../utils/helpers';

export default [
          <Scene
              rightTitle="Add"
              onRight={() => Actions.foodcategoryCreate()}
              key="foodcategoryList" component={List}
              title="List of FoodCategorys"
              initial
          />,
          <Scene key="foodcategoryCreate" component={Create}
                 title="Add a new foodcategory"/>,
          <Scene key="foodcategoryShow" component={Show}
                 title="FoodCategory"
                 leftTitle="< List of FoodCategorys"
                 onLeft={() => {
                   Actions.pop();
                   delayRefresh();
                 }}/>,
          <Scene key="foodcategoryUpdate" component={Update}
                 title="Update FoodCategory"/>,
];
