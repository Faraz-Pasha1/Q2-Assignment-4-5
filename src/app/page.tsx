
import Header from "@/app/components/Header"
import MainSection from "@/app/components/MainSection";
import '../app/public/images/background-image.jpg'
import Blogcards from "./components/BlogCards";



export default function Home() {
  return (
    <div>
         <Header/>
         <MainSection/>
         <Blogcards/>
    </div>
   
  );
}
