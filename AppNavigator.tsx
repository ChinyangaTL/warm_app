import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Tab1 from './screens/tab1';
import Tab2 from './screens/tab2';
import Tab3 from './screens/tab3';
import Tab4 from './screens/tab4';

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Tab1" component={Tab1} />
      <Tab.Screen name="Tab2" component={Tab2} />
      <Tab.Screen name="Tab3" component={Tab3} />
      <Tab.Screen name="Tab4" component={Tab4} />
    </Tab.Navigator>
  );
};

export default AppNavigator;
