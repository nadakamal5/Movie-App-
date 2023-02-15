import { Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export const Status = () => (
    <View
        style={{
            flex: 1,
            backgroundColor: '#000',
            alignItems: 'center',
            justifyContent: 'center',
        }}>
        <Text style={{ color: '#fff' }}>The status bar has light text!</Text>
        <StatusBar style="light" />
    </View>
);

