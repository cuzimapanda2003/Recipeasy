import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, TextInput, Button, Text, Pressable} from 'react-native';



function Field({label,})
{
  return(
  <View>
    <TextInput style = { {borderColor: 'white', borderWidth: 1, margin: 10, color: 'white',} } placeholder={label}></TextInput>
  </View>
  )
}


export default function App() {
  const fields = [
    'Username',
    'Password',
  ]

   return (
      <View style={[styles.container ,{alignItems: 'center',}] }> 
  
        {fields.map(f => <Field label={f}/>)}

        <Button title='login' color={"orange"}/>
        
        <Pressable>
        <Text style={ {color: 'blue',marginTop: 50} }>Sign up!</Text>
        </Pressable>
  
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
