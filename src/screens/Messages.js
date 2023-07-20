import React, { useState } from 'react';
import { View, FlatList, TextInput, Button, StyleSheet,Text, Touchable } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Messages = () => {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');

  const handleSendMessage = () => {
    if (inputMessage.trim() === '') {
      return; // Don't send empty messages
    }

    setMessages([...messages, { id: messages.length + 1, text: inputMessage }]);
    setInputMessage('');
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={messages}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <MessageItem text={item.text} />}
      />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={inputMessage}
          onChangeText={(text) => setInputMessage(text)}
          placeholder="Type your message..."
        />
        <TouchableOpacity style = {{backgroundColor:'orange' , padding:20,borderRadius:4}}  onPress={handleSendMessage}
        
        ><Text style={{color:'white'}}>Send</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const MessageItem = ({ text }) => {
  return (
    <View style={styles.messageContainer}>
      <View style={styles.messageBubble}>
        <Text>{text}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    marginTop:30
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderTopWidth: 1,
    borderColor: 'gray',
    paddingVertical: 5,
  },
  input: {
    padding:20,
    flex: 1,
    borderWidth: 2,
    borderColor: 'orange',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginRight: 5,
  },
  messageContainer: {
    marginBottom: 10,
    alignItems: 'flex-end',
  },
  messageBubble: {
    backgroundColor: '#e1e1e1',
    padding: 10,
    borderRadius: 10,
  },
});

export default Messages;
