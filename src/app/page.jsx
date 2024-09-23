import Navbar from "../components/navbar/navbar";
import Apresentation from "@/components/apresentation/apresentation";
import Summary from "@/components/summary/summary";
//implementar o Router e o Link

export default function Home() {
  return (
    <body>
    <Navbar/>
    <Apresentation/>
    <Summary/>
    </body>
    
  );
}
