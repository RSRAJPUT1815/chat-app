import { StreamChat } from "stream-chat";

const api_key = "4svvygdsdquu";
const api_secret = "35vt34vytfwet3m569h3cutsexxjp4xyjufefaqysgbb6ku9n2qmpt28necxmmj4";
const user_id = "user_2wtjoTcgGJoFWcIzt1I1b4ZYvXP";


export async function GET() {
    const serverClient = StreamChat.getInstance(api_key, api_secret);
    // Create User Token
    const token = serverClient.createToken(user_id);
    console.log("token is",token);
    
    return Response.json({ message: 'Hello World' })
}