import AsyncStorage from "@react-native-async-storage/async-storage";

const USERS_KEY = "users"; // Key to store registered users
const SESSION_KEY = "user_session"; // Key to store current user session

export const saveUser = async (user) => {
  try {
    const users = JSON.parse(await AsyncStorage.getItem(USERS_KEY)) || [];

    if (users.some((u) => u.email === user.email)) {
      throw new Error("Email already registered");
    }

    users.push(user); // push used to add new user to array
    await AsyncStorage.setItem(USERS_KEY, JSON.stringify(users));
    return true;
  } catch (error) {
    throw error;
  }
};

export const loginUser = async (email, password) => {
  const users = JSON.parse(await AsyncStorage.getItem(USERS_KEY)) || [];
  const user = users.find((u) => u.email === email && u.password === password);

  if (!user) throw new Error("Invalid email or password");

  await AsyncStorage.setItem(SESSION_KEY, JSON.stringify(user));
  return user;
};

export const saveUserSession = async (user) => {
  await AsyncStorage.setItem(SESSION_KEY, JSON.stringify(user));
};

export const getUserSession = async () => {
  return JSON.parse(await AsyncStorage.getItem(SESSION_KEY));
};

export const logoutUser = async () => {
  await AsyncStorage.removeItem(SESSION_KEY); 
};
