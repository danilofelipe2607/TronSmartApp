import React from "react";

import { Button as ButtonNative, Icon, IButtonProps, Pressable } from "native-base";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";


export type CustomButtonProps = {
    label: string;
    iconRight?: string;
    iconLeft?: string;
    isLoading: boolean;
    isLoadingText?: string;
    onPressIcon?: () => void;
    iconColor?: string;

};

export type CombinedButtonProps = CustomButtonProps & IButtonProps;

export const ButtonForm: React.FC<CombinedButtonProps> = ({
    label,
    iconRight,
    iconLeft,
    isLoading,
    isLoadingText,
    onPressIcon,
    iconColor,
    ...buttonProps
}) => {


    const renderIcon = (iconName?: string) => {
        if (iconName)
            return (
                <Pressable onPress={onPressIcon}>
                    <Icon as={<MaterialIcons
                        name={iconName}
                    />} size={7} mr="2" ml={2} color={iconColor || "muted.400"} />
                </Pressable>
            )
    }

    return (
        <ButtonNative
            rounded="full"
            {...buttonProps}
            isLoading={isLoading}
            isLoadingText={isLoadingText ? isLoadingText : label}
            endIcon={renderIcon(iconRight)}
            leftIcon={renderIcon(iconLeft)}
        >
            {label}
        </ButtonNative>
    );
};
