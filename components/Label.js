import React from 'react'
import { Text } from 'react-native'
import styles from '../styles.js'

const Label = props => (
  <Text style={styles.label}>{props.text}</Text>
)

export default Label