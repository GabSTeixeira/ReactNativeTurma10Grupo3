import React, { useState } from 'react';
import { View, Text, Image } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import GlobalStyle from '../../globalStyle/GlobalStyle';
import { styles } from './styles';
import logo from '../../assets/images/Logo.png'
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';


const Cadastro = ({ navigation }: any) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSignUp = () => {
        // Implement signup logic here using name, email, password, and confirmPassword
        console.log('Signing up with:', name, email, password, confirmPassword);
        // Add logic to sign up the user
    };


    return (
        <View style={styles.container}>
            <View>
                <Image style={styles.logo} source={logo}/>
            </View>
            <View>
                <Text style={styles.tituloCadastro}>Cadastro</Text>
            </View>
            <View>
                <Text style={GlobalStyle.texto}>Nome Completo do adotante</Text>
                <Input
                    style={styles.caixinha}
                    value={name}
                    onChangeText={text => setName(text)}
                />
            </View>
            <View>
                <Text style={GlobalStyle.texto}>Email</Text>
                <Input
                    style={styles.caixinha}
                    value={email}
                    onChangeText={text => setEmail(text)}
                    keyboardType="email-address"
                />
            </View>
            <View>
                <Text style={GlobalStyle.texto}>Senha</Text>
                <Input
                    style={styles.caixinha}
                    value={password}
                    onChangeText={text => setPassword(text)}
                    secureTextEntry={true}
                />
            </View>
            <View>
                <Text style={GlobalStyle.texto}>Confirmar Senha</Text>
                <Input
                    style={styles.caixinha}
                    value={confirmPassword}
                    onChangeText={text => setConfirmPassword(text)}
                    secureTextEntry={true}
                />
            </View>
            <View>
                <Button style={{backgroundColor: GlobalStyle.laranja.color}} onPress={handleSignUp}> <Text style={{color: GlobalStyle.azul.color}}>Finalizar</Text> </Button>
            </View>
        </View>
    )
}

export default Cadastro

