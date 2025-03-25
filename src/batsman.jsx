import { useState } from "react"

export default function Batsman(){
    const [runs, setRuns]=useState(0)
const [sixes,setSixes]=useState(0)
const [four,setFour]=useState(0)
const [single,setSingle]=useState(0)
    const singles=()=>{
        const newRuns= runs+1
        setRuns(newRuns)
        const totalSingle =single +1
            setSingle(totalSingle)
    }
    const fours =()=>{
        const addedFours=runs+4
        setRuns(addedFours)
        const totalFour =four +1
            setFour(totalFour)
    }
    const six =()=>{
        const addedSix=runs+6
        setRuns(addedSix)
        const totalSix =sixes +1
            setSixes(totalSix)
    }
    
    
    return(
        <div>
            <h2>Player: bangladesh</h2>
            {runs>50 && alert('Yayyy!!! Half Century')}
            {runs>100 && alert('Yayyy!!! Half Century')}
            <h3>Score:{runs}</h3>
            <button onClick={singles}>Singles:</button>
            <button onClick={fours}>Four's:</button>
            <button onClick={six}>Six's:</button>
            <br />
            <p >6's:{sixes}</p><p>4's:{four}</p><p>1's{single}</p>
        </div>
    )
}