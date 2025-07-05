export default function AccordionIcon({state}){
    return(
        <>
            {state ? <button>+</button> : <button>-</button>}
        </>
    )
}