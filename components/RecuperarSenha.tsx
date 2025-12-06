import { stylesprof } from '@/styles/styles.signup';
import { View, Text, Alert } from 'react-native';
import { Input } from './Input';
import { useState } from 'react';
import { themes } from '@/constants/theme';
import { Button } from './Button';
import { AlertError } from './AlertError';
import LoadingDots from './Loading';

export default function RecuperarSenha() {
    const [ email, setEmail ] = useState("");
    const [ loading, setLoading ] = useState(false);
    const [ error, setError ] = useState(false);
    const [ messageError, setMessageError ] = useState("");
    
    function handleVerifiquection(){
        if(!email){
            setMessageError("Por favor, insira o teu email.");
            setError(true);
            return;
        }
        setLoading(true);
    }

    return (
        <View style={stylesprof.container}>
            <Text style={stylesprof.title}>Recuperação da senha</Text>
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
                    title='Digite o teu e-mail'
                    typeKeyboard='email-address'
                    value={email}
                    textValueChange={setEmail}
                />

                {loading ?(
                    <LoadingDots />
                ):( 
                    <Button 
                        colorBtn={themes.colors.primary}
                        colorText={themes.colors.surface}
                        title='Receber email de recuperação'
                        onPress={handleVerifiquection}
                    />
                 )}
            </View>
        </View>
    );
}