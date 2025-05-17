import React, {useState} from "react";
import { useNavigation } from "@react-navigation/native";

import { RootStackParamList } from "../../@types/navigation";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import Logo from "../../assets/logoApp.svg";
import { 
    AreaBtnLogin, 
    AreaForm, 
    AreaLogo, 
    AreaSingUp, 
    Back, 
    BtnResetPass, 
    Container, 
    ResetPass, 
    TextBtnRestPass, 
    TextError, 
    TextSingUp, 
    Title 
} from "./styles";

import { themes } from "../../global/themes";
import Loading from "../../components/Loading";
import { StackNavigationProp } from "@react-navigation/stack";

type LoginScreenNavitionProp = StackNavigationProp<
    RootStackParamList,
    'Login'
>

export function Signin(){
    const navigation = useNavigation<LoginScreenNavitionProp>();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");
    const [displayError, setDisplayError] = useState<"none" | "flex">("none");

    function handleSignin(){
        if(email === "" || password === ""){
            setDisplayError("flex");
            setError("Preencha todos os campos");
        }else{
            setIsLoading(true);
            try {
                setDisplayError("none");
            } catch (error) {
                
            }finally{
            }
        }
    }
    function handleSingUp(){
        navigation.navigate("Signup");
    }

    return(
        <Container>
            <Back source={require("../../assets/background_find.png")} resizeMode="cover">
                <AreaLogo>
                    <Logo width={300} height={140} />
                </AreaLogo>
                <AreaForm>
                    <Title>Conecte-se</Title>
                    <TextError style={{display: displayError}}>{error}</TextError>
                    <Input 
                        title="Email"
                        keyboardType="email-address"
                        value={email}
                        onChangeText={setEmail}
                    />
                    <Input 
                        title="Senha"
                        secureTextEntry={true}
                        value={password}
                        onChangeText={setPassword}
                    />
                    <ResetPass>
                        <BtnResetPass>
                            <TextBtnRestPass>
                                Esqueci a minha senha
                            </TextBtnRestPass>
                        </BtnResetPass>
                    </ResetPass>
                        {isLoading ?(
                            <AreaBtnLogin>
                                <Loading width={20} height={20} color={themes.colors.surface}/>
                            </AreaBtnLogin>
                        ):(
                            <Button 
                                onPress={handleSignin} 
                                title="Entrar" 
                                colorBtn={themes.colors.primary}
                                colorText={themes.colors.surface}
                                border="none"
                            />
                        )}
                </AreaForm>
                <AreaSingUp>
                    <TextSingUp>
                        Não tem uma conta?
                    </TextSingUp>
                    <Button 
                        title="Cadastrar-se" 
                        colorBtn="" 
                        colorText={themes.colors.primary}
                        border={`2px solid ${themes.colors.primary}`}
                        onPress={handleSingUp}
                    />
                </AreaSingUp>
            </Back>
        </Container>
    );
}