import { GET }  from "@/app/api/contacto/pregunta/route"
import { type Preguntas } from "@/app/types/pregunta"
import PreguntasList from "./components/PreguntasList"

async function ContactoPage() {

    const preguntas: Preguntas =  await GET()
    //si se hace el json a la hora de leerlo en el componente no sirven los strings de los dates
    // const preguntas: Preguntas = await data.json()
        return(
            <div className="bg-muted px-24 py-10 md:py-16 lg:py-20 min-h-screen">
                <div className="container mx-auto px-4 md:px-6 lg:px-8">
                        <PreguntasList preguntas={preguntas} />        
                    </div>
                </div>
           
        )
}

export default ContactoPage