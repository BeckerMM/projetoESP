
import Display from "../../components/display/index";
import service from "../service/index";
import { useEffect, useState } from "react";
const Index = () => {

    const [temperatura, setTemperatura] = useState(0);
    const [umidade, setUmidade] = useState(0);
    const [change, setChange] = useState(0);

    const changeDisplay = () => {
        if (change == 1) {
            setChange(0);
        } else {
            setChange(1);
        }
    }


    const verifyHumity = () => {
        service.getHumity();
        setUmidade(service.getValueHumity());
    }

    const verifyTemperature = () => {
        service.get();
        setTemperatura(service.getValue());
    }



    return (
        <>
            <div className=" h-screen w-screen bg-[#f2f2f2] flex justify-center items-center">
                <div className="h-5/6 w-5/6 flex flex-col items-center gap-5">

                    <div className="h-1/6 w-1/2 flex justify-center items-center">
                        <button className="h-4/5 w-4/6 bg-[#0d86cb] text-2xl text-white rounded-md" onClick={changeDisplay}>{change == 1 ? "Tmperatura Local" : "Umidade Local"}</button>
                    </div>


                    {change == 1 ?
                        <>
                            <div className="text-5xl text-[#454545]">
                                <p>Temperatura Local:</p>
                            </div>

                            <Display temperatura={temperatura == null ? setTemperatura(0) : temperatura} />

                            <button className="text-white h-[8%] w-[20%] bg-[#0d86cb] flex justify-center items-center hover:bg-[#1c94da] rounded-md" onClick={() => {
                                verifyTemperature();
                            }}>Clique</button></> :
                        <>

                            <div className="text-5xl text-[#454545]">
                                <p>Umidade Local:</p>
                            </div>

                            <Display umidade={umidade == null ? setUmidade(0) : umidade} />
                            <button className="text-white h-[8%] w-[20%] bg-[#0d86cb] flex justify-center items-center hover:bg-[#1c94da] rounded-md" onClick={() => {
                                verifyHumity();
                            }}>Clique</button>
                        </>}


                </div>


            </div>

        </>)
}

export default Index;