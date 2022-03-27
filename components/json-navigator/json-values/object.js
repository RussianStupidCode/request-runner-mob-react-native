import { JsonPair } from "../internal"
import { TouchableOpacity} from "react-native";


export function JsonObject({object, level, styles}) {
    const entries = Object.entries(object);

    return (
        <TouchableOpacity style={styles.objectContainer}>
            {entries.map(([name, value], index) => (
                    <JsonPair key={index} level={level} name={name} value={value} styles={styles} isLast={index === entries.length - 1}>
                    </JsonPair>
                )
            )}
        </TouchableOpacity>
    );
}