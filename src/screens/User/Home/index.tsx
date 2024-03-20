import React from "react";
import { Layout } from "../../../components/Layout";
import { Box, ThemeProps } from "../../../theme";
import { ScrollView } from "react-native";
import { useTheme } from "@shopify/restyle";
import { MainButton } from "../../../components/MainButton";
import { useNavigation } from "@react-navigation/native";

export default function UserHome() {
    const theme = useTheme<ThemeProps>();
    const navigation = useNavigation();
    return (
        <Layout aboutUser brand>
            <Box>
                <ScrollView style={{ flex: 1, paddingVertical: theme.spacing.l }}>
                    {/* @ts-ignore */}
                    <MainButton action={() => navigation.navigate("new-trip")} bg="dark_gray" color="text_dark" text="Pedir uma corrida" borderRadius={10} />
                </ScrollView>
            </Box>
        </Layout>
    );
}