import React from "react";
import { useNavigation } from "@react-navigation/native";

import { RootStackParamList } from "../../@types/navigation";
import { StackNavigationProp } from "@react-navigation/stack";

import AntDesign from '@expo/vector-icons/AntDesign';
import Logo from "../../assets/logoApp.svg";
import { 
    AreaBtnSwich, 
    AreaLogo,
    Back, 
    BackButton, 
    ButtonSwich, 
    Container, 
    TextBackButton, 
    TextButtonSwich, 
    TextInit, 
    Title
} from "./styles";

import { themes } from "../../global/themes";
import { StatusBar } from "expo-status-bar";

type SignupScreenNavitionProp = StackNavigationProp<
    RootStackParamList,
    'Signup'
>

export function Signup(){
    const navigation = useNavigation<SignupScreenNavitionProp>();

    function handleBack(){
        navigation.goBack();
    }
    function handleSignupTeacher(){
        navigation.navigate("SignupTeacher");
    }
    function handleSignupSearch(){
        navigation.navigate("SignupSearch");
    }
    return(
        <Container>
            <StatusBar style="light"/>
            <Back source={require("../../assets/background_find.png")} resizeMode="cover">
                <AreaLogo>
                    <Logo width={300} height={140} />
                </AreaLogo>
                <TextInit>Cadastra-se na Kepanga Omuludi</TextInit>
                <AreaBtnSwich>
                    <Title>Como você deseja usar o app?</Title>
                    <ButtonSwich>
                        <TextButtonSwich
                            onPress={handleSignupTeacher}
                        >
                           Como professor disponível
                        </TextButtonSwich>
                        <AntDesign name="arrowright" size={24} color={themes.colors.backgroundSigLight} />
                    </ButtonSwich>
                    <ButtonSwich>
                        <TextButtonSwich 
                            onPress={handleSignupSearch}
                        >
                            Quero encontrar um professor
                        </TextButtonSwich>
                        <AntDesign name="arrowright" size={24} color={themes.colors.backgroundSigLight} />
                    </ButtonSwich>
                    <BackButton
                        onPress={handleBack}
                    >
                        <AntDesign name="arrowleft" size={20} color={themes.colors.surface} />
                        <TextBackButton>
                            Voltar para login
                        </TextBackButton>
                    </BackButton>
                </AreaBtnSwich>
            </Back>
        </Container>
    );
}