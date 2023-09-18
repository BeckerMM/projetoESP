
import Display from "../../components/display/index";
import service from "../service/index";
import { useEffect, useState } from "react";
import Tip from "../../components/tip/index";
const Index = () => {

    const [temperatura, setTemperatura] = useState(0);
    const [umidade, setUmidade] = useState(0);
    const [change, setChange] = useState(0);
    const [text, setText] = useState("");
    const changeDisplay = () => {
        if (change == 1) {
            setChange(0);
        } else {
            setChange(1);
        }
    }

    const verifyText = () => {
        if (change == 1) {
            if (temperatura >= 27) {
                return "Temperatura muito alta! Tome cuidado com o calor, se mantenha hidratado e utilize protetor solar. ";
            } else if (temperatura <= 26 && temperatura >= 19) {
                return "Temperatura confortavel! Use roupas leves e frescas, como camisetas e shorts. ";
            } else if (temperatura <= 18 && temperatura >= 11) {
                return "Temperatura um pouco mais fria! Um suéter ou jaqueta leve pode ser uma boa opçãos. ";
            } else if (temperatura <= 10) {
                return "Temperatura  baixa! Use roupas quentes e camadas adicionais para se manter aquecido.";
            }
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
            <div className=" h-screen w-screen bg-white flex justify-center items-center">
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
                            <p className="text-2xl">DICA:</p>
                            <Tip text={verifyText()} />
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