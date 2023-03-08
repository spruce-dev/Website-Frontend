import Navbar from "@/components/Navbar"
import toast, {Toaster} from 'react-hot-toast';

export default function Home() {
  return (
    <div className="bg-blue-200 h-screen">
     
      <Navbar />

      <div className=" flex items-center justify-center flex-row">
        <button className=" p-5 bg-green-500 shadow-md rounded-lg m-5 w-52" onClick={() => {toast.success("Succesfully did your mum!", {position: "bottom-center", id: "urmum"})}}>Do your mum</button>
        <Toaster />
      </div>
    </div>
  )
}
