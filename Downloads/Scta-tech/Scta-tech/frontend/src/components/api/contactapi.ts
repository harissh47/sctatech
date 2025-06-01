// contactapi.ts
import axios from 'axios';

const API_URL = import.meta.env.VITE_API;

interface ContactFormData {
  user: string;
  phone: string;
  email: string;
  message: string;
  interested: string;
}

export const sendContactForm = async (data: ContactFormData) => {
  try {
    const response = await axios.post(API_URL, data, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error: any) {
    console.error('Error sending contact form:', error);
    throw error;
  }
};
