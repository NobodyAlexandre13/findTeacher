import { stylesprof } from '@/styles/styles.signup';
import { View, Text, Alert } from 'react-native';
import { Input } from './Input';
import { useState } from 'react';
import { themes } from '@/constants/theme';
import { Button } from './Button';
import { AlertError } from './AlertError';
import LoadingDots from './Loading';

export default function Verificar() {
    const [ codigo, setCodigo ] = useState("");
    const [ loading, setLoading ] = useState(false);
    const [ error, setError ] = useState(false);
    const [ messageError, setMessageError ] = useState("");
    
    function handleVerifiquection(){
        if(!codigo){
            setMessageError("Por favor, insira o código de verificação.");
            setError(true);
            return;
        }
        setLoading(true);
    }

    return (
        <View style={stylesprof.container}>
            <Text style={stylesprof.title}>Verificação de email</Text>
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
                    title='Digite o código de verificação'
                    typeKeyboard='phone-pad'
                    value={codigo}
                    textValueChange={setCodigo}
                />

                {loading ?(
                    <LoadingDots />
                ):( 
                    <Button 
                        colorBtn={themes.colors.primary}
                        colorText={themes.colors.surface}
                        title='Verificar'
                        onPress={handleVerifiquection}
                    />
                 )}
            </View>
        </View>
    );
}