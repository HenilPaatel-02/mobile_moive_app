import { styles } from "@/styles/contactStyles";
import React, { useState } from "react";
import {
  ImageBackground,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { IMAGES } from "../../constants/image";

const inputFields = [
  {
    key: "firstName",
    placeholder: "Enter First Name",
    keyboardType: "default",
  },
  { key: "lastName", placeholder: "Enter Last Name", keyboardType: "default" },
  { key: "email", placeholder: "Enter Email", keyboardType: "email-address" },
  { key: "phone", placeholder: "Enter Phone No", keyboardType: "phone-pad" },
];

const Contact = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });

  const [error, setError] = useState("");

  const handleSubmit = () => {
    const values = Object.values(form);
    const hasEmpty = values.some((v) => !v.trim());
    if (hasEmpty) {
      setError("⚠ Please fill in all fields before submitting.");
      return;
    }

    // Clear error when valid
    setError("");
    // TODO: send API / Email / Backend
    setError("✔ Your message has been submitted. We will contact you soon.");
  };

  return (
    <ImageBackground source={IMAGES.contactBg} style={styles.image}>
      <View style={styles.overlay}>
        <Text style={styles.title}>Contact Us</Text>

        {inputFields.map(({ key, placeholder, keyboardType }) => (
          <TextInput
            key={key}
            style={styles.input}
            placeholder={placeholder}
            keyboardType={keyboardType}
            value={form[key]}
            onChangeText={(text) => setForm({ ...form, [key]: text })}
            placeholderTextColor="#8D6E63"
          />
        ))}

        {error !== "" && (
          <Text
            style={{
              color: error.startsWith("⚠") ? "red" : "green",
              fontSize: 14,
              marginBottom: 12,
              textAlign: "center",
            }}
          >
            {error}
          </Text>
        )}

        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default Contact;
