import { Text,Button, StyleSheet, View, TouchableHighlight, TouchableOpacity } from 'react-native';

export default function page() {
    const pressHandler = () => {
        console.log("you pressed a button")
    }
    return <View>
        <Text style={styles.heading}>Contact page</Text>
        <Button title="submit" onPress={pressHandler}/>

        <TouchableHighlight activeOpacity={0.6}
        underlayColor="red" onPress={pressHandler}>
            <Text>Touchable Highlight</Text>
        </TouchableHighlight>

        <TouchableOpacity onPress={pressHandler}>
            <Text>Touchable Opacity</Text>
        </TouchableOpacity>
    </View>
}

const styles = StyleSheet.create({
    heading: {
        color: 'blue'
    }
})