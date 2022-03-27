import { TouchableOpacity, View, Text} from "react-native";
import {JsonValueCommon} from "./internal"
import {JsonKey} from "./internal";
import { basicStyles } from "./styles/defaults";

const JSON_BRACKETS = {
    array: {
        left: "[",
        right: "]"
    },
    object: {
        left: "{",
        right: "}"
    }
}

export function JsonPair ({name, value, level, styles, isLast}) {
    const type = typeof(value);

    const comma = isLast? "": ",";
    const paddingLeft = `${basicStyles.levelPaddingPx * level}px`
    // если ключа нет (для массивов объектов) нужно убрать отсуп и рендер ключа
    const keyStyle = name == null ? [styles.key, {marginRight: 0}]: styles.key;

    if(value != null && type !== "object") {
        return (
            <TouchableOpacity style={[styles.pairContainer, {paddingLeft: paddingLeft}]}>
                <JsonKey name={name} level={level} style={keyStyle} serviceSymStyle={styles.serviceSym}></JsonKey>
                <JsonValueCommon value={value} level={level} styles={styles}></JsonValueCommon>
                <Text style={styles.serviceSym}>{comma}</Text>
            </TouchableOpacity>       
        );
    }

    // если дошло до сюда значит это вложенный объект или массив
    const brackets = Array.isArray(value) ? JSON_BRACKETS.array: JSON_BRACKETS.object;
    const nextLevel = level + 1;

    return (
        <TouchableOpacity style={[styles.objectContainer]}>
            <View style={[styles.pairContainer, {paddingLeft: paddingLeft}]}> 
                <JsonKey name={name} level={level} style={keyStyle} serviceSymStyle={styles.serviceSym}></JsonKey>
                <Text style={styles.serviceSym}>{brackets.left}</Text>
            </View>

            <JsonValueCommon value={value} level={nextLevel} styles={styles}></JsonValueCommon>

            {/*т.к. идет следующий уровень вложенности надо добавить отсуп для ключа*/}
            <Text style={[styles.serviceSym, {paddingLeft: paddingLeft}]}>{brackets.right + comma}</Text>
        </TouchableOpacity>       
    );
}