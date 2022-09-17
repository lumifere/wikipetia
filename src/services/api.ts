import axios from 'axios';

const dog = axios.create({
  baseURL: 'https://api.thedogapi.com/v1/'
});

const cat = axios.create({
  baseURL: 'https://api.thecatapi.com/v1/'
});

export {
  dog,
  cat
}