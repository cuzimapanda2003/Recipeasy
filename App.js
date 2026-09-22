import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './styles';
import LoginPage from './Pages/login';
import SignupPage from './Pages/singup';
import RecettePage from './Pages/recipe';

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={[styles.container, { alignItems: 'center' }]}>
        <LoginPage />
        {/* <SignupPage /> */}
        {/* <RecettePage /> */}
      </SafeAreaView>
    </SafeAreaProvider>
  );
}