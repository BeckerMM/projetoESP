const index = (props) => {
    return (

        <>
            <div className="h-1/6 w-5/6 bg-[#CDCDCD] flex justify-center items-center rounded-md">
                <div className="h-[95%] w-[99.5%] bg-[#f8f8f8] rounded-sm flex justify-center items-center ">
                    {console
                    .log(props.text)}
                    <p className="text-2xl break-words">{props.text}</p>
                </div>
            </div>
        </>
    )

}

export default index;