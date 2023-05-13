import { TextInput, StyleSheet } from 'react-native';

export default function Input(props) {
    return (
        <TextInput
            style={styles.input}
            onChangeText={props.onChangeText}
            value={props.value}
            placeholder={props.placeholder}
            placeholderTextColor="#A4A4AA" 
            fontFamily="Inter_700Bold"
        />
    );
}

const styles = StyleSheet.create({
    input: {
        height: 56,
        paddingHorizontal: 18,
        width: '100%',
        borderWidth: 1,
        padding: 10,
        borderRadius: 12,
        borderColor: '#30323E',
        backgroundColor: '#252836',
        fontSize: 15,
        color: '#A4A4AA',
        fontFamily: 'Inter_400Regular',
        marginBottom: 12
    },
});
  