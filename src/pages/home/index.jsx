
import Display from "../../components/display/index";
import service from "../service/index";
import { useEffect, useState } from "react";
const Index = () => {

   const [temperatura, setTemperatura ] = useState(0);

   const verifyTemperature = () => {
    service.get()
    setTemperatura(service.getValue())

    
}



    return (
        <>
            <div className=" h-screen w-screen bg-[#f2f2f2] flex justify-center items-center">
                <div className="h-5/6 w-5/6 flex flex-col items-center gap-5">

                    <div className="text-5xl text-[#454545]">
                        <p>Temperatura Local:</p>
                    </div>
                    
                    <Display temperatura={temperatura == null ? setTemperatura(0): temperatura } />
              

                        <button className="text-white h-[8%] w-[20%] bg-[#0d86cb] flex justify-center items-center hover:bg-[#1c94da] rounded-md" onClick={verifyTemperature} >Clique</button>
                     
                </div>


            </div>

        </>)


}

export default Index;