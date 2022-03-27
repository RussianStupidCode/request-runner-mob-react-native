import { StatusBar } from 'expo-status-bar';
import { useState } from 'react'
import { StyleSheet, Text, View, TextInput, Button} from 'react-native';
import { basicStyles } from './components/json-navigator/styles/defaults';
import { JsonNavigator } from './components/json-navigator/navigator'

function createRequest(options) {
  const url = options.url;
  const method = options.method;
  const callback = options.callback

  const xhr = new XMLHttpRequest();
  xhr.open(method, url);
  xhr.responseType = "text/html";
  xhr.send()

  xhr.addEventListener("readystatechange", event => {
    if(xhr.readyState === xhr.DONE) {
        const response = xhr.response;

        if(response == null) {
            callback("empty response");
            return 
        }
        callback(null, response);
    }
  });
}

function sendRequest(setText) {
  const options = {
    url: "https://superheroapi.com/api/2619421814940190/search/Hulk", 
    method: "GET",
    callback: (err, response) => {
      setText(err)
      if(err) {
        console.log(err);
      } else {
        console.log(response);
      }
    }
  };
  createRequest(options);
}

export default function App() {
  const [text, setText] = useState('');
  const [response, setResponse] = useState();

  const data={
    "arr": [{k: 1, l: true, h: {o: 2}}, {j: 2}],
    "key1": 22, 
    "key2": "qqq",
    "key3": 1.24,
    "key4": true,
    "key5": {
      n: 22,
      s: "hello",
      o: {
        ss: 123,
      }
    }
  }

  const arrayData = [
    {
      K: 1,
      o: {
        l: 2,
        j: 'str'
      }
    },
    {
      a: true,
      b: [1,2,3]
    }
  ]

  return (
    <View style={styles.container}>
    <JsonNavigator
          data={arrayData} 
          styles= { {
              objectContainer: styles.container,
              pairContainer: styles.jsonContainer,
              key: styles.jsonKey,
              values: {
                string: styles.jsonString,
                number: styles.jsonNumber,
                boolean: styles.jsonBoolean,
              },
              serviceSym: styles.serviceSym
            }
          }/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 0,
    padding: 0,
    fontSize: basicStyles.fontSize,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    lineHeight: basicStyles.lineHeight,
  },

  jsonContainer: {
    margin: 0,
    padding: 0,
    flexDirection: "row",
    lineHeight: basicStyles.lineHeight,
    fontSize: basicStyles.fontSize
  },
  jsonKey: {
    textAlignmentsVertical: "center",
    margin: 0,
    padding: 0,
    color: "#5F2580",
    marginRight: "10px",
    lineHeight: basicStyles.lineHeight,
    fontSize: basicStyles.fontSize,
    
  },
  jsonString: {
    margin: 0,
    padding: 0,
    color: "green",
    fontSize: basicStyles.fontSize,
  },
  jsonBoolean: {
    color: "#A68900",
    fontSize: basicStyles.fontSize
  },
  jsonNumber: {
    margin: 0,
    padding: 0,
    color: "#006363",
    fontSize: basicStyles.fontSize,
  },
  serviceSym: {
    margin: 0,
    padding: 0,
    color: "orange",
    fontSize: basicStyles.fontSize
  }
});
