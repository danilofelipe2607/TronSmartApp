import React, { useState } from 'react';

import { useForm, Controller } from "react-hook-form"
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Logo from '../../assets/imgs/logo.png';
import { useDispatch, useSelector } from 'react-redux';
import * as S from './styles';
import { Icon, Pressable } from 'native-base';
import { Platform } from 'react-native';
import { LoginProps } from '../../navigation/types';
import { FormLogin, login } from '../../redux/actions';
import { InputForm } from '@components';





export default function Login({ navigation }: LoginProps) {
  const [show, setShow] = useState(false);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      usuario: "",
      senha: "",
    },
  })
  const dispatch = useDispatch()

  const handleLogin = async (data: FormLogin) => {
    await dispatch(login(data))
    // if (await login(data)) {
    //   //navigation.navigate('Home')
    // } else {
    //   //navigation.navigate('Home')
    // }
  };

  return (

    <S.KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>

      <S.BodyView>
        <S.Img source={Logo} />
        <S.ContainerForm>
          <InputForm
            name="usuario"
            errors={errors}
            controlForm={control}
            placeholder='EMAIL'
            iconLeft='email'
            iconColor='primary.900'
            isRequired
            textRequired='email obrigatório'
          />
          <InputForm
            name="senha"
            errors={errors}
            controlForm={control}
            iconLeft='lock'
            placeholder='SENHA'
            iconColor='primary.900'
            isRequired
            textRequired='senha obrigatório'
            iconRight={show ? "visibility" : "visibility-off"}
            type={show ? "text" : "password"}
            onPressIcon={() => setShow(!show)
            } />

          <S.LoginButton onPress={handleSubmit(handleLogin)}
            label="Acessar" isLoading={false} width={"100%"} />
        </S.ContainerForm>
        <S.BiometryContainer >
          <Pressable onPress={() => navigation.navigate('Details')}>
            <Icon as={<MaterialIcons name="fingerprint" />} color='primary.900' size={16} />
          </Pressable>
          <S.BiometryText> Entre utilizando sua impressão digital</S.BiometryText>
        </S.BiometryContainer>
      </S.BodyView>

    </S.KeyboardAvoidingView>

  );
}
