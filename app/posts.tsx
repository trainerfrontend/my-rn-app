import { Text, StyleSheet, View, FlatList } from 'react-native';
import { useEffect, useState } from 'react';
import ListItem from '../components/ListItem';
import { User } from '../interfaces/user';

// prop -> URL ->string

interface iPostPage {
    URL?: string
}

const Page: React.FC<iPostPage> = () => {

    const [users, setUsers] = useState<User[]>([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((response) => response.json())
            .then((data: User[]) => setUsers(data))
    }, [])


    return <View>

        <Text style={styles.heading}>users</Text>
        <FlatList
            data={users}
            keyExtractor={item => item.id + ""}
            renderItem={({ item }) => <ListItem listItem={item} />
            } />

    </View >
}

const styles = StyleSheet.create({
    heading: {
        color: 'red'
    }
})