



function ProductItem({product}){
    
    const {
        title,
        thumbnail,
        price
    } = product

    return(
        <div className="item">
            <img src={thumbnail}/>
            <h2>{title}</h2>
            <p>{price}</p>
        </div>
    )
}

export default ProductItem