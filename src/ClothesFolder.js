function ClothesFolder ({shop}){
    return(
        <div className = "products">
            {shop.map((element =>{
                const {id, name, price, image} = element;
                return(
                    <div className="product-card" key={id}>
                        <p>{id}</p>
                        <img src={image} width = "400px" height="500px" alt="clothes"/>
                        <h3>{name}</h3>
                        <h4>$ {price}</h4>
                    </div>
                )
            }))}
        </div>
    );
} 
export default ClothesFolder;