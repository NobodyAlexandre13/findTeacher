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
    AreaDisciplina,
    AreaInputDisciplina,
    AreaInputDisciplinaText,
    AddBtnAddDisciplina,
    AreaDisciplinaTitle,
    DisciplinaTitle,
    RemoveDisciplina,
    BackButton
} from "./styles";

import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import AntDesign from '@expo/vector-icons/AntDesign';

import * as DocumentPicker from 'expo-document-picker';
import * as ImagePicker from 'expo-image-picker'

import { themes } from "../../global/themes";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Alert, ScrollView } from "react-native";
import { Picker } from "@react-native-picker/picker";

export function SignupTeacher() {
    const navigation = useNavigation();
    const [curriculumName, setCurriculumName] = useState<string>("");
    const [profileName, setProfileName] = useState<string | null >(null);
    const [nome, setNome] = useState("");
    const [ genero, setGenero ] = useState("");
    const [ descriction, setDescriction ] = useState("");
    const [ email, setEmail ] = useState("");
    const [ numberPhone, setNumberPhone ] = useState("");

    const [ dispciplina, setDispciplina ] = useState("");
    const [ getDisciplina, setGetDisciplina ] = useState<string[]>([]);

    const [ nivelEnsino, setNivelEnsino ] = useState("");
    const [ provincia, setProvincia ] = useState("");
    const [ endereco, setEndereco ] = useState("");
    const [uriPhotoProfile, setUriPhotoProfile] = useState("");
    const [uriCurriculum, setUriCurriculum] = useState("");
    const [ senha, setSenha ] = useState("");

    function handleDisciplina (){
        if(getDisciplina.length === 3){
            Alert.alert("Atenção", "Apenas três disciplinas permitidas");
        }else{
            if(dispciplina === ""){
                Alert.alert("Atenção", "Preencha o campo disciplina");
                return;
            }

            setGetDisciplina([...getDisciplina, dispciplina]);
            setDispciplina("");
            console.log(...getDisciplina);
        }
    }

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
            nivelEnsino === "" ||
            provincia === "" ||
            endereco === "" ||
            dispciplina.length === 0 ||
            uriPhotoProfile === "" ||
            uriCurriculum === "" ||
            descriction === ""
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

    const handleGetCurriculum = async () => {
        const result = await DocumentPicker.getDocumentAsync({
            type: 'application/pdf',
            copyToCacheDirectory: true,
        });

        if(result.canceled) return;

        const file = result.assets[0];
        setCurriculumName(file.name);
        console.log(file);
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
                <Title>Cadastro de Professor</Title>
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
                    title="Descrição (quem é, como ensina, diferencial)"
                    multiline
                    numberOfLines={4}
                    maxLength={160}
                    value={descriction}
                    onChangeText={setDescriction}
                    autoCapitalize="words"
                    autoCorrect={false}
                />
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
                <AreaDisciplina>
                    <AreaDisciplinaTitle>
                        {
                            getDisciplina.length === 0 ? (
                                <DisciplinaTitle>Nenhuma adicionada</DisciplinaTitle>
                            ) : (
                                getDisciplina.map((nome, index) => (
                                    <DisciplinaTitle key={index}>
                                        {nome}
                                        <RemoveDisciplina
                                            onPress={() => {
                                                const newDisciplina = getDisciplina.filter((item) => item !== nome);
                                                setGetDisciplina(newDisciplina);
                                            }}
                                        >
                                            <FontAwesome6 name="xmark" size={12} color={themes.colors.primary} />
                                        </RemoveDisciplina>
                                        
                                    </DisciplinaTitle>
                                ))
                            )
                        }

                    </AreaDisciplinaTitle>
                    <AreaInputDisciplina>
                        <AreaInputDisciplinaText>
                            <Input 
                                title="Dispciplina desejada"
                                value={dispciplina}
                                onChangeText={setDispciplina}
                            />
                        </AreaInputDisciplinaText>
                        <AddBtnAddDisciplina>
                            <Button
                                title="+"
                                colorBtn={themes.colors.primary}
                                colorText={themes.colors.surface}
                                border="none"
                                onPress={handleDisciplina}
                            />
                        </AddBtnAddDisciplina>
                    </AreaInputDisciplina>
                </AreaDisciplina>
                <Select 
                    selectedValue={nivelEnsino}
                    onValueChange={(itemValue) => setNivelEnsino(itemValue as string)}    
                >
                    <Picker.Item label="Selecione o nível de ensino" value="" enabled={false} />
                    <Picker.Item label="Ensino Básico" value="ensino_basico" />
                    <Picker.Item label="Ensino Médio" value="ensino_medio" />
                    <Picker.Item label="Ensino Superior" value="ensino_superior" />
                    <Picker.Item label="Outro" value="Disponível" />
                </Select>

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
                    title={curriculumName ? curriculumName : "Selecionar currículo"}
                    border={"1px dashed "+themes.colors.primary}
                    colorBtn=""
                    colorText={themes.colors.primary}
                    onPress={handleGetCurriculum}
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
