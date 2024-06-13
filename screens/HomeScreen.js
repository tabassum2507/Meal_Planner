import { View, Text, ScrollView } from 'react-native'
import React, { useState } from 'react'
import moment from 'moment'

const HomeScreen = () => {
 const currentDate = moment();
 const startOfWeek = currentDate.clone().startOf('week');
 const [date, setDate] = useState("")

 const openModal = date => {
  setDate(date.format('ddd') + ' ' + date.format('DD'));
  
  const nextDate = moment(date, 'ddd DD').add(1, 'day').format('ddd DD');
  setNextDate(nextDate);
  setModalVisible(!modalVisible);
};

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
        {/* {renderWeeks} */}
        <Text>Hello</Text>
      </View>
    </ScrollView>
  )
}

export default HomeScreen