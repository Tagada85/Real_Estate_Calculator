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
    const capitalisationInt = (parseInt(rents) * 12 / this.state.price * 100).toFixed(3)
    const valueInt = (parseInt(rents) * 12 / (capitalisationInt / 100 ) ).toFixed(2)

    const capitalisation = String(capitalisationInt) + '%'
    const value = String(valueInt) + '€'
    this.setState({rents, capitalisation, value})
  }
  render(){
    return (
      <View>
        <Text style={styles.h1}>New Building Informations</Text>

        <Label text='Building Name:'/>
        <TextInput
          style={styles.input}
          value={this.state.buildingName}
          onChangeText={buildingName => this.setState({buildingName})} />

        <Label text='Price:' />
        <TextInput
          keyboardType='numeric'
          style={styles.input}
          value={this.state.price}
          onChangeText={price => this.setState({price})} />

        <Label text='Flats Informations:' />
        <TextInput
          style={styles.input}
          value={this.state.flats}
          onChangeText={flats => this.setState({flats})} />

        <Label text='Monthly Rents:' />
        <TextInput
          style={styles.input}
          keyboardType='numeric'
          value={this.state.rents}
          onChangeText={this.handleRentsChange} />

        <Label text='URL:' />
        <TextInput
          style={styles.input}
          value={this.state.url}
          onChangeText={url => this.setState({url})} />

        <Label text='Capitalisation Rate (%):' />
        <TextInput
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