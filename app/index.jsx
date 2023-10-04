import { Text, TextInput, StyleSheet, View } from 'react-native';
import { Link } from 'expo-router';

export default function page() {
    return <View>
        <Link href="/about">about</Link>
        <Link href="/posts">posts</Link>
        <Text style={styles.heading}>Welcome to my App</Text>
        <TextInput placeholder='Enter your name' />
    </View>
}

const styles = StyleSheet.create({
    heading: {
        color: 'red'
    }
})