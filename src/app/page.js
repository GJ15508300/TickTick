import DatePicker from "./components/DatePicker";
import SideBar from "./components/SideBar";

export default function Home() {
  return(
    <div 
    // className="container mx-auto p-4 shadow-2xl flex"
    style={{backgroundColor:'greenyellow',display:'flex'}}
    >

    <DatePicker /> 
    {/* <div class="bg-sky-50 aspect-square"></div> */}
  </div>

  )
}
