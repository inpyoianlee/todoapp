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

export async function putTodoitem(id, name, isComplete, startDate, endDate) {
  try {
    const { data } = await axios.put(`${ BASE }/todoitems/${id}`, {id, name, isComplete, startDate, endDate});
    return data;
  } catch(error) {
    throw error;
  }
}