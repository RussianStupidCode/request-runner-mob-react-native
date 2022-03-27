import {Text} from 'react-native';

export function JsonKey ({name, level, style, serviceSymStyle}) {
    if(name == null) {
        return <Text style={style}></Text>
    }

    return (
        <Text style={style}> 
            {name}<Text style={serviceSymStyle}>:</Text>
        </Text>
    );
}