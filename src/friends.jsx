
import { use } from "react"

export default function Friends({friendsPromise}){
    const Friends = use(friendsPromise)
    console.log(Friends);
    
    return(
        <div className="card">
            <h3>Friends :{Friends.length} </h3>
        </div>
    )
}