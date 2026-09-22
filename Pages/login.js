import { View, TextInput, Button, Text, Pressable } from 'react-native';
import { styles } from '../styles';

function Field({ label }) {
  return (
    <TextInput
      placeholderTextColor='white'
      style={{ borderColor: 'white', borderWidth: 1, margin: 10, color: 'white', height: 50, paddingLeft: 5, width: '100%' }}
      placeholder={label}
    />
  );
}

export default function LoginPage() {
  const fields = ['Username', 'Password'];
  return (
    <View style={[styles.container, { alignItems: 'center' }]}>
      <View style={{ width: 500, maxWidth: '50%' }}>
        {fields.map((f, i) => <Field key={i} label={f} />)}
      </View>
      <View style={{ paddingTop: 15 }}>
        <Button title='login' color={'orange'} />
      </View>
      <Pressable>
        <Text style={{ color: 'blue', marginTop: 50 }}>Sign up!</Text>
      </Pressable>
    </View>
  );
}