import apis from '../utils/apis';
import apiClient from './apiClient';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const registerUser = async (userData) => {
  try {
    const response = await apiClient.post(apis.register, userData);
    return response.data;
  } catch (error) {
    if (error.response) {
      // Server responded with error
      const errorData = error.response.data;
      throw {
        status: error.response.status,
        message: errorData.message || 'Registration failed',
        errors: errorData.errors || {},
      };
    } else if (error.request) {
      // Request made but no response
      throw {
        status: 0,
        message: 'Network error. Please check your internet connection.',
        errors: {},
      };
    } else {
      // Something else happened
      throw {
        status: 0,
        message: error.message || 'An unexpected error occurred',
        errors: {},
      };
    }
  }
};

export const loginUser = async (credentials) => {
  try {
    const response = await apiClient.post(apis.login, credentials);
    const { token, refresh_token, user } = response.data;
    
    // Store tokens
    await AsyncStorage.setItem('auth_token', token);
    await AsyncStorage.setItem('refresh_token', refresh_token);
    await AsyncStorage.setItem('user_data', JSON.stringify(user));
    
    return response.data;
  } catch (error) {
    if (error.response) {
      const errorData = error.response.data;
      throw {
        status: error.response.status,
        message: errorData.message || 'Login failed',
        errors: errorData.errors || {},
      };
    } else if (error.request) {
      throw {
        status: 0,
        message: 'Network error. Please check your internet connection.',
        errors: {},
      };
    } else {
      throw {
        status: 0,
        message: error.message || 'An unexpected error occurred',
        errors: {},
      };
    }
  }
};

export const logoutUser = async () => {
  try {
    await AsyncStorage.multiRemove(['auth_token', 'refresh_token', 'user_data']);
  } catch (error) {
    console.error('Logout error:', error);
  }
};

export const getCurrentUser = async () => {
  try {
    const userData = await AsyncStorage.getItem('user_data');
    return userData ? JSON.parse(userData) : null;
  } catch (error) {
    console.error('Get user error:', error);
    return null;
  }
};

export const isAuthenticated = async () => {
  try {
    const token = await AsyncStorage.getItem('auth_token');
    return !!token;
  } catch (error) {
    return false;
  }
};