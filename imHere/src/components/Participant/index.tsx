import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import { styles } from './styles';


export function Participant() {
    return(
        <View style={styles.container}>
            <Text style={styles.name}>
                Mayonnaise
            </Text>

            <TouchableOpacity style={styles.button} >
                <Text style={styles.buttonText}>
                    -
                </Text>
            </TouchableOpacity>
        </View>
    )

}