import React from "react";

import {Box, ThemeProps} from "../../../../theme";

import {Layout} from "../../../../components/Layout";
import {Input} from "../../../../components/Input";
import {MainButton} from "../../../../components/MainButton";
import {KeyboardAvoidingView, Platform, ScrollView} from "react-native";
import {InputRadio} from "../../../../components/InputRadio";
import {useTheme} from "@shopify/restyle";
import {RegisterAutomobileProps} from "../../../../@types/RegisterAutomobileProps";
import {TextInfo} from "../../../../components/TextInfo";
import {RegisterDriveRequest} from "../../../../@types/RegisterDriveRequest";
import {Controller, useForm} from "react-hook-form";
import {
  DriverRegisterRequest,
  UserRegisterRequest,
} from "../../../../@types/requests/DriverRegisterRequest";
import {driverRegister} from "../../../../services/auth/driverRegister";

export default function Register({navigation, route}: RegisterAutomobileProps) {
  const formData: RegisterDriveRequest = route.params?.data;

  const userRequest: UserRegisterRequest = {
    name: formData.name,
    cpf: formData.cpf,
    email: formData.email,
    phone: formData.phone,
    password: formData.password,
  };

  const theme = useTheme<ThemeProps>();

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<DriverRegisterRequest>({
    defaultValues: {
      user: userRequest,
      cnh: formData.cnh,
    },
  });

  const onSubmit = (data: DriverRegisterRequest) => {
    driverRegister(data, navigation);
  };

  return (
    <Layout backButton headerTitle="Seu veículo">
      <Box flex={1} justifyContent="space-between">
        <ScrollView style={{flex: 1, paddingVertical: theme.spacing.l}}>
          <TextInfo text="Qual é o tipo de veículo?" />

          <Controller
            control={control}
            name="automobile.type"
            defaultValue="CAR"
            render={({field: {onChange, value}}) => (
              <InputRadio
                label="Carro"
                selected={value === "CAR"}
                onSelect={() => onChange("CAR")}
              />
            )}
          />
          <Controller
            control={control}
            name="automobile.type"
            defaultValue="MOTORCYCLE"
            render={({field: {onChange, value}}) => (
              <InputRadio
                label="Moto"
                selected={value === "MOTORCYCLE"}
                onSelect={() => onChange("MOTORCYCLE")}
              />
            )}
          />
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({field: {onChange, onBlur, value}}) => (
              <Input
                placeholder="Modelo"
                onChange={onChange}
                onBlur={onBlur}
                value={value}
              />
            )}
            name="automobile.model"
          />
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({field: {onChange, onBlur, value}}) => (
              <Input
                placeholder="Placa"
                onChange={onChange}
                onBlur={onBlur}
                value={value}
              />
            )}
            name="automobile.licensePlate"
          />
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
                text="Concluir Cadastro"
              />
            </Box>
          </Box>
        </KeyboardAvoidingView>
      </Box>
    </Layout>
  );
}
