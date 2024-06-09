import { View, Text, ScrollView } from 'react-native'
import React from 'react'

const HomeScreen = () => {
 const renderWeeks = numWeeks => {
    let weeks = []
    for(let i=0; i<numWeeks; i++){
        weeks.push(
            <View>
                <Text></Text>
            </View>
        )
    }

 }

  return (
    <ScrollView >
      <View style={{flex: 1 , padding: 12}}>
        {renderWeeks}
      </View>
    </ScrollView>
  )
}

export default HomeScreen