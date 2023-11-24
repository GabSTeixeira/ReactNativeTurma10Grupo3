import { equalTo, get, getDatabase, orderByChild, push, query, ref, update } from "firebase/database";
import { UserProps } from "./Types";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Alert } from "react-native"


export const queryCadastro = async (user: UserProps): Promise<boolean> => {
    const database = getDatabase();
    const usersRef = ref(database, "users");

    const q = query(usersRef, orderByChild("email"), equalTo(user.email));
    const snapshot = await get(q);

    if (snapshot.exists()) {
        console.error("O e-mail cadastrado!");
        return false;
    }

    const newUserRef = push(usersRef);

    await update(newUserRef, user)

    return true

}

export const queryLogin = async (email: string): Promise<UserProps | null> => {
    const db = getDatabase();
    const usersRef = ref(db, "/users");
    const q = query(usersRef, orderByChild("email"), equalTo(email));

    const snapshot = await get(q)

    if (snapshot.exists()) {
        try {
            await AsyncStorage.setItem("@user_email", email);

            const usuarioResponse = snapshot.val()
            const chave = Object.keys(usuarioResponse)[0]
            const usuario = usuarioResponse[chave] as UserProps

            return usuario

        } catch (error) {
            console.error(error);
            return null
        }
    } else {
        Alert.alert('Informações incorretas', 'Por favor verifique suas informações e tente novamente.')

        await AsyncStorage.removeItem('@user_email')
        return null
    }
}

export const logCurrentStorage = () => {
    AsyncStorage.getAllKeys().then((keyArray) => {
      AsyncStorage.multiGet(keyArray).then((keyValArray) => {
        let myStorage: any = {};
        for (let keyVal of keyValArray) {
          myStorage[keyVal[0]] = keyVal[1]
        }

        console.log('AsyncStorage: ', myStorage);
      })
    });
}