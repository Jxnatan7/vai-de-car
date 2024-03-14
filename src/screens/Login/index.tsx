import React from "react";
import { useTheme } from "@shopify/restyle";

import { Box, Text, ThemeProps } from "../../theme";

import { Layout } from "../../components/Layout";
import { Input } from "../../components/Input";
import { MainButton } from "../../components/MainButton";
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { LoginProps } from "../../@types/LoginProps";
import { Controller, useForm } from "react-hook-form";
import { LoginRequest } from "../../@types/requests/LoginRequest";
import { login } from "../../services/auth/login";

export default function Login({ navigation }: LoginProps) {
  const theme = useTheme<ThemeProps>();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginRequest>({});

  const onSubmit = (data: LoginRequest) => {
    login(data, navigation);
  };

  return (
    <Layout backButton headerTitle="Entrar">
      <Box flex={1} justifyContent="space-between">
        <ScrollView style={{ flex: 1, paddingVertical: theme.spacing.l }}>
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                placeholder="Email"
                onChange={onChange}
                onBlur={onBlur}
                value={value}
                type="email"
              />
            )}
            name="email"
          />
          {errors.email && <Text>This is required.</Text>}

          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                placeholder="Senha"
                onChange={onChange}
                onBlur={onBlur}
                value={value}
              />
            )}
            name="password"
          />
          {errors.password && <Text>This is required.</Text>}
        </ScrollView>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : undefined}
          keyboardVerticalOffset={Platform.OS === "ios" ? 64 : 0}
          enabled>
          <Box alignItems="center" marginTop="l">
            <Box marginBottom="s">
              <MainButton
                action={handleSubmit(onSubmit)}
                bg="btn_dark"
                color="text_light"
                text="Acessar conta"
              />
            </Box>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={handleSubmit(onSubmit)}>
              <Text color="text_orange" fontWeight="bold">
                Esqueceu sua senha?
              </Text>
            </TouchableOpacity>
          </Box>
        </KeyboardAvoidingView>
      </Box>
    </Layout>
  );
}
