const Index = (props) => {


    const styleDiv = () => {
        const temperatura = props.temperatura;
        if (temperatura >= 27) {
            return "bg-[#eb6e66] ";

        } else if (temperatura <= 26 && temperatura >= 19) {
            return "bg-[#e9d83f] "; 

        } else if (temperatura <= 18 && temperatura >= 11) {
            return "bg-[#7dd85d] " ;
        }

    }

    return (
        <>
            <div className={styleDiv() + "h-1/6 w-4/6 rounded-lg"}>

            </div>

        </>


    )

}

export default Index;