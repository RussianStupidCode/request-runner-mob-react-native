import { Text } from 'react-native';

export function JsonValueBoolean ({value, level, style, serviceSymStyle}) {
    return (
        <Text style={style}> 
            {value.toString()}
        </Text>
    );
}