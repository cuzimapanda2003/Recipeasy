import { View, TextInput, Button, Text } from 'react-native';
import RadioGroup from 'react-native-radio-buttons-group';
import { Picker } from '@react-native-picker/picker';
import { styles } from '../styles';

export default function RecettePage() {

  const options = [
    { id: '1', label: 'Breakfast', value: '1', color: 'white', labelStyle: { color: 'white' } },
    { id: '2', label: 'Lunch', value: '2', color: 'white', labelStyle: { color: 'white' } },
    { id: '3', label: 'Dinner', value: '3', color: 'white', labelStyle: { color: 'white' } },
  ];

  return (
    <View style={[styles.container, { justifyContent: 'top' }]}>
      <RadioGroup radioButtons={options} layout='row' />

      <TextInput
        placeholderTextColor='white'
        style={{ borderColor: 'white', borderWidth: 1, margin: 10, height: 50, width: 350, paddingLeft: 5 }}
        placeholder='Name'
      />

      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Text style={{ color: 'white' }}>Duration : </Text>
        <Picker style={{ color: 'white', width: 100, backgroundColor: '#377e7f' }}>
          <Picker.Item label="0h" value="1" />
          <Picker.Item label="1h" value="2" />
        </Picker>
        <Text style={{ color: 'white' }}> : </Text>
        <Picker style={{ color: 'white', width: 120, backgroundColor: '#377e7f' }}>
          <Picker.Item label="0mins" value="1" />
          <Picker.Item label="1mins" value="2" />
          <Picker.Item label="2mins" value="3" />
          <Picker.Item label="3mins" value="4" />
        </Picker>
      </View>

      <TextInput
        placeholderTextColor='white'
        multiline={true}
        textAlignVertical='top'
        style={{ borderColor: 'white', borderWidth: 1, margin: 10, height: 500, width: 350, paddingLeft: 5 }}
        placeholder='Description'
      />

      <View style={{ paddingTop: 50 }}>
        <Button title='save' color={'orange'} />
      </View>
    </View>
  );
}