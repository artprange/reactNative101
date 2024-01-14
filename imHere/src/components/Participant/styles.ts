import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container:{
        width: '100%',
        backgroundColor: '#1f1e25',
        borderRadius: 8,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 12,

        
    },

    name: {
        color: '#fff',
        flex: 1,
        fontSize: 16,
        marginLeft: 16,
    },
    buttonText:{
        color: '#fdfcfe',
        fontSize: 24,
        
    },

button:{
    width: 56,
    height: 56,
    borderRadius: 8,
    backgroundColor: '#e23c44',
    display: 'flex', // o flexbox no react native é ativado por padrão. ou seja, não preciso colocar essa propriedade, basta ir direto para as propriedades abaixo
    justifyContent: 'center',
    alignItems: 'center',

}, 

})