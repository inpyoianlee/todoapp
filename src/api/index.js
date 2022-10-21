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

export async function postTodoitem(name, isComplete = false, startDate, endDate) {
  try {
    await axios.post(`${ BASE }/todoitems`, {name, isComplete, startDate, endDate})
  } catch (error) {
    throw error;
  }
}

export async function putTodoitem(id, name, isComplete, startDate, endDate) {
  try {
    await axios.put(`${ BASE }/todoitems/${id}`, {id, name, isComplete, startDate, endDate});
  } catch(error) {
    throw error;
  }
}

export async function deleteTodoitem(id) {
  try {
    await axios.delete(`${ BASE }/todoitems/${id}`);
  } catch(error) {
    throw error;
  }
}