import { Text, TextInput, StyleSheet, View, FlatList } from 'react-native';

const ListItem = ({ listItem }) => {
    return <View>
        <Text>{listItem.name}</Text>
        <Text>{listItem.dept}</Text>
    </View>
}

export default ListItem
