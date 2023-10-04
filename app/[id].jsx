import { Text } from 'react-native';
import { useLocalSearchParams } from 'expo-router';

const Page = () => {
    const { id } = useLocalSearchParams();
    return <Text>user Detail page: {id}</Text>
}

export default Page