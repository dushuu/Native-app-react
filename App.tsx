import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import React from 'react';
import FlatCards from './components/Flatcards/flat-card';
import ElevatedCards from './components/ElevatedCards/ElevatedCards';
import FancyCards from './components/Fancy cars/fancy-cards';
import ActionCards from './components/Actioncards/ActionCards';

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <FlatCards />
        <ElevatedCards/>
        <FancyCards/>
        <ActionCards/>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
