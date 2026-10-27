import one from "../assets/image/p1.jpg";
import two from "../assets/image/p2.jpg";
import three from "../assets/image/p3.jpg"

function Product(){
  return(
  <div className="product">
    <div className="card">
      <img src={one}></img>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt hic ipsum unde iste excepturi aliquam itaque omnis mollitia, culpa nostrum necessitatibus eveniet aliquid porro natus alias, deleniti corporis placeat voluptatibus!</p>
    </div>
    <div className="card">
      <img src={two} alt=""></img>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt hic ipsum unde iste excepturi aliquam itaque omnis mollitia, culpa nostrum necessitatibus eveniet aliquid porro natus alias, deleniti corporis placeat voluptatibus!</p>
    </div>
    <div className="card">
      <img src={three} alt=""></img>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt hic ipsum unde iste excepturi aliquam itaque omnis mollitia, culpa nostrum necessitatibus eveniet aliquid porro natus alias, deleniti corporis placeat voluptatibus!</p>
    </div>

  </div>
  )
}

export default Product