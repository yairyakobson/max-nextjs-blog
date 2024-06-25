import { Toaster } from "sonner";
import Navigation from "./navigation";

export default function Layout(props){
  return(
    <>
      <Navigation/>
      <main>{props.children}</main>
      <Toaster position="bottom-center" richColors/>
    </>
  );
}