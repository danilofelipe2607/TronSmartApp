import React from "react";

import { Controller, FieldErrors, useForm } from "react-hook-form";
import {
  FormControl,
  Icon,
  Input as InputNative,
  IInputProps,
  Pressable,
} from "native-base";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { Text } from "react-native";

export type CombinedInputProps = IInputProps & CustomInputProps;

export type CustomInputProps = {
  placeholder?: string;
  label?: string;
  iconRight?: string;
  iconLeft?: string;
  iconColor?: string;
  controlForm?: any;
  name: string;
  defaultValue?: any;
  errors: FieldErrors;
  errorMessage?: string;
  required?: boolean;
  textRequired?: string;
  onPressIcon?: () => void;
};

export const InputForm: React.FC<CombinedInputProps> = ({
  placeholder,
  iconRight,
  iconLeft,
  controlForm,
  name,
  defaultValue,
  errors,
  required,
  textRequired,
  label,
  iconColor,
  onPressIcon,
  ...inputProps
}) => {
  const { control } = useForm();

  const renderIcon = (iconName?: string) => {
    if (iconName)
      return (
        <Pressable onPress={onPressIcon}>
          <Icon
            as={<MaterialIcons 
              name={iconName}
            />}
            size={7}
            mr="2"
            ml="2"
            color={iconColor || "muted.400"} />
        </Pressable>
      )
  }

  return (
    <FormControl isRequired={required} isInvalid={!!errors?.[name]?.message}>
      <FormControl.Label> <Text>{label} </Text></FormControl.Label>
      <Controller
        control={controlForm ? controlForm : control}
        render={({ field: { onChange, onBlur, value } }) => (
          <InputNative
            {...inputProps}
            onBlur={onBlur}
            placeholder={placeholder}
            onChangeText={(val) => onChange(val)}
            value={value}
            InputLeftElement={renderIcon(iconLeft)}
            InputRightElement={renderIcon(iconRight)}
          />
        )}
        name={name}
        rules={{ required: textRequired, minLength: 3 }}
        defaultValue={defaultValue}
      />
      <FormControl.ErrorMessage>
        {errors?.[name]?.message}
      </FormControl.ErrorMessage>
    </FormControl>
  );
};

