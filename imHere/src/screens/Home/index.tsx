import React, { useState } from "react";
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
  Alert
} from "react-native";
import { styles } from "./styles";
import { Participant } from "../../components/Participant";



export default function Home() {
  const [participants, setParticipants] = useState<string[]>([]);
  const [participantName, setParticipantName] = useState<string>("");

  function handleNewParticipant() {
    if (participants.includes(participantName)) {
      Alert.alert("Eita porra!", "Participante já adicionado!");
    } else {
      setParticipants((prevParticipants) => [...prevParticipants, participantName]);
	  setParticipantName("");
    
	}}

	function handleRemoveParticipant(name: string) {
		

		Alert.alert("Remover participante", `Deseja remover ${name}?`, [
			{
				text: 'Sim',
				onPress: () =>
				setParticipants(prevState => prevState.filter(participant => participant !== name))
			},
			{
				text: 'Não',


			}

		])
	}

	function handleState(value: string) {	

		setParticipantName(value);
		console.log(participantName);
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
					onChangeText={setParticipantName}
					value={participantName}
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
				renderItem={({ item }) => (
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
