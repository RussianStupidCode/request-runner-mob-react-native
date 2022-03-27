import { JsonPair } from "../internal"
import { TouchableOpacity} from "react-native";


export function JsonArray({array, level, styles}) {
    return (
        <TouchableOpacity style={styles.objectContainer}>
            {array.map((el, index) => (
                    <JsonPair key={index} level={level} name={null} value={el} styles={styles} isLast={index === array.length - 1}>
                    </JsonPair>
                )
            )}
        </TouchableOpacity>
    );
}