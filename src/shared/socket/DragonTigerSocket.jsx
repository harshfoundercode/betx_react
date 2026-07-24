import io from "socket.io-client";

const domain = "https://jupitergames.vip/";
const socket = io(domain);

export default socket;
 