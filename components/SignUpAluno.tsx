import { stylesprof } from '@/styles/styles.signup';
import { View, Text, ScrollView, Alert } from 'react-native';
import { Input } from './Input';
import { useState } from 'react';
import { themes } from '@/constants/theme';
import { Button } from './Button';
import CardGenero from './CardGenero';
import { AlertError } from './AlertError';
import { useGenero } from '@/contexts/genero';
import LoadingDots from './Loading';

export default function SignUpAluno() {

    const [ nome, setNome ] = useState("");
    const [ email, setEmail ] = useState("");
    const [ telefone, setTelefone ] = useState("");
    const [ localizacao, setLocalizacao ] = useState("");
    const [ senha, setSenha ] = useState("");
    const { genero } = useGenero();
    const [ error, setError ] = useState(false);
    const [ messageError, setMessageError ] = useState("");
    const [ loading, setLoading ] = useState(false);

    function handleSignUp() {
        if(!nome || !email || !telefone || !localizacao || !senha || !genero) { 
            setMessageError("Preenche todos os campos");
            setError(true);
            return;
        }
        console.log(nome, email, telefone, localizacao, senha, genero);
        setLoading(true);
        Alert.alert("Sucesso")
    }
  return (
    <View style={stylesprof.container}>
        <Text style={stylesprof.title}>Faça o teu cadastro</Text>
        <ScrollView
            showsVerticalScrollIndicator={false}
        >
            <View style={stylesprof.areaForm}>
                {error ?(
                    <AlertError 
                        colorBtn={themes.colors.error}
                        colorText={themes.colors.errorText}
                        title={messageError}
                        onPress={() => { setError(false) }}
                    /> 
                ):( null )}

                <Input 
                    title='Nome Completo'
                    value={nome}
                    textValueChange={setNome}
                />
                <Input 
                    title='Teu email'
                    typeKeyboard='email-address'
                    value={email}
                    textValueChange={setEmail}
                />
                <View style={stylesprof.areaPhoneNumber}>
                    <View style={stylesprof.areaIndicator}>
                        <Text style={stylesprof.indicatorText}>+244</Text>
                    </View>
                    <View style={stylesprof.areaInputPhone}>
                        <Input 
                            title='Número de Telefone'
                            typeKeyboard='phone-pad'
                            value={telefone}
                            textValueChange={setTelefone}
                        />
                    </View>
                </View>
                <View>
                    <CardGenero />
                </View>

                <Input 
                    title='A tua localização (Província, Município...)'
                    value={localizacao}
                    textValueChange={setLocalizacao}
                />
                <Input 
                    title='Senha'
                    secure={true}
                    value={senha}
                    textValueChange={setSenha}
                />
                <View style={stylesprof.areaBtn}>
                    {loading ?(
                        <LoadingDots /> 
                    ):(
                        <Button 
                            title='Cadastrar-se'
                            colorBtn={themes.colors.primary}
                            colorText={themes.colors.surface}
                            onPress={handleSignUp}
                        />
                    )}
                    
                </View>
            </View>
        </ScrollView>
    </View>
  );
}