import React from 'react';
import { Text, View, FlatList, Button } from 'react-native';
import styles from './styles'

export default class HomeScreen extends React.Component {
  constructor( props ){
    super( props )
    this.state = {

    }
  }

  openCalculator = item => {
    console.log(item)
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.h1}>Real Estate Calculator</Text>
        <Button
          color='green'
          title='+ New Building'
          onPress={() => 
            this.props.navigation.navigate('NewBuilding')}/>
        <Text style={styles.h2}>Buildings List</Text>
        <FlatList
          data={[
            {key: 'Building 1', type: '1 T2 / 2 T3'},
            {key: 'Building 2', type: '4 T3'}
          ]}
          renderItem={({ item }) => (
            <View>
              <Text>
                {item.key} || {item.type}</Text>
              <Button
                title='Calculator'
                onPress={() => this.openCalculator( item )}/>
            </View>
            
          )}/>
      </View>
    );
  }
}
