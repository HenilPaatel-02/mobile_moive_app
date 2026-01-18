import { router } from "expo-router";
import React from "react";
import { useForm } from "react-hook-form";
import { ActivityIndicator, Text, TouchableOpacity, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import FormInput from "@/components/common/FormInput";
import { APP_CONSTANTS } from "@/utils/constants";
import { loginThunk } from "../src/store/authSlice";
import { styles } from "../styles/loginStyles";

export default function Login() {
  const dispatch = useDispatch();
  const { loading } = useSelector((s) => s.auth);

  const {
    control,
    handleSubmit,
    setError,
    formState: { isSubmitting },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "onBlur",
  });

  const onSubmit = async (data) => {
    try {
      await dispatch(loginThunk(data)).unwrap();
      router.replace(APP_CONSTANTS.ROUTES.HOME);
    } catch (err) {
      // show API error on password field
      setError("password", {
        message: err || "Invalid email or password",
      });
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome Back</Text>
      <Text style={styles.subtitle}>Login to continue</Text>

      <View style={styles.card}>
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

        {/* Submit */}
        <TouchableOpacity
          style={[styles.button, (loading || isSubmitting) && { opacity: 0.7 }]}
          onPress={handleSubmit(onSubmit)}
          disabled={loading || isSubmitting}
        >
          {loading || isSubmitting ? (
            <ActivityIndicator color="#fff" />
          ) : (
            <Text style={styles.buttonText}>Login</Text>
          )}
        </TouchableOpacity>
      </View>

      <TouchableOpacity onPress={() => router.push("/register")}>
        <Text style={styles.linkText}>Don’t have an account? Register</Text>
      </TouchableOpacity>
    </View>
  );
}
