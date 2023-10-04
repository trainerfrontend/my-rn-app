import { Text, StyleSheet, View } from 'react-native';
import { Link } from 'expo-router';

const ListItem = ({ listItem }) => {
    return <View>
        <Link href={`/${listItem.id}`}><Text style={styles.heading}>{listItem.name}</Text></Link>
        <Text style={styles.subheading}>{listItem.email}</Text>
    </View>
}

const styles = StyleSheet.create({
    heading: {
        color: 'blue',
        fontSize: 24
    },
    subheading: {
        color: '#999',
        fontSize: 18,
        marginBottom: 15
    }
})

export default ListItem
