import { Text } from 'react-native';

export function JsonValueString ({value, level, style, serviceSymStyle}) {
    return (
        <Text style={style}> 
            <Text style={serviceSymStyle}>"</Text>{value}<Text style={serviceSymStyle}>"</Text>
        </Text>
    );
}