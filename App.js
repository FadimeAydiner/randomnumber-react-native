import React from 'react'; 
import { View, TouchableOpacity, Text, 
	StyleSheet } from 'react-native'; 

class App extends React.Component { 
	constructor(props) { 
		super(props); 
		this.state = { 
			randomNumber: null, 
		}; 
	} 

	generateRandomNumber = () => { 
		const min = 1; 
		const max = 100; 
		const randomNumber = 
			Math.floor(Math.random() * (max - min + 1)) + min; 
		this.setState({ randomNumber }); 
	}; 

	render() { 
		return ( 
			<View style={styles.container}> 
				<Text style={styles.heading}> 
					Geeksforgeeks || 
					Generate Random Number In React Native 
				</Text> 
				<TouchableOpacity 
					style={styles.button} 
					onPress={this.generateRandomNumber}> 
					<Text style={styles.buttonText}> 
						Random Number 
					</Text> 
				</TouchableOpacity> 
				{ 
					this.state.randomNumber && 
					<Text style={styles.randomNumber}> 
						Number is: {this.state.randomNumber} 
					</Text> 
				} 
			</View> 
		); 
	} 
} 

const styles = StyleSheet.create({ 
	container: { 
		flex: 1, 
		justifyContent: 'center', 
		alignItems: 'center', 
	}, 
	button: { 
		backgroundColor: 'green', 
		paddingHorizontal: 20, 
		paddingVertical: 10, 
		borderRadius: 5, 
		marginBottom: 20, 
	}, 
	buttonText: { 
		color: 'white', 
		fontSize: 18, 
		fontWeight: 'bold', 
	}, 
	randomNumber: { 
		fontSize: 24, 
		fontWeight: 'bold', 
		color: 'red', 
	}, 
	heading: { 
		fontSize: 20, 
		marginBottom: 20, 
		color: "green", 
		fontWeight: 'bold', 
	} 
}); 

export default App;
