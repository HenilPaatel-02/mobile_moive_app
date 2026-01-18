import { router } from "expo-router";
import React from "react";
import { useForm } from "react-hook-form";
import { ActivityIndicator, Text, TouchableOpacity, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import FormInput from "@/components/common/FormInput";
import { APP_CONSTANTS } from "@/utils/constants";
import { registerThunk } from "../src/store/authSlice";
import { styles } from "../styles/registerStyles";

export default function Register() {
  const dispatch = useDispatch();
  const { loading } = useSelector((s) => s.auth);

  const {
    control,
    handleSubmit,
    setError,
    formState: { isSubmitting },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      age: "",
      address: "",
    },
    mode: "onBlur", // better UX
  });

  const onSubmit = async (data) => {
    try {
      await dispatch(registerThunk(data)).unwrap();
      router.replace(APP_CONSTANTS.ROUTES.LOGIN);
    } catch (err) {
      setError("email", {
        message: err || "Registration failed",
      });
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create Account</Text>

      <View style={styles.card}>
        {/* Name */}
        <FormInput
          control={control}
          name="name"
          placeholder="Name"
          rules={{ required: "Name is required" }}
          inputStyle={styles.input}
          errorStyle={styles.errorText}
        />

        {/* Email */}
        <FormInput
          control={control}
          name="email"
          placeholder="Email"
          keyboardType="email-address"
          rules={{
            required: "Email is required",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Enter a valid email address",
            },
          }}
          inputStyle={styles.input}
          errorStyle={styles.errorText}
        />

        {/* Password */}
        <FormInput
          control={control}
          name="password"
          placeholder="Password"
          secureTextEntry
          rules={{
            required: "Password is required",
            minLength: {
              value: 6,
              message: "Password must be at least 6 characters",
            },
          }}
          inputStyle={styles.input}
          errorStyle={styles.errorText}
        />

        {/* Age */}
        <FormInput
          control={control}
          name="age"
          placeholder="Age"
          keyboardType="numeric"
          rules={{
            required: "Age is required",
            pattern: {
              value: /^\d+$/,
              message: "Age must be a number",
            },
          }}
          inputStyle={styles.input}
          errorStyle={styles.errorText}
        />

        {/* Address */}
        <FormInput
          control={control}
          name="address"
          placeholder="Address"
          rules={{ required: "Address is required" }}
          inputStyle={styles.input}
          errorStyle={styles.errorText}
        />

        {/* Submit */}
        <TouchableOpacity
          style={[styles.button, (loading || isSubmitting) && { opacity: 0.7 }]}
          onPress={handleSubmit(onSubmit)}
          disabled={loading || isSubmitting}
        >
          {loading || isSubmitting ? (
            <ActivityIndicator color="#fff" />
          ) : (
            <Text style={styles.buttonText}>Register</Text>
          )}
        </TouchableOpacity>
      </View>

      <TouchableOpacity onPress={() => router.push("/login")}>
        <Text style={styles.linkText}>Already have an account? Login</Text>
      </TouchableOpacity>
    </View>
  );
}
