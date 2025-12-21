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
import { registerThunk } from "../src/store/authSlice";
import { styles } from "../styles/registerStyles";

// yup validation schema
const RegisterSchema = Yup.object().shape({
  name: Yup.string().trim().required("Name is required"),

  email: Yup.string()
    .trim()
    .email("Enter a valid email address")
    .required("Email is required"),

  password: Yup.string()
    .trim()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),

  age: Yup.string()
    .trim()
    .matches(/^\d+$/, "Age must be a number")
    .required("Age is required"),

  address: Yup.string().trim().required("Address is required"),
});

export default function Register() {
  const dispatch = useDispatch();
  const { loading } = useSelector((s) => s.auth);

  const handleSubmit = async (values, { setSubmitting, setFieldError }) => {
    try {
      await dispatch(registerThunk(values)).unwrap();
      router.replace(APP_CONSTANTS.ROUTES.LOGIN);
    } catch (err) {
      setFieldError("email", err || "Registration failed");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create Account</Text>

      <Formik
        initialValues={{
          name: "",
          email: "",
          password: "",
          age: "",
          address: "",
        }}
        validationSchema={RegisterSchema}
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
            {/* Name */}
            <TextInput
              placeholder="Name"
              placeholderTextColor="#888"
              style={[
                styles.input,
                touched.name && errors.name && styles.inputError,
              ]}
              value={values.name}
              onChangeText={handleChange("name")}
              onBlur={handleBlur("name")}
            />
            {touched.name && errors.name && (
              <Text style={styles.errorText}>{errors.name}</Text>
            )}

            {/* Email */}
            <TextInput
              placeholder="Email"
              placeholderTextColor="#888"
              keyboardType="email-address"
              autoCapitalize="none"
              style={[
                styles.input,
                touched.email && errors.email && styles.inputError,
              ]}
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

            {/* Age */}
            <TextInput
              placeholder="Age"
              placeholderTextColor="#888"
              keyboardType="numeric"
              style={[
                styles.input,
                touched.age && errors.age && styles.inputError,
              ]}
              value={values.age}
              onChangeText={handleChange("age")}
              onBlur={handleBlur("age")}
            />
            {touched.age && errors.age && (
              <Text style={styles.errorText}>{errors.age}</Text>
            )}

            {/* Address */}
            <TextInput
              placeholder="Address"
              placeholderTextColor="#888"
              style={[
                styles.input,
                touched.address && errors.address && styles.inputError,
              ]}
              value={values.address}
              onChangeText={handleChange("address")}
              onBlur={handleBlur("address")}
            />
            {touched.address && errors.address && (
              <Text style={styles.errorText}>{errors.address}</Text>
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
                <Text style={styles.buttonText}>Register</Text>
              )}
            </TouchableOpacity>
          </View>
        )}
      </Formik>

      <TouchableOpacity onPress={() => router.push("/login")}>
        <Text style={styles.linkText}>Already have an account? Login</Text>
      </TouchableOpacity>
    </View>
  );
}
