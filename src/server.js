import {io} from "socket.io-client";
const socket = io("https://port-0-mbti-talk-backend-am952nlsq3ytg7.sel5.cloudtype.app");
//const socket = io("http://localhost:5001");
export default socket;