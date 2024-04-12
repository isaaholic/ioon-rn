
# ioon-rn-DynamicInput

Dynamic Input Component for Modern React Native Applications




[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)


## Installation

Install ioon-rn-dynamicinput with npm

```bash
  npm i ioon-rn-dynamicinput
```

and import

```javascript
import { useState } from "react";
import { View } from "react-native";
import DynamicInput from "ioon-rn-dynamicinput";

export default function App() {
  const [data, setData] = useState([]);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: 25,
      }}
    >
      <DynamicInput placeholder="Some text..." set={setData} data={data} />
    </View>
  );
}
```
## Demo

![demo1](https://i.ibb.co/bv7DBD5/photo-2024-04-12-13-57-42.jpg)
![demo2](https://i.ibb.co/N6JRzXb/photo-2024-04-12-13-57-38.jpg)


## Props

| style       | StyleProp              | Style of View                    |
|-------------|------------------------|----------------------------------|
| textStyle   | StyleProp              | Style of Text of Dynamic Input   |
| placeholder | string                 | placeholder of Text              |
| data        | array (useState)       | State of Dynamic Data            |
| set         | function (useState)    | Function used to update the data |
| roundedItem | AnimatableNumericValue | Border Radius of Dynamic Item    |
| itemColor   | ColorValue             | Background Color of Dynamic Item |
| btnHeight   | DimensionValue         | Height of Close Button           |
| btnColor    | ColorValue             | Color of Close Button            |

## Authors

- [@isaaholic](https://www.github.com/isaaholic)


## License

[MIT](https://choosealicense.com/licenses/mit/)

