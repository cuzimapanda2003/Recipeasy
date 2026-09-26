import { useLayoutEffect } from 'react';
import { View, TextInput, Button, Text, Pressable } from 'react-native';
import { styles } from '../styles';

export default function RecipeList({ navigation }) {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => null,
      headerBackVisible: false,
      gestureEnabled: false,
      headerRight: () => (
        <Pressable
          onPress={() => navigation.reset({ index: 0, routes: [{ name: 'login' }] })}
          style={{ marginRight: 15 }}
        >
          <Text style={{ color: 'black' }}>Log out</Text>
        </Pressable>
      ),
    });
  }, [navigation]);

  return (
    <View style={[styles.container, { alignItems: 'center' }]}>
        <Text>No recipe yet</Text>

        <Pressable
        style={{
          position: 'absolute',
          bottom: 20,
          right: 20,
          width: 45,
          height: 45,
          borderRadius: 25,
          backgroundColor: 'orange',
          justifyContent: 'center',
          alignItems: 'center',
          elevation: 5,
        }}
        onPress={() => navigation.navigate('add recipe')}
      >
        <Text style={{ color: 'white', fontSize: 24 }}>+</Text>
      </Pressable>
    </View>
  );
}