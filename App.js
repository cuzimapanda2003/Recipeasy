import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, TextInput, Button, Text, Pressable} from 'react-native';
import RadioGroup from 'react-native-radio-buttons-group';
import { Picker } from '@react-native-picker/picker';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';


function Field({label,})
{
  return(
  <View>
    <TextInput placeholderTextColor='white' style = { {borderColor: 'white', borderWidth: 1, margin: 10, color: 'white', height: 50, paddingLeft: 5, width: 200} } placeholder={label}></TextInput>
  </View>
  )
}

// UI 1
function LoginPage()
{
  const fields = [
    'Username',
    'Password',
  ]
   return (
      <View style={[styles.container ,{alignItems: 'center',}] }> 
  
        {fields.map(f => <Field label={f}/>)}

        <View style={{paddingTop: 15}}>
            <Button title='login' color={"orange"}/>
        </View>

        <Pressable>
        <Text style={ {color: 'blue',marginTop: 50} }>Sign up!</Text>
        </Pressable>
  
      </View>
    )
}

// UI 2
function SignupPage(){
   const fields = [
    'Username',
    'Password',
    'Password confirmation'
  ]
   return (
      <View style={[styles.container ,{alignItems: 'center',}] }> 
  
        {fields.map(f => <Field label={f}/>)}

        <View style={{paddingTop: 15}}>
           <Button title='Create my account' color={"orange"}/>
        </View>
  
      </View>
    )
}

// UI 3
function RecettePage(){
      const options = [
        {
            id: '1',
            label: 'Breakfast',
            value: '1',
            color: 'white',
            labelStyle: { color: 'white' },
        },
        {
            id: '2',
            label: 'Lunch',
            value: '2',
            color: 'white',
            labelStyle: { color: 'white' },
        },
        {
          id: '3',
          label: 'Dinner',
          value: '3',
          color: 'white',
          labelStyle: { color: 'white' },
        },
    ];

     return (

        <View style={[styles.container ,{justifyContent: 'top'}] } >
            <RadioGroup  radioButtons={ options } layout='row'/>
             <TextInput
              placeholderTextColor='white'
               style = { {borderColor: 'white', borderWidth: 1, margin: 10, height: 50,width: '250' ,paddingLeft: 5,} }
                placeholder='Name'>
              </TextInput>

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
                style = { {borderColor: 'white', borderWidth: 1, margin: 10, height: 500,width: 350 ,paddingLeft: 5,} }
                placeholder='Description'>
              </TextInput>

              <View style={{paddingTop: 50}}>
               <Button title='save' color={"orange"}/>
              </View>

        </View>
  

  
    )



}

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={[styles.container, {alignItems: 'center'}]}>
        <LoginPage/>
        {/* <SignupPage/> */}
        {/* <RecettePage/> */}
      </SafeAreaView>
    </SafeAreaProvider>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#377e7f',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
