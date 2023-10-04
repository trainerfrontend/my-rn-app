import { Text, TextInput, StyleSheet, View, FlatList } from 'react-native';
import { Link } from 'expo-router';
import ListItem from '../components/ListItem';

const DATA = [
    {
        name: "Ron",
        dept: "HR",
        id: 1
    },

    {
        name: "Tom",
        dept: "IT",
        id: 2
    },
    {
        name: "Mary",
        dept: "HR",
        id: 3
    }
]

export default function page() {
    return <View>

        <Text style={styles.heading}>users</Text>
        <FlatList
            data={DATA}
            keyExtractor={item => item.id}
            renderItem={({ item }) => <ListItem listItem={item} />} />

    </View>
}

const styles = StyleSheet.create({
    heading: {
        color: 'red'
    }
})