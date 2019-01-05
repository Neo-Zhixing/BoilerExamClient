﻿import axios from 'axios'

const client = axios.create({
  baseURL: '/api',
  timeout: 1000,
  headers: {}
})

export default client