import axios from 'axios';

const BASE_URL = 'https://fake-api.tractian.com/';

export const getCompanies = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/companies`);
    return response.data;
  } catch (error) {
    console.error('Error fetching companies:', error);
    throw error;
  }
};

export const getCompanyLocations = async (companyId: string) => {
  try {
    const response = await axios.get(`${BASE_URL}/companies/${companyId}/locations`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching locations for company ${companyId}:`, error);
    throw error;
  }
};

export const getCompanyAssets = async (companyId: string) => {
  try {
    const response = await axios.get(`${BASE_URL}/companies/${companyId}/assets`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching assets for company ${companyId}:`, error);
    throw error;
  }
};
