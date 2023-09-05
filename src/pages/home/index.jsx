import Display from "../../components/display/index";

const Index = () => {

    return (
        <>
            <div className=" h-screen w-screen bg-[#f2f2f2] flex justify-center items-center">
                <div className="h-5/6 w-5/6 flex flex-col items-center gap-5">

                    <div className="text-5xl text-[#454545]">
                        <p>Temperatura Local:</p>
                    </div>

                    <Display temperatura={19} />


                </div>


            </div>

        </>)


}

export default Index;