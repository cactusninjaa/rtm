import AccordionIcon from "./atoms/AccordionIcon";
import Title from "./atoms/Title";
import Paragraph from "./atoms/Paragraph";
import { useState } from "react";

export default function Accordion({question}){
    const [isOpen, setIsOpen] = useState(question.state)

    const handleToggleState = () => {
        setIsOpen(!isOpen)
    }

    return (
        <div className="flex-col py-4 w-2xl" >
            <div 
                className="flex justify-between items-center"
                onClick={handleToggleState}
            >
                <Title title={question.title}/>
                <AccordionIcon state={isOpen}/>
            </div>
            {
                isOpen && <Paragraph content={question.content}/>
            }
        </div>
    )
}