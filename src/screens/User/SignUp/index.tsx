import React from "react";
import { useTheme } from "@shopify/restyle";

import { Box, Text, ThemeProps } from "../../../theme";
import { Layout } from "../../../components/Layout";
import { Input } from "../../../components/Input";
import { MainButton } from "../../../components/MainButton";
import {
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { SignUpUserProps } from "../../../@types/SignUpUserProps";
import { Controller, useForm } from "react-hook-form";
import api from "../../../config/axiosConfig";

type RegisterRequest = {
  name: string,
  email: string,
  password: string,
  phone: number,
  cpf: string
};

export default function SignUp({ navigation }: SignUpUserProps) {
  const theme = useTheme<ThemeProps>();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterRequest>({})
  const onSubmit = (data: RegisterRequest) => {
    api.post('/auth/register', data)
      .then(function (response) {
        console.log(response.status);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  return (
    <Layout backButton headerTitle="Sobre você">
      <Box flex={1} justifyContent="space-between">
        <ScrollView style={{ flex: 1, paddingVertical: theme.spacing.l }}>
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input placeholder="Nome" onChange={onChange} onBlur={onBlur} value={value} />
            )}
            name="name"
          />
          {errors.name && <Text>This is required.</Text>}

          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input placeholder="CPF" onChange={onChange} onBlur={onBlur} value={value} type="numeric" />
            )}
            name="cpf"
          />
          {errors.cpf && <Text>This is required.</Text>}

          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input placeholder="Email" onChange={onChange} onBlur={onBlur} value={value} type="email" />
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
              <Input placeholder="Telefone" onChange={onChange} onBlur={onBlur} value={value} type="numeric" />
            )}
            name="phone"
          />
          {errors.email && <Text>This is required.</Text>}

          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input placeholder="Senha" onChange={onChange} onBlur={onBlur} value={value} />
            )}
            name="password"
          />
          {errors.email && <Text>This is required.</Text>}

          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigation.navigate("driver-signup")}>
            <Box mb="xl" flexDirection="row" alignItems="center">
              <Text fontSize={16} color="text_orange" pr="s">
                Quero me cadastrar como
              </Text>
              <Text color="text_orange" fontSize={16} fontWeight="bold">
                Motorista
              </Text>
            </Box>
          </TouchableOpacity>
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
                text="Criar conta"
              />
            </Box>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => navigation.navigate("login")}>
              <Text color="text_orange" fontWeight="bold">
                Acessar conta existente
              </Text>
            </TouchableOpacity>
          </Box>
        </KeyboardAvoidingView>
      </Box>
    </Layout>
  );
}
