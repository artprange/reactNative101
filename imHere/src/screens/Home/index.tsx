import {
	Text,
	View,
	TextInput,
	TouchableOpacity,
	ScrollView,
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
		"Anchovies",
		"Basil",
		"Oregano",
		"Parsley",
		"Pesto",
		"Artichokes",
		"Eggplant",
		"Feta",
		"Goat Cheese",
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
		"Muenster",
		"Havarti",
	];

	function handleNewParticipant() {
		console.log("Novo participante");
	}

	function handleRemoveParticipant(name: string) {
		console.log("Remover participante");
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
			<ScrollView>
				{participants.map((participant) => (
					<Participant
						key={participant}
						name={participant}
						onRemove={() => handleRemoveParticipant(participant)}
					/>
				))}
			</ScrollView>
		</View>
	);
}
