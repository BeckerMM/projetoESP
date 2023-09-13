
import React from 'react';
import { useEffect, useState } from 'react';
const Index = (props) => {

    const [temperatura, setTemperatura] = useState(0);
    const [umidade, setUmidade] = useState(0);
    useEffect(() => {

        setTemperatura(props.temperatura);
        setUmidade(props.umidade);
        console.log(umidade)
    }
    )

    const styleDiv = () => {
        if (temperatura >= 27) {
            return "bg-[#eb6e66] ";
        } else if (temperatura <= 26 && temperatura >= 19) {
            return "bg-[#e9d83f] ";
        } else if (temperatura <= 18 && temperatura >= 11) {
            return "bg-[#7dd85d] ";
        } else if (temperatura <= 10) {
            return "bg-[#3b7ad9] ";
        }

    }

    const styleText = () => {
        if (umidade > 80) {
            return "bg-blue-700 "
        } else if (umidade <= 80 && umidade >= 60) {
            return "bg-blue-500 "
        } else if (umidade <= 59 && umidade >= 40) {
            return "bg-blue-100 "
        } else if (umidade <= 39 && umidade >= 20) {
            return "bg-red-200 "
        } else if (umidade <= 19) {
            return "bg-red-400 "
        }
    }



    return (
        <>
            {temperatura != null ?
                <div className={styleDiv() + "h-1/6 w-4/6 rounded-lg flex justify-center items-center "}>
                    <p className="text-5xl text-center">{props.temperatura}ºC</p>
                </div> :
                <div className={styleText() + "h-1/6 w-4/6 rounded-lg flex justify-center items-center "}>
                    <p className="text-5xl text-center">{props.umidade}%</p>
                </div>}
                
        </>


    )

}

export default Index;