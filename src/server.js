import {io} from "socket.io-client";
const socket = io("https://port-0-mbti-talk-backend-dc9c2nlspm6yjd.sel5.cloudtype.app/");
//const socket = io("http://localhost:5001");
export default socket;