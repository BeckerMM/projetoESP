
import React from 'react';
import { useEffect, useState } from 'react'; 
const Index = (props) => {

    const [temperatura, setTemperatura] = useState(0);
  
useEffect(() => {
    setTemperatura(props.temperatura);
}
)

    const styleDiv = () => {

        if (temperatura >= 27) {
            return "bg-[#eb6e66] ";

        } else if (temperatura <= 26 && temperatura >= 19) {
            return "bg-[#e9d83f] "; 

        } else if (temperatura <= 18 && temperatura >= 11) {
            return "bg-[#7dd85d] " ;
        }else if(temperatura<=10) {
            return "bg-[#3b7ad9] ";
        }

    }

    return (
        <>
            <div className={styleDiv() + "h-1/6 w-4/6 rounded-lg flex justify-center items-center "}>
                <p className="text-5xl text-center">{props.temperatura}ºC</p>
            </div>

        </>


    )

}

export default Index;