import { Text, StyleSheet, View, FlatList } from 'react-native';
import { useEffect, useState } from 'react';
import ListItem from '../components/ListItem';


export default function page() {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((response) => response.json())
            .then((data) => setUsers(data))
    }, [])


    return <View>

        <Text style={styles.heading}>users</Text>
        <FlatList
            data={users}
            keyExtractor={item => item.id}
            renderItem={({ item }) => <ListItem listItem={item} />
            } />

    </View >
}

const styles = StyleSheet.create({
    heading: {
        color: 'red'
    }
})