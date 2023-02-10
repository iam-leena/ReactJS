import React from "react";
import Accordion from "./Components/Accordion";

const items = [
    {
        title: 'What is React?',
        content: 'React is a frontend javascript framework'
    },
    {
        title: 'What use React?',
        content: 'React is a favourite JS library among engineers'
    },
    {
        title: 'How do you use React?',
        content: 'YOu use React by creating components'
    }

]
export default () => {
    return <div>
        <Accordion items={items} />
    </div>
};