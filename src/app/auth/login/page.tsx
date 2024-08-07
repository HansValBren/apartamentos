import LoginForm from "./components/LoginForm"
import { authOptions } from "@/utils/authOptions";
import { getServerSession } from "next-auth"
export default async function Login() {
  const session = await getServerSession(authOptions)

  return (
    <div className='min-h-screen p-24 flex flex-col items-end justify-center bg-[url("/apamo.webp")] 
   bg-cover'>
    {
      !session ?(
        <LoginForm />
      )
     : (
        <div className="bg-white rounded-lg shadow-md p-6 md:p-8 lg:p-10">
          <h1 className="text-3xl text-black/70">Ya iniciaste sesión</h1>
        </div>
      )
    }
    </div>
  )
}
 
     