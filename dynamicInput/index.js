import {
  View,
  Text,
  TextInput,
  ScrollView,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";

const CloseIcon = ({ height, color }) => {
  return (
    <View style={{ flexDirection: "row" }}>
      <View
        style={{
          width: 1.5,
          height: height ?? 12,
          backgroundColor: color ?? "white",
          transform: [{ rotate: "45deg" }],
        }}
      ></View>
      <View
        style={{
          width: 1.5,
          height: height ?? 12,
          backgroundColor: color ?? "white",
          marginLeft: -2,
          transform: [{ rotate: "-45deg" }],
        }}
      ></View>
    </View>
  );
};

const DynamicInput = ({
  style,
  textStyle,
  placeholder,
  set,
  data,
  placeholderStyle,
  roundedItem,
  itemColor,
  btnHeight,
  btnColor,
}) => {
  const [input, setInput] = useState("");

  if (set === undefined || set === null) {
    throw "set can't be null or undefined";
  } else if (data === undefined || data === null) {
    throw "data can't be null or undefined";
  }

  return (
    <View
      style={{
        backgroundColor: "#262626",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 10,
        borderRadius: 0,
        width: "100%",
        height: 56,
        ...style,
      }}
    >
      <ScrollView
        style={{ minWidth: "100%", height: "100%" }}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      >
        {data?.length > 0 && (
          <View
            style={{
              flexDirection: "row",
              marginEnd: 10,
              alignItems: "center",
            }}
          >
            {data?.map((item, index) => {
              return (
                <View
                  key={index}
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    marginHorizontal: 5,
                    backgroundColor: itemColor ?? "#333333",
                    borderRadius: roundedItem ?? 10,
                    paddingVertical: 8,
                    paddingHorizontal: 15,
                    marginVertical: 5,
                  }}
                >
                  <Text style={{ color: "#FFF", ...textStyle }}>{item}</Text>
                  <TouchableOpacity
                    style={{
                      backgroundColor: "transparent",
                      marginLeft: 10,
                      width: 15,
                      height: 15,
                      flexDirection: "row",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                    onPress={() => {
                      console.log("sdasdasd");
                      set((preVal) => preVal.filter((i) => i !== item));
                    }}
                  >
                    <CloseIcon color={btnColor} height={btnHeight} />
                  </TouchableOpacity>
                </View>
              );
            })}
          </View>
        )}
        <TextInput
          value={input}
          style={{
            color: "#FFF",
            minWidth: Dimensions.get("window").width / 2,
            height: "100%",
            ...textStyle,
          }}
          placeholder={placeholder}
          placeholderStyle={{ ...placeholderStyle }}
          placeholderTextColor={placeholderStyle?.color ?? "#FFF"}
          onChangeText={(text) => {
            setInput(text);
          }}
          onSubmitEditing={(e) => {
            if (input?.length > 0) {
              set((preVal) => [...preVal, input]);
              setInput("");
            }
          }}
        />
      </ScrollView>
    </View>
  );
};

export default DynamicInput;
