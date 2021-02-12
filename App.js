import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TextInput, Button, View } from 'react-native';

import Amplify from 'aws-amplify';
import config from './aws-exports';
import { withAuthenticator } from 'aws-amplify-react-native';
import { API, graphqlOperation } from 'aws-amplify';

//Amplify.configure(config);
Amplify.configure({
  ...config,
  Analytics: {
    disabled: true,
  },
});



const CleanRoom = `
mutation ($roomNum: String! $cleaner: String) {
  createRoom(input: {
    roomNum: $roomNum
    cleaner: $cleaner
  }) {
    id roomNum cleaner
  }
}
`;

const ListRooms = `
query {
  listRooms {
    items {
      id roomNum cleaner
    }
  }
}
`;

const deleteRooms = /* GraphQL */ `
  mutation DeleteRooms(
    $input: DeleteRoomsInput!
    $condition: ModelRoomsConditionInput
  ) {
    deleteRooms(input: $input, condition: $condition) {
      id
      roomnum
      cleaner
    }
  }
`;

class App extends React.Component {
	state = {
		roomNum: '',
		cleaner: '',
		rooms: []
	};

	async componentDidMount() {
		try {
			const rooms = await API.graphql(graphqlOperation(ListRooms));
			console.log('rooms: ', rooms);
			this.setState({ rooms: rooms.data.listRooms.items });
		} catch (err) {
			console.log('error: ', err);
		}
	}

	onChangeText = (key, val) => {
		this.setState({ [key]: val });
	};

	addRoom = async () => {
		if (this.state.roomNum === '' || this.state.cleaner === '') return;

		const room = { roomNum: this.state.roomNum, cleaner: this.state.cleaner };

		try {
			const rooms = [...this.state.rooms, room];
			this.setState({ rooms, roomNum: '', cleaner: '' });
			console.log('rooms: ', rooms);

			await API.graphql(graphqlOperation(CleanRoom, room));
			console.log('success');
		} catch (err) {
			console.log('error: ', err);
		}
	};

	render() {
		return (
			<View style={styles.container}>
        		<StatusBar style="auto" />
				<TextInput
					style={styles.input}
					value={this.state.roomNum}
					onChangeText={val => this.onChangeText('roomNum', val)}
					placeholder="What room did you clean?"
				/>
				<TextInput
					style={styles.input}
					value={this.state.cleaner}
					onChangeText={val => this.onChangeText('cleaner', val)}
					placeholder="Cleaned by?"
				/>
				<Button onPress={this.addRoom} title="Clean Room" color="#eeaa55" />
				{this.state.rooms.map((room, index) => (
					<View key={index} style={styles.room}>
						<Text style={styles.roomNum}>{room.roomNum}</Text>
						<Text style={styles.cleaner}>{room.cleaner}</Text>
					</View>
				))}
				
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		paddingHorizontal: 10,
		paddingTop: 50
	},
	input: {
		height: 50,
		borderBottomWidth: 2,
		borderBottomColor: 'blue',
		marginVertical: 10
	},
	room: {
		borderBottomWidth: 1,
		borderBottomColor: '#ddd',
		paddingVertical: 10
	},
	roomNum: { fontSize: 16 },
	cleaner: { color: 'rgba(0, 0, 0, .5)' }
});

export default withAuthenticator(App, { includeGreetings: true });