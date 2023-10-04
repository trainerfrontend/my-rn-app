import { Text, TextInput, StyleSheet, View, FlatList } from 'react-native';
import { useEffect, useState } from 'react';
import { Link } from 'expo-router';


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
            renderItem={({ item }) => <View>

                <Link href={`/${item.id}`}><Text>{item.name}</Text></Link>
                <Text>{item.username}</Text>
            </View>
            } />

    </View >
}

const styles = StyleSheet.create({
    heading: {
        color: 'red'
    }
})