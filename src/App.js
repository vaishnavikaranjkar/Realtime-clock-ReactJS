import React,{ useState } from 'react'

export default function Webpage() //function name should start with a capital letter
{
    const date=new Date()

    return <>
        <section>
            <header>
                <h1>
                    Realtime Clock
                </h1>
            </header>
        </section>
        <Clock/>
    </>
}

function Clock()
{
    const [time,setTime] = useState(new Date().toLocaleDateString("UK"));
    setInterval(
        () => setTime(new Date().toLocaleTimeString("UK")),1000
    );

    return <p>It's currently : {time} </p>
}