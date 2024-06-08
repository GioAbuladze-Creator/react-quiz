import { useParams } from "react-router-dom"

const Author =()=>{
    const {author} =useParams()
    return (
        <div>
            <h2 style={{ textAlign: 'center',marginTop:"30px" }}>Made by {author}</h2>
        </div>
    )
}
export default Author