import React from "react";
import { Layout } from "../../../components/Layout";
import { Box, ThemeProps } from "../../../theme";
import { storage } from "../../../config/storage";
import { ScrollView } from "react-native";
import { MainButton } from "../../../components/MainButton";
import { useTheme } from "@shopify/restyle";
import { useNavigation } from "@react-navigation/native";
import { logout } from "../../../services/auth/logout";

export default function UserInfo() {
    const navigation = useNavigation();
    const userName = storage.getString("user.name");
    const theme = useTheme<ThemeProps>();

    return (
        <Layout headerTitle={userName} backButton>
            <Box>
                <ScrollView style={{ flex: 1, paddingVertical: theme.spacing.l }}>
                    <MainButton action={() => logout(navigation)} bg="btn_danger" color="text_dark" text="Sair da conta" borderRadius={10} />
                </ScrollView>
            </Box>
        </Layout>
    );
}