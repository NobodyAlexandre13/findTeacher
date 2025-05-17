import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";

import { 
    AreaForm, 
    AreaIndicator, 
    AreaInputPhone, 
    AreaPhoneNumber, 
    AreaTitle, 
    Container, 
    Select, 
    Header, 
    Indicator,
    Title,
    BackButton
} from "./styles";

import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import AntDesign from '@expo/vector-icons/AntDesign';

import * as ImagePicker from 'expo-image-picker'

import { themes } from "../../global/themes";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Alert, ScrollView } from "react-native";
import { Picker } from "@react-native-picker/picker";

export function SignupSearch() {
    const navigation = useNavigation();
    const [profileName, setProfileName] = useState<string | null >(null);
    const [nome, setNome] = useState("");
    const [ genero, setGenero ] = useState("");
    const [ email, setEmail ] = useState("");
    const [ numberPhone, setNumberPhone ] = useState("");

    const [ provincia, setProvincia ] = useState("");
    const [ endereco, setEndereco ] = useState("");
    const [uriPhotoProfile, setUriPhotoProfile] = useState("");
    const [ senha, setSenha ] = useState("");

    function handleBack (){
        navigation.goBack();
    }

    function handleSingUp(){
        if(
            nome === "" ||
            email === "" ||
            senha === "" ||
            numberPhone === "" ||
            genero === "" ||
            provincia === "" ||
            endereco === "" ||
            uriPhotoProfile === ""
        ){
            Alert.alert("Atenção", "Preencha todos os campos obrigatórios");
        }
    }

    const handleGetPhotoProfile = async () =>{
        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            quality: 0.7
        })

        const file = result;
    }

  return (
    <Container>
        <Header>
            <BackButton
                onPress={handleBack}
            >
                <AntDesign name="arrowleft" size={24} color={themes.colors.surface} />
            </BackButton>
            <AreaTitle>
                <FontAwesome6 name="user-tie" size={20} color={themes.colors.surface} />
                <Title>Cadastro de Procurador</Title>
            </AreaTitle>
        </Header>
        <ScrollView 
            showsVerticalScrollIndicator={false}
        >
            <AreaForm>
                <Input 
                    title="Nome completo"
                    value={nome}
                    onChangeText={setNome}
                    autoCapitalize="words"
                    autoCorrect={false}
                    maxLength={40}
                />

                <Select
                    selectedValue={genero}
                    onValueChange={(itemValue) => setGenero(itemValue as string)}
                >
                    <Picker.Item label="Selecione o seu genero" value="" enabled={false} />
                    <Picker.Item label="Masculino" value="masculino" />
                    <Picker.Item label="Feminino" value="feminino" />
                </Select>
                <Input 
                    title="Email"
                    keyboardType="email-address"
                    autoCapitalize="none"
                    value={email}
                    onChangeText={setEmail}
                    autoCorrect={false}
                />

                <AreaPhoneNumber>
                    <AreaIndicator>
                        <Indicator>+244</Indicator>
                    </AreaIndicator>
                    <AreaInputPhone>
                        <Input 
                            title="Número de telefone"
                            keyboardType="phone-pad"
                            value={numberPhone}
                            onChangeText={setNumberPhone}
                        />
                    </AreaInputPhone>
                </AreaPhoneNumber>

                <Select
                    selectedValue={provincia}
                    onValueChange={(itemValue) => setProvincia(itemValue as string)} 
                >
                    <Picker.Item label="Selecione a sua província" value="" enabled={false} />
                    <Picker.Item label="Luanda" value="Luanda" />
                    <Picker.Item label="Bengo" value="Bengo" />
                    <Picker.Item label="Benguela" value="Benguela" />
                    <Picker.Item label="Bié" value="Bié" />
                    <Picker.Item label="Huambo" value="Huambo" />
                    <Picker.Item label="Lunda Norte" value="Lunda Norte" />
                    <Picker.Item label="Lunda Sul" value="Lunda sul" />
                    <Picker.Item label="Malanje" value="Malanje" />
                    <Picker.Item label="Kuanza Norte" value="Kuanza Norte" />
                    <Picker.Item label="Kuanza Sul" value="Kuanza Sul" />
                    <Picker.Item label="Kunene" value="Cunene" />
                    <Picker.Item label="Kuando Kubango" value="Kuando Kubango" />
                    <Picker.Item label="Namibe" value="Namibe" />
                    <Picker.Item label="Zaire" value="Zaire" />
                    <Picker.Item label="Cabinda" value="Cabinda" />
                    <Picker.Item label="Uíge" value="Uige" />
                    <Picker.Item label="Bengo" value="Bengo" />
                    <Picker.Item label="Moxico" value="Moxico" />
                </Select>

                <Input 
                    title="Endereço"
                    value={endereco}
                    onChangeText={setEndereco} 
                />

                <Input 
                    title="Senha" 
                    secureTextEntry={true}
                    value={senha}
                    onChangeText={setSenha}
                />

                <Button 
                    title={profileName ? profileName : "Escolher foto de perfil"}
                    border={"1px dashed "+themes.colors.primary}
                    colorBtn=""
                    colorText={themes.colors.primary}
                    onPress={handleGetPhotoProfile}
                />
                <Button 
                    title="Cadastrar-se" 
                    border="none"
                    colorBtn={themes.colors.primary}
                    colorText={themes.colors.surface}
                    onPress={handleSingUp}
                />
            </AreaForm>
        </ScrollView>
    </Container>
  );
}
