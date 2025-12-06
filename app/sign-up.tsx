import { styles } from '@/styles/styles.login';
import { ImageBackground, Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Image } from 'expo-image';
import { Button } from '@/components/Button';
import { themes } from '@/constants/theme';
import SignUpProf from '@/components/SignUpProf';
import SignUpAluno from '@/components/SignUpAluno';
import { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { Link } from 'expo-router';
import Verificar from '@/components/Verificar';


export default function SignUp() {
    const [ visibleProf, setVisibleProf ] =  useState(false);
    const [ visibleAluno, setVisibleAluno ] =  useState(false);
    const [ visibleVer, setVisibleVer ] =  useState(false);


    function handleSignUpProf() {
        setVisibleProf(true);
    }
    function handleSignUpAluno() {
        setVisibleAluno(true);
    }

  return (
    <View style={styles.container}>
      <ImageBackground 
        source={require('@/assets/images/background_find.png')} 
        style={styles.container}
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
        <View>
            <Text style={Styles.title}>Cadastrar-me como</Text>
        </View>
        <View style={Styles.areaButtons}>
            <View style={Styles.areaBtn}>
                <Button 
                    title="Professor"
                    colorBtn={themes.colors.primary}
                    colorText={themes.colors.surface}
                    onPress={handleSignUpProf}
                />
            </View>
            
            <View style={Styles.areaBtn}>
                <Button 
                    title="Procurador"
                    colorBtn={themes.colors.primary}
                    colorText={themes.colors.surface}
                    onPress={handleSignUpAluno}
                />
            </View>
        </View>
        <View style={Styles.areaTextBottom}>
            <Text style={Styles.text}>
                Escolha uma das opções acima para continuar com o cadastro!
            </Text>
        </View>
        <Link href="/" asChild>
            <Button 
                title="Voltar para login" 
                colorBtn=""
                colorText={themes.colors.primary}
                border={`2px solid ${themes.colors.primary}`}
            />
        </Link>
        <Modal
            animationType="slide"
            transparent={true}
            visible={visibleAluno}
        >
            <View style={Styles.areaModal}>
                <TouchableOpacity
                    onPress={() => {setVisibleAluno(false)}}
                >
                    <Ionicons 
                        name='close-circle-outline' 
                        color={themes.colors.surface} 
                        size={28}
                    />
                </TouchableOpacity>
                <SignUpAluno />
            </View>
        </Modal>

        <Modal
            animationType="slide"
            transparent={true}
            visible={visibleProf}
        >
            <View style={Styles.areaModal}>
                <TouchableOpacity
                    onPress={() => {setVisibleProf(false)}}
                >
                    <Ionicons 
                        name='close-circle-outline' 
                        color={themes.colors.surface} 
                        size={28}
                    />
                </TouchableOpacity>
                <SignUpProf />
            </View>
        </Modal>

        <Modal
            animationType="slide"
            transparent={true}
            visible={visibleVer}
        >
            <View style={Styles.areaModal}>
                <TouchableOpacity
                    onPress={() => {setVisibleVer(false)}}
                >
                    <Ionicons 
                        name='close-circle-outline' 
                        color={themes.colors.surface} 
                        size={28}
                    />
                </TouchableOpacity>
                <Verificar />
            </View>
        </Modal>
      </ImageBackground>
    </View>
  );
}

const Styles = StyleSheet.create({
    areaButtons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 24,
    },
    areaBtn: {
        width: '50%',
        paddingHorizontal: 5,
    },
    title:{
        fontSize: 18,
        fontFamily: themes.fonts.medium,
        color: themes.colors.surface,
        textAlign: "center",
        textTransform: "uppercase",
    },
    areaTextBottom: {
        marginTop: 20,
        paddingHorizontal: 24,
    },
    text:{
        fontSize: 16,
        fontFamily: themes.fonts.medium,
        color: themes.colors.surface,
        textAlign: "center",
    },
    areaModal:{
        width: '100%',
        height: '74%',
        position: 'absolute',
        bottom: 0,
        justifyContent: 'center',
        alignItems: 'center',
    }
})