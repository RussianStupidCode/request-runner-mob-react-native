import { JsonValueString } from "../internal";
import { JsonValueNull } from "../internal";
import { JsonValueBoolean } from "../internal";
import { JsonValueNumber } from "../internal";
import { JsonObject } from "../internal";
import { JsonArray } from "./array";

export function JsonValueCommon({value, level, styles}) {
    if(value == null) {
        return (
            <JsonValueNull level={level} style={styles.values.null} serviceSymStyle={styles.serviceSym}></JsonValueNull>
        );
    }

    if(Array.isArray(value)) {
        return (
            <JsonArray array={value} level={level} styles={styles}></JsonArray>
        );
    }

    const type = typeof(value);

    switch(type) {
        case "string":
            return (
                <JsonValueString value={value} level={level} style={styles.values.string} serviceSymStyle={styles.serviceSym}></JsonValueString>
            );
        case "boolean":
            return (
                <JsonValueBoolean value={value} level={level} style={styles.values.boolean} serviceSymStyle={styles.serviceSym}></JsonValueBoolean>
            );
        case "number":
            return (
                <JsonValueNumber value={value} level={level} style={styles.values.number} serviceSymStyle={styles.serviceSym}></JsonValueNumber>
            );
        case "object":
            return (
                <JsonObject object={value} level={level} styles={styles}></JsonObject>
            );
    }
    
}