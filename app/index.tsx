import { styles } from '@/styles/styles.login';
import { ImageBackground, Modal, Text, TouchableOpacity, View } from 'react-native';
import { Image } from 'expo-image';
import { Input } from '@/components/Input';
import LoadingDots from '@/components/Loading';
import { Button } from '@/components/Button';
import { themes } from '@/constants/theme';
import { Link, router } from 'expo-router';
import { useState } from 'react';
import { AlertError } from '@/components/AlertError';
import RecuperarSenha from '@/components/RecuperarSenha';
import { Ionicons } from '@expo/vector-icons';


export default function Login() {
  const [ email, setEmail ] = useState("");
  const [ senha, setSenha ] = useState("");
  const [ error, setError ] = useState(false);
  const [ messageError, setMessageError ] = useState("");
  const [ visibleVer, setVisibleVer ] =  useState(false);
  const [ loading, setLoading ] = useState(false)

    function handleSignUpProf() {
        setVisibleVer(true);
    }
  function handleSignUp() {
    router.push('./sign-up');
  }

  function handleSignIn(){
    if(!email || !senha){
      setMessageError("Preenche os campos todos");
      setError(true);
      return;
    }

    console.log(email, senha);
    setLoading(true)

  }

  return (
    <View style={styles.container}>
      <ImageBackground 
        source={require('@/assets/images/background_find.png')} 
        style={styles.back}
        resizeMode="cover"
      >
        
        <View style={styles.areaLogo}>
          <Image 
            source={require("@/assets/images/keludilogomain.png")}
            style={{width: 240, height: 130}}
            contentFit="contain"
          />
          <Text style={styles.text}>O professor certo, a um clique de distância</Text>
        </View>

        <View style={styles.areaForm}>
          <Text style={styles.title}>Bem-vindo de volta</Text>

          {error ?(
            <AlertError 
                colorBtn={themes.colors.error}
                colorText={themes.colors.errorText}
                title={messageError}
                onPress={() => { setError(false) }}
            /> 
          ):( null )}

          <Input 
            title="Email..."
            typeKeyboard="email-address"
            value={email}
            textValueChange={setEmail}
          />
          <Input 
            title="Palavra-Passe..."
            secure={true}
            value={senha}
            textValueChange={setSenha}
          />
          <TouchableOpacity 
            style={styles.resetPass}
            onPress={handleSignUpProf}
          >
            <Text style={styles.textForget}>Esqueceu a palavra-passe?</Text>
          </TouchableOpacity>
          {loading ?(
            <LoadingDots />
          ):( 
            <Button 
              onPress={handleSignIn} 
              title="Entrar" 
              colorBtn={themes.colors.primary}
              colorText={themes.colors.surface}
            />
          )}
        </View>

        <View style={styles.areaSingUp}>
          <Text style={styles.textSingUp}>Não tem uma conta?</Text>
          <Link href="/sign-up" asChild>
            <Button 
              title="Cadastrar-se" 
              colorBtn="" 
              colorText={themes.colors.primary}
              border={`2px solid ${themes.colors.primary}`}
              onPress={() => handleSignUp}
            />
          </Link>
        </View>

        <Modal
            animationType="slide"
            transparent={true}
            visible={visibleVer}
        >
            <View style={styles.areaModal}>
                <TouchableOpacity
                    onPress={() => {setVisibleVer(false)}}
                >
                    <Ionicons 
                        name='close-circle-outline' 
                        color={themes.colors.surface} 
                        size={28}
                    />
                </TouchableOpacity>
                <RecuperarSenha />
            </View>
        </Modal>
      </ImageBackground>
    </View>
  );
}
