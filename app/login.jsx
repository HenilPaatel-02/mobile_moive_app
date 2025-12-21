import { router } from "expo-router";
import { Formik } from "formik";
import React from "react";
import {
  ActivityIndicator,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";

import { APP_CONSTANTS } from "@/utils/constants";
import { loginThunk } from "../src/store/authSlice";
import { styles } from "../styles/loginStyles";

// yup validation schema
const LoginSchema = Yup.object().shape({
  // object() for schema and shape() for fields
  email: Yup.string() // string type
    .trim() // remove whitespace
    .email("Enter a valid email address")
    .required("Email is required"),

  password: Yup.string()
    .trim()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

export default function Login() {
  const dispatch = useDispatch();
  const { loading } = useSelector((s) => s.auth);

  const handleSubmit = async (values, { setSubmitting, setFieldError }) => {
    try {
      await dispatch(loginThunk(values)).unwrap();
      router.replace(APP_CONSTANTS.ROUTES.HOME);
    } catch (err) {
      // API error → general form error
      setFieldError("password", err || "Invalid email or password");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome Back</Text>
      <Text style={styles.subtitle}>Login to continue</Text>

      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={LoginSchema}
        onSubmit={handleSubmit}
      >
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          touched,
          isSubmitting,
        }) => (
          <View style={styles.card}>
            {/* Email */}
            <TextInput
              placeholder="Email"
              placeholderTextColor="#888"
              style={[
                styles.input,
                touched.email && errors.email && styles.inputError,
              ]}
              keyboardType="email-address"
              autoCapitalize="none"
              value={values.email}
              onChangeText={handleChange("email")}
              onBlur={handleBlur("email")}
            />
            {touched.email && errors.email && (
              <Text style={styles.errorText}>{errors.email}</Text>
            )}

            {/* Password */}
            <TextInput
              placeholder="Password"
              placeholderTextColor="#888"
              secureTextEntry
              style={[
                styles.input,
                touched.password && errors.password && styles.inputError,
              ]}
              value={values.password}
              onChangeText={handleChange("password")}
              onBlur={handleBlur("password")}
            />
            {touched.password && errors.password && (
              <Text style={styles.errorText}>{errors.password}</Text>
            )}

            {/* Submit */}
            <TouchableOpacity
              style={[
                styles.button,
                (loading || isSubmitting) && { opacity: 0.7 },
              ]}
              onPress={handleSubmit}
              disabled={loading || isSubmitting}
            >
              {loading || isSubmitting ? (
                <ActivityIndicator color="#fff" />
              ) : (
                <Text style={styles.buttonText}>Login</Text>
              )}
            </TouchableOpacity>
          </View>
        )}
      </Formik>

      <TouchableOpacity onPress={() => router.push("/register")}>
        <Text style={styles.linkText}>Don’t have an account? Register</Text>
      </TouchableOpacity>
    </View>
  );
}
