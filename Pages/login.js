import { View, TextInput, Button, Text, Pressable } from 'react-native';
import { styles } from '../styles';

function Field({ label }) {
  return (
    <View>
      <TextInput
        placeholderTextColor='white'
        style={{ borderColor: 'white', borderWidth: 1, margin: 10, color: 'white', height: 50, paddingLeft: 5, width: 200 }}
        placeholder={label}
      />
    </View>
  );
}

export default function LoginPage() {
  const fields = ['Username', 'Password'];
  return (
    <View style={[styles.container, { alignItems: 'center' }]}>
      {fields.map((f, i) => <Field key={i} label={f} />)}

      <View style={{ paddingTop: 15 }}>
        <Button title='login' color={'orange'} />
      </View>

      <Pressable>
        <Text style={{ color: 'blue', marginTop: 50 }}>Sign up!</Text>
      </Pressable>
    </View>
  );
}