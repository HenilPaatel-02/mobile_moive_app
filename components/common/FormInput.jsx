import React from "react";
import { Controller } from "react-hook-form";
import { Text, TextInput, View } from "react-native";

const FormInput = ({
  control,
  name,
  rules = {},
  placeholder,
  secureTextEntry = false,
  keyboardType = "default",
  autoCapitalize = "none",
  style,
  errorStyle,
  inputStyle,
}) => {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({
        field: { onChange, onBlur, value },
        fieldState: { error },
      }) => (
        <View style={style}>
          <TextInput
            placeholder={placeholder}
            placeholderTextColor="#888"
            secureTextEntry={secureTextEntry}
            keyboardType={keyboardType}
            autoCapitalize={autoCapitalize}
            value={value}
            onChangeText={onChange}
            onBlur={onBlur}
            style={[inputStyle, error && { borderColor: "#E53935" }]}
          />

          {error && <Text style={errorStyle}>{error.message}</Text>}
        </View>
      )}
    />
  );
};

export default FormInput;
