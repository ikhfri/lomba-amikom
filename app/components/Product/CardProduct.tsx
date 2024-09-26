
import Link from 'next/link';
import DataProduct from '@/app/data/ListProduct/DataListProduct.json'

export default function CardProduct() {
    const CardData = DataProduct.product;

    return (
    <div className="bg-gray-900 py-16 w-screen">
        <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {CardData.map((item, index) => (
                    <div key={index} className="bg-white rounded-lg shadow-lg p-8">
                        <div className="relative overflow-hidden">
                            <img className="object-cover w-full h-full" src={item.image} alt="Product" />
                            <div className="absolute inset-0 bg-black opacity-40"></div>
                            <div className="absolute inset-0 flex items-center justify-center">
                                <button className="bg-white text-gray-900 py-2 px-6 rounded-full font-bold hover:bg-gray-300">View Product</button>
                            </div>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mt-4">{item.label}</h3>
                        <p className="text-gray-500 text-sm mt-2">{item.description}</p>
                        <div className="flex items-center justify-between mt-4">
                            <span className="text-gray-900 font-bold text-lg">{item.price}</span>
                            <Link href={item.link}><button className="bg-gray-900 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800">Add to Cart</button></Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
    )
}