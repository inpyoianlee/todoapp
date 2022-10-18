import axios from 'axios';

const BASE = 'https://todoappapi20221014105850.azurewebsites.net/api'

export async function getTodoitems() {
  try {
    const { data } = await axios.get(`${ BASE }/todoitems`);
    return data;
  } catch (error) {
    throw error;
  }
}