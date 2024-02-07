import React, { useState, useEffect } from "react";
import axios from "axios";

import {
    View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import BRANCH_ENDPOINT from "../utils/constants";
import { generateRandomThreads } from "../utils/randomThreads";

function MessagesScreen({ navigation }) {
  const [messageThreads, setMessageThreads] = useState([]);

  useEffect(() => {
    fetchMessageThreads();
  }, []);

  const fetchMessageThreads = async () => {
    try {
    //   const response = await axios.get(`${BRANCH_ENDPOINT}/api/messages`);
    //   console.log(response);
    //   setMessageThreads(response.data);
    } catch (error) {
    //   console.error("Error fetching message threads: ", error);
    }
    setMessageThreads(generateRandomThreads(4))
    console.log(messageThreads);
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.threadItem}
      onPress={handleThreadPress(item)}
    >
      <Text style={styles.threadTitle}>{item.body}</Text>
      <Text>
        {" "}
        {item.agent_id ? "Agent" : "User"} - {item.timestamp}{" "}
      </Text>
    </TouchableOpacity>
  );

  const handleThreadPress = ({ thread }) => {
    navigation.navigate("Conversation", { thread });
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={messageThreads}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    flex: 1,
    padding: 20,
    backgroundColor: "#333",
  },
  threadItem: {
    backgroundColor: "#444",
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
  },
  threadTitle: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  threadSubtitle: {
    color: "#999",
    fontSize: 14,
  },
});

export default MessagesScreen;
