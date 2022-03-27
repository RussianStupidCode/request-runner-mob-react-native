import { Text } from 'react-native';

export function JsonValueNumber ({value, level, style, serviceSymStyle}) {
    return (
        <Text style={style}> 
            {value}
        </Text>
    );
}