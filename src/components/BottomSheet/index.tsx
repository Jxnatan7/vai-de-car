import React, { useCallback, useEffect } from "react";
import { Dimensions, TouchableOpacity } from "react-native";
import { Box, ThemeProps } from "../../theme";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import Animated, { Extrapolation, interpolate, useAnimatedStyle, useSharedValue, withSpring } from "react-native-reanimated";
import { useTheme } from "@shopify/restyle";
import { BottomSheetProps } from "../../@types/BottomSheetProps";

const { height: SCREEN_HEIGHT } = Dimensions.get("window");

const MAX_TRANSLATE_Y = -SCREEN_HEIGHT + 350;

export function BottomSheet({ children }: BottomSheetProps) {
    const theme = useTheme<ThemeProps>();

    const translateY = useSharedValue(-190);

    const scrollTo = useCallback((destination: number) => {
        "worklet";
        translateY.value = withSpring(destination, { damping: 50 });
    }, []);

    const context = useSharedValue({ y: -190 });

    const gesture = Gesture.Pan().onStart(() => {
        context.value = { y: translateY.value };
    }).onUpdate((event) => {
        translateY.value = event.translationY + context.value.y;
        translateY.value = Math.max(translateY.value, MAX_TRANSLATE_Y);
    }).onEnd(() => {
        if (translateY.value > -SCREEN_HEIGHT / 3) {
            scrollTo(-190);
        } else if (translateY.value < -SCREEN_HEIGHT / 2.99) {
            scrollTo(MAX_TRANSLATE_Y);
        }
    });

    useEffect(() => {
        scrollTo(-190);
    }, []);

    const BottomSheetStyle = useAnimatedStyle(() => {

        const borderRadius = interpolate(
            translateY.value,
            [MAX_TRANSLATE_Y + 50, MAX_TRANSLATE_Y],
            [25, 5],
            Extrapolation.CLAMP
        );

        return {
            borderRadius,
            transform: [{ translateY: translateY.value }]
        }
    });

    return (
        <GestureDetector gesture={gesture}>
            <Animated.View style={[{
                backgroundColor: theme.colors.bg_light,
                borderRadius: 25,
                width: "99%",
                height: SCREEN_HEIGHT,
                top: SCREEN_HEIGHT,
                borderWidth: 1,
                borderColor: theme.colors.dark_gray,
                paddingHorizontal: theme.spacing.l
            }, BottomSheetStyle]}>
                <TouchableOpacity activeOpacity={0.7} onPress={() => scrollTo(translateY.value === MAX_TRANSLATE_Y ? -190 : MAX_TRANSLATE_Y)}>
                    <Box
                        width={75}
                        height={4}
                        bg="dark_gray"
                        alignSelf="center"
                        marginVertical="m"
                        borderRadius={2}
                    />
                </TouchableOpacity>
                {children}
            </Animated.View>
        </GestureDetector>
    );
}