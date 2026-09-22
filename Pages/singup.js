import { View, TextInput, Button } from 'react-native';
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

export default function SignupPage() {
  const fields = ['Username', 'Password', 'Password confirmation'];
  return (
    <View style={[styles.container, { alignItems: 'center' }]}>
      <View style={{ width: 500, maxWidth: '50%' }}>
        {fields.map((f, i) => <Field key={i} label={f} />)}

        <View style={{ paddingTop: 15, alignItems: 'center' }}>
          <Button title='Create my account' color={'orange'} />
        </View>
      </View>
    </View>
  );
}