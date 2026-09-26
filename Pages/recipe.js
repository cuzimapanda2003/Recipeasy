import { View, TextInput, Button, Text } from 'react-native';
import RadioGroup from 'react-native-radio-buttons-group';
import { Picker } from '@react-native-picker/picker';
import { styles } from '../styles';
import { useState } from 'react';

const options = ['Breakfast', 'Lunch', 'Dinner'].map((label, index) => ({
  id: String(index + 1),
  label: label,
  value: String(index + 1),
  color: 'white',
  labelStyle: { color: 'white' },
}));


export default function RecettePage({navigation}) {

  const [selectedId, setSelectedId] = useState();

  return (
    
    <View style={[styles.container, { justifyContent: 'flex-start' }]}>

      <RadioGroup radioButtons={options} onPress={setSelectedId} selectedId={selectedId} layout='row'/>

      <TextInput
        placeholderTextColor='white'
        style={{ borderColor: 'white', borderWidth: 1, margin: 10, height: 50, maxHeight: '5%', width: 350,maxWidth: '80%', paddingLeft: 5,  color: 'white' }}
        placeholder='Name'
      />

      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Text style={{ color: 'white' }}>Duration : </Text>
        <Picker style={{ color: 'white', width: 110,maxWidth: '35%', backgroundColor: '#377e7f' }}>
          {Array.from({ length: 13 }, (_, i) => (
              <Picker.Item key={i} label={`${i}h`} value={i} />
          ))}
        </Picker>
        <Text style={{ color: 'white' }}> : </Text>
        <Picker style={{ color: 'white', width: 110,maxWidth: '35%', backgroundColor: '#377e7f' }}>
            {Array.from({ length: 60 }, (_, i) => (
              <Picker.Item key={i} label={`${i}mins`} value={i} />
            ))}
        </Picker>
      </View>

      <TextInput
        placeholderTextColor='white'
        multiline={true}
        textAlignVertical='top'
        style={{ borderColor: 'white', borderWidth: 1, margin: 10, height: 500, maxHeight: '80%' ,width: 350,maxWidth: '80%', paddingLeft: 5,  color: 'white' }}
        placeholder='Description'
      />

      <View style={{ paddingTop: 50 }}>
        <Button title='save' color={'orange'} onPress={() => navigation.popTo('recipe list')} />
      </View>
    </View>
  );
}