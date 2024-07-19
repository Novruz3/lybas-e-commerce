import { io } from 'socket.io-client';
import socketIp from './common/ConfigSocket'

// "undefined" means the URL will be computed from the `window.location` object
const URL = socketIp || 'http://localhost:4000';

export const socket = io(URL,{
  autoConnect: false
});