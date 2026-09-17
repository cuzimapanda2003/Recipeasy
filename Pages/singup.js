import { View, TextInput, Button } from 'react-native';
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

export default function SignupPage() {
  const fields = ['Username', 'Password', 'Password confirmation'];
  return (
    <View style={[styles.container, { alignItems: 'center' }]}>
      {fields.map((f, i) => <Field key={i} label={f} />)}

      <View style={{ paddingTop: 15 }}>
        <Button title='Create my account' color={'orange'} />
      </View>
    </View>
  );
}