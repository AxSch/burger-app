import axios from 'axios'

const OrdersClient = axios.create({
  baseURL: 'https://thechum-bucket.firebaseio.com/'
})

export default OrdersClient

