

const ProductCard= ()=>{
    return (
        <div className="border rounded-md p-2 md:max-w-2xl flex-cols ">
            <img className=" rounded-md" src="https://images.pexels.com/photos/1456706/pexels-photo-1456706.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
            <h3>Nike Homme Defy All Day Sneaker</h3>
            <p className="text-sm">Les prix des articles vendus sur Amazon incluent la TVA. En fonction de votre adresse de livraison, la TVA peut varier au moment du paiement. Veuillez voir les</p>
            <div className="flex my-2 space-x-1">
            <span className=" inline-block w-5 h-5 bg-indigo-600 rounded-full " />
            <span className=" inline-block w-5 h-5 bg-yellow-600 rounded-full" />
            <span className=" inline-block w-5 h-5 bg-red-600 rounded-full " />
            </div>
            <div className="flex items-center justify-between my-2">
                <span>$599.99</span>
                <div className="flex items-center space-x-1">
                    <img className="w-8 h-8 rounded-full" src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
                    <h4 className="text-lg">Nike Store</h4>
                </div>
            </div>
            <div className="flex items-center justify-between space-x-2 mt-3">
                <button className="bg-indigo-600 p-2 rounded-md w-full">Edit</button>
                <button className="bg-red-600 p-2 rounded-md w-full">Delete</button>
            </div>
            
            
        </div>

    );
}

export default ProductCard