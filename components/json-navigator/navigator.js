import { JsonPair } from "./internal"
import { View } from "react-native";

export function JsonNavigator({data, styles}) {
    if(data == null) {
        return (
            <View></View>
        );
    }

    return (
        <JsonPair name={null} value={data} level={0} styles={styles} isLast={true}></JsonPair>
    );
}