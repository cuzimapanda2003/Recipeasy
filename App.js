import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, TextInput, Button, Text, Pressable} from 'react-native';
import RadioGroup from 'react-native-radio-buttons-group';
import { Picker } from '@react-native-picker/picker';


function Field({label,})
{
  return(
  <View>
    <TextInput style = { {borderColor: 'white', borderWidth: 1, margin: 10, color: 'white', height: 30, paddingLeft: 5,} } placeholder={label}></TextInput>
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
            value: '1'
        },
        {
            id: '2',
            label: 'Lunch',
            value: '2'
        },
        {
          id: '3',
          label: 'Dinner',
          value: '3'
        },
    ];

     return (

        <View style={[styles.container ,{justifyContent: 'top',}] } >
            <RadioGroup radioButtons={ options } layout='row'/>
             <TextInput style = { {borderColor: 'white', borderWidth: 1, margin: 10, color: 'white', height: 30,width: '90%' ,paddingLeft: 5,} } placeholder='Name'></TextInput>
        </View>
  

  
    )



}

export default function App() {

   return (
      <View style={[styles.container ,{alignItems: 'center',}] }> 
      {/* <LoginPage/> */}
      {/* <SignupPage/> */}
      <RecettePage/>
      
  
      </View>
    )
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#377e7f',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
