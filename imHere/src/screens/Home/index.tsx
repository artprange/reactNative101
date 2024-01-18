import {
	Text,
	View,
	TextInput,
	TouchableOpacity,
	ScrollView,
	FlatList,
	Alert
} from "react-native";
import { styles } from "./styles";
import { Participant } from "../../components/Participant";

export default function Home() {
	const participants = [
		"Bacon",
		"Lettuce",
		"Tomato",
		"Bread",
		"Mayo",
		"Onion",
		"Cheese",
		"Pepperonni",
		"Mushrooms",
		"Olives",
		"Peppers",
		"Sausage",
		"Pineapple",
		"Ham",
		"Chicken",
		"Beef",
		"Spinach",
		"Garlic",
		"Basil",
		"Oregano",
		"Parsley",
		"Pesto",
		"Feta",
		"Cheddar",
		"Parmesan",
		"Ricotta",
		"Provolone",
		"Gouda",
		"Mozzarella",
		"Swiss",
		"Blue Cheese",
		"Gorgonzola",
		"Brie",
		"Fontina",
		"Pepper Jack",
		"Colby",
		"Monterey Jack",

	];

	function handleNewParticipant() {
		if(participants.includes("Bacon")){
			return
			Alert.alert("Eita porra!" , "Participante já adicionado!");
			
		}
	
	}

	function handleRemoveParticipant(name: string) {
		Alert.alert("Remover participante", `Deseja remover ${name}?`,[
			{
				text: 'Sim',
				onPress: () => 
					Alert.alert("Removido", `${name} foi removido com sucesso!`)
				},
				{
					text: 'Não',
					
				
			}
			
		] )
	}
	

	return (
		<View style={styles.container}>
			<Text style={styles.eventName}>Nome do evento</Text>
			<Text style={styles.eventDate}>Sábado, 13 de janeiro de 2024</Text>

			<View style={styles.form}>
				<TextInput
					style={styles.input}
					placeholder="Nome do participante"
					placeholderTextColor="#6b6b6b"
				/>

				<TouchableOpacity
					style={styles.button}
					onPress={handleNewParticipant}
				>
					<Text style={styles.buttonText}>+</Text>
				</TouchableOpacity>
			</View>
			<FlatList 
			data={participants}
			keyExtractor={(item) => item}
			renderItem={({item}) => (
				<Participant
						key={item}
						name={item}
						onRemove={() => handleRemoveParticipant(item)}
					/>
					)}
					showsVerticalScrollIndicator={false}
					ListEmptyComponent={() => (
						<Text style={styles.emptyList}>Nenhum participante adicionado. Quer adicionar participantes?</Text>
					)}
			/>
			
		
		</View>
	);
}
