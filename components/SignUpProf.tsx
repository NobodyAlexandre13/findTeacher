import { stylesprof } from '@/styles/styles.signup';
import { View, Text, ScrollView,TouchableOpacity, Alert } from 'react-native';
import { Input } from './Input';
import { useState } from 'react';
import { FontAwesome6 } from '@expo/vector-icons';
import { themes } from '@/constants/theme';
import { Button } from './Button';
import CardGenero from './CardGenero';
import { useGenero } from '@/contexts/genero';
import { AlertError } from './AlertError';
import LoadingDots from './Loading';

export default function SignUpProf() {

    const [ dispciplina, setDispciplina ] = useState("");
    const [ getDisciplina, setGetDisciplina ] = useState<string[]>([]);
    const [nivel, setNivel] = useState("");
    const [ nome, setNome ] = useState("");
    const [ email, setEmail ] = useState("");
    const [ telefone, setTelefone ] = useState("");
    const [ localizacao, setLocalizacao ] = useState("");
    const [ senha, setSenha ] = useState("");
    const { genero } = useGenero();
    const [ price, setPrice ] = useState("");
    const [ error, setError ] = useState(false);
    const [ messageError, setMessageError ] = useState("");
    const [ loading, setLoading ] = useState(false);

    function handleSignUp() {
        if(!nome || !email || !telefone || !localizacao || !senha || !genero || !getDisciplina || !price || !nivel) { 
            setMessageError("Preenche todos os campaos");
            setError(true);
            return;
        }
        console.log(nome, email, telefone, localizacao, senha, genero, getDisciplina, price, nivel);
        setLoading(true);
        Alert.alert("Sucesso")
    }

    function handleDisciplina() {
        if(getDisciplina.length === 3){
            Alert.alert("Atenção", "Apenas três disciplinas permitidas");
        }else{
            if(dispciplina === ""){
                Alert.alert("Atenção", "Preencha o campo disciplina");
                return;
            }

            setGetDisciplina([...getDisciplina, dispciplina]);
            console.log(...getDisciplina);
        }
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

                    <View style={stylesprof.areaDisciplina}>
                        <View style={stylesprof.areaDisciplinaTitle}>
                            {
                                getDisciplina.length === 0 ? (
                                    <Text style={stylesprof.disciplinaTitle}>Nenhuma adicionada</Text>
                                ) : (
                                    getDisciplina.map((nome, index) => (
                                        <Text style={stylesprof.disciplinaTitle} key={index}>
                                            {nome}
                                            <TouchableOpacity
                                                onPress={() => {
                                                    const newDisciplina = getDisciplina.filter((item) => item !== nome);
                                                    setGetDisciplina(newDisciplina);
                                                }}
                                            >
                                                <FontAwesome6 name="xmark" size={12} color={themes.colors.primary} />
                                            </TouchableOpacity>
                                        </Text>
                                    ))
                                )
                            }
                        </View>
                        <View style={stylesprof.areaInputDisciplina}>
                            <View style={stylesprof.areaIpunt}>
                                <Input 
                                    title='Dispciplina desejada'
                                    value={dispciplina}
                                    textValueChange={setDispciplina}
                                />
                            </View>
                            <View style={stylesprof.addBtnAddDisciplina}>
                                <Button 
                                    title='+'
                                    colorBtn={themes.colors.primary}
                                    colorText={themes.colors.surface}
                                    onPress={handleDisciplina}
                                />
                            </View>
                        </View>
                    </View>
                    <View>
                        <View style={stylesprof.card}>
                            <Text style={stylesprof.text}>Nível de ensino:</Text>

                            <View style={stylesprof.typeSelector}>
                            
                            <TouchableOpacity
                                style={[stylesprof.typeButton, nivel === "primario" && stylesprof.typeButtonActive]}
                                onPress={() => setNivel("primario")}
                            >
                                <Text style={[stylesprof.typeButtonText, nivel === "primario" && stylesprof.typeButtonTextActive]}>
                                Primário
                                </Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                style={[stylesprof.typeButton, nivel === "medio" && stylesprof.typeButtonActive]}
                                onPress={() => setNivel("medio")}
                            >
                                <Text style={[stylesprof.typeButtonText, nivel === "medio" && stylesprof.typeButtonTextActive]}>
                                Médio
                                </Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                style={[stylesprof.typeButton, nivel === "superior" && stylesprof.typeButtonActive]}
                                onPress={() => setNivel("superior")}
                            >
                                <Text style={[stylesprof.typeButtonText, nivel === "superior" && stylesprof.typeButtonTextActive]}>
                                Superior
                                </Text>
                            </TouchableOpacity>

                            </View>
                        </View>
                    </View>
                    <Input
                        title='A tua localização (Província, Município...)'
                        value={localizacao}
                        textValueChange={setLocalizacao}
                    />
                    <Input 
                        title='Quanto cobras por hora?'
                        typeKeyboard='phone-pad'
                        value={price}
                        textValueChange={setPrice}
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