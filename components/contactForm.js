import { useState } from "react";
import { toast } from "sonner";

async function sendData(contactDetails){
  const response = await fetch("/api/contactAPI", {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(contactDetails)
  });

  const result = await response.json();

  if(!response.ok){
    throw new Error(result.message || "Something went wrong");
  }
}

function ContactForm(){
  const [data, setData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const { name, email, message } = data;

  const dataHandler = (e) =>{
    setData({ ...data, [e.target.name]: e.target.value });
  };

  async function sendMessageHandler(e){
    e.preventDefault();

    let toastId;
    toastId = toast.loading("Sending data...");

    try{
      await sendData(data);
      toast.success("Data was successfully sent to the server", {
        id: toastId,
        duration: 3000
      });
      setData({
        name: "",
        email: "",
        message: ""
      });
    }
    catch(error){
      toast.error(error.message, {
        id: toastId,
        duration: 3000
      });
    }
  };

  return(
    <section className="my-8 mx-auto rounded-md bg-[#dfdbe6]
    w-[90%] max-w-[50rem] p-4
    shadow-[0_1px_4px_rgba(255,255,255,1)] text-[1.2rem]">
      <h1 className="my-4 mx-0 text-center font-bold text-[3.5rem]
      sm:text-[2rem]
      md:text-[2.5rem]">Contact Me</h1>
      <form className="block font-sans font-bold mt-2 ml-0 mb-1 mr-0"
      onSubmit={sendMessageHandler}>
        <div className="flex gap-x-4 flex-wrap">
          <div className="flex-1 min-w-40">
            <label htmlFor="email"
            className="block font-sans mt-2 ml-0 mb-1 mr-0">Your Email</label>
            <input 
              type="email" 
              id="email" 
              name="email"
              className="p-1 rounded w-full
              border border-solid border-[#732392] bg-[#f4effa] resize-none"
              required 
              value={email} 
              onChange={dataHandler} 
            />
          </div>

          <div className="flex-1 min-w-40">
            <label htmlFor="name"
            className="block font-sans mt-2 ml-0 mb-1 mr-0">Your Name</label>
            <input 
              type="text" 
              id="name" 
              name="name"
              className="font-[inherit] p-1 rounded w-full
              border border-solid border-[#732392] bg-[#f4effa] resize-none"
              required 
              value={name} 
              onChange={dataHandler} 
            />
          </div>
        </div>

        <div className="flex-1 min-w-40">
          <label htmlFor="message"
          className="block font-sans mt-2 ml-0 mb-1 mr-0">Your Message</label>
          <textarea 
            id="message" 
            name="message"
            rows="5" 
            className="font-[inherit] p-1 rounded w-full
            border border-solid border-[#732392] bg-[#f4effa] resize-none" 
            required 
            value={message} 
            onChange={dataHandler} 
          />
        </div>

        <div className="mt-4 text-right">
          <button type="submit" className="font-[inherit] cursor-pointer bg-[#3d0264]
          border border-solid border-[#3d0264] py-2 px-4 rounded text-[#c8b3ce]
          shadow-[0_1px_4px_rgba(255,255,255,1)] hover:bg-[#5a097a] border-[#5a097a]">Send Message</button>
        </div>
      </form>
    </section>
  );
}

export default ContactForm;