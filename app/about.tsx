import { Text, ActivityIndicator, StyleSheet, View } from 'react-native';
import { Link} from 'expo-router';

export default function page() {
    return <View>
        <Text style={styles.heading}>About page</Text>
        <ActivityIndicator size="large" color="green" />
        <Link href="/contact">Contact</Link>
        <Link href="/users">Users</Link>
    </View>
}

const styles = StyleSheet.create({
    heading: {
        color: 'blue'
    }
})