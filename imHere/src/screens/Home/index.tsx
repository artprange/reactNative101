import { Text, View, TextInput, TouchableOpacity} from 'react-native';
import { styles } from './styles';
import { Participant } from '../../components/Participant';




export default function Home() {

    function handleNewParticipant(){
        console.log('Novo participante')
    }

    return(
        <View style={styles.container}>
            <Text style={styles.eventName}>
            Nome do evento
            </Text>
            <Text style={styles.eventDate}>
                Sábado, 13 de janeiro de 2024
            </Text>

            <View style={styles.form}>
            <TextInput
                style={ styles.input}
                placeholder='Nome do participante'
                placeholderTextColor="#6b6b6b"
            />

            <TouchableOpacity style={styles.button} onPress={handleNewParticipant}>
                <Text style={styles.buttonText}>
                    +
                </Text>
            </TouchableOpacity>

            </View>

            <Participant/>
            <Participant/>

        </View>
    )
}