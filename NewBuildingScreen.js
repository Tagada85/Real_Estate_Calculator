import React from 'react'
import { Text, View, TextInput, Button } from 'react-native'
import Label from './components/Label'
import styles from './styles.js'

export default class NewBuildingScreen extends React.Component {
  constructor( props ){
    super( props )
    this.state = {
      buildingName: '',
      capitalisation: 0,
      rents: 0,
      url: '',
      value: 0
    }
  }

  saveBuilding = () => {
    
  }

  handleRentsChange = rents => {
    const capitalisationInt = (parseInt(rents) / this.state.price * 100).toFixed(3)
    const valueInt = (parseInt(rents) / (capitalisationInt / 100 ) ).toFixed(2)

    const capitalisation = String(capitalisationInt)
    const value = String(valueInt)
    this.setState({rents, capitalisation, value})
  }
  render(){
    return (
      <View>
        <Text style={styles.h1}>New Building Informations</Text>

        <TextInput
          placeholder='Building ID'
          style={styles.input}
          value={this.state.buildingName}
          onChangeText={buildingName => this.setState({buildingName})} />

        <TextInput
          placeholder='Price in € '
          keyboardType='numeric'
          style={styles.input}
          value={this.state.price}
          onChangeText={price => this.setState({price})} />

        <TextInput
          placeholder='What flats are there?'
          style={styles.input}
          value={this.state.flats}
          onChangeText={flats => this.setState({flats})} />

        <TextInput
          placeholder='Annual rents in €'
          style={styles.input}
          keyboardType='numeric'
          value={this.state.rents}
          onChangeText={this.handleRentsChange} />

        <TextInput
          placeholder='A url'
          style={styles.input}
          value={this.state.url}
          onChangeText={url => this.setState({url})} />

        <Label text='Capitalisation Rate (%):' />
        <TextInput
          placeholder='Capitalisation rate in %'
          style={styles.input}
          value={this.state.capitalisation}/>

        <Label text='Estimate Building value:' />
        <TextInput
          style={styles.input}
          value={this.state.value} />
        
        <Button
          title='Save Building'
          onPress={this.saveBuilding} />

      </View>
    )
  }
}