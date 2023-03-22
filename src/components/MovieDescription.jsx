import { useNavigate, useParams } from "react-router-dom";



const MovieDescription = ({movies}) => {

    const navigate = useNavigate();
    const params = useParams();
    const film = movies.find((product)=> product.id==params.id);
    const {name, image, embedvideo, description} = film ;
    console.log("params",params);


  return (
    <div>

        <img src={image} alt={name}/>
        <h1>{name}</h1>
        <h2>{description}</h2>
        <div dangerouslySetInnerHTML={{__html: embedvideo}}></div>
        <button onClick={()=>navigate(-1)}>Back to movie list</button>
    </div>
  )
}

export default MovieDescription