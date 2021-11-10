import axios from 'axios';

const baseUrl = "http://localhost:5001";

// axios instance created once 
export const client = axios.create({baseUrl});


