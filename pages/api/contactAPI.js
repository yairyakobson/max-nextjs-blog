import { MongoClient } from "mongodb";

async function contactHandler(req, res){
  if(req.method === "POST"){
    const { name, email, message } = req.body;

    if(!email ||
    !email.includes("@") ||
    !name ||
    name.trim() === "" ||
    !message ||
    message.trim() === ""){
      res.status(422).json({ message: "Invalid Input" });
      return;
    }

    const newMessage = { name, email, message };

    let client;
    try{
      client = await MongoClient.connect(process.env.MONGO_URI);
    }
    catch(error){
      res.status(500).json({ message: error.message });
      return; // Stops the function execution
    }

    const db = client.db();
    try{
      const result = await db.collection("messages").insertOne(newMessage);
      newMessage.id = result.insertedId // Generates an unique ID to each new inserted message
    }
    catch(error){
      client.close();
      res.status(500).json({ message: "Storing message failed" });
    }
    client.close();

    res.status(201).json({
      message: "Message Successfully Sent"
    });
  }
}

export default contactHandler;