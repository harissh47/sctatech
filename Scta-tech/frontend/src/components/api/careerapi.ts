// contactapi.ts
import axios from 'axios';

const API_URL = import.meta.env.VITE_API;

interface CareerFormData {
  name: string;
  phone: string;
  email: string;
  applying_position: string;
  address: string;
  qualification: string;
  skills: string;
  total_experience: string;
  relevant_experience: string;
  current_ctc: string;
  expected_ctc: string;
  is_negotiable: string;
  notice_period: string;
  reason_for_change: string;
  current_location: string;
  willing_to_relocate: string;
  preferred_contact_time: string;
  security_code: string;
}

export const sendCareerApplication = async (data: CareerFormData) => {
  try {
    const response = await axios.post(API_URL + '/career_applications', data, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error: any) {
    console.error('Error sending career application:', error);
    throw error;
  }
};
