import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({

    container:{
        flex: 1,
        backgroundColor: '#131016',
        padding: 24
    },
    eventName:{
        color: '#fdfcfe',
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 48,
    },
    eventDate:{ 
        color: '#6b6b6b',
        fontSize: 16
     },
    input: {
        flex:1,
        backgroundColor: "#1f1e25",
        height: 56,
        borderRadius: 8,
        color: '#fdfcfe',
        padding: 16,
        fontSize: 16,
        textDecorationLine: 'none',
        marginRight: 12
        
      

     }, 
    buttonText:{
            color: '#fdfcfe',
            fontSize: 24,
            
        },

    button:{
        width: 56,
        height: 56,
        borderRadius: 8,
        backgroundColor: '#31cf67',
        display: 'flex', // o flexbox no react native é ativado por padrão. ou seja, não preciso colocar essa propriedade, basta ir direto para as propriedades abaixo
        justifyContent: 'center',
        alignItems: 'center',

    }, 

    form:{
        width:'100%',
  
        flexDirection: 'row',
        marginTop: 36,
        marginBottom: 42,

    }, 

    emptyList:{
        color: '#fdfcfe',
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 48,
        textAlign: 'center',
    
    }
     
    

     })