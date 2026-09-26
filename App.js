import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginPage from './Pages/login';
import SignupPage from './Pages/singup';
import AddRecipePage from './Pages/recipe';
import RecipeList from './Pages/recipeList';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="login">
          <Stack.Screen name="login" component={LoginPage} options={{ title: 'login' }} />
          <Stack.Screen name="singup" component={SignupPage} options={{ title: 'singup' }} />
          <Stack.Screen name="add recipe" component={AddRecipePage} options={{ title: 'add recipe' }} />
          <Stack.Screen name="recipe list" component={RecipeList} options={{title: 'recipe list'}}/>
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}