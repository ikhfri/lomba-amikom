import Link from 'next/link';
import { data } from "@/app/data/ListProduct/DataListProduct";
import Image from 'next/image';
import { useCart } from '@/app/context/CartContext';



export default function CardProduct() {
  const CardData = data;
  const { addToCart } = useCart();

    return (
      <div className="py-16 w-screen absolute will-change-transform card-translate">
        <div className="container absolute left-0 px-4">
          <div className="flex gap-8">
            {CardData.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-[10px_-0px_18px_3px_#000] p-8 w-full md:w-[30%] lg:w-[22%] flex-shrink-0"
              >
                <div className="relative overflow-hidden">
                  <Image
                    className="object-cover w-full h-48"
                    src={item.image}
                    alt="Product"
                    width={1000}
                    height={1000}
                  />
                  <div className="absolute inset-0 bg-black opacity-40"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Link href={item.link}>
                      <button className="bg-white text-gray-900 py-2 px-6 rounded-full font-bold hover:bg-gray-300">
                        View Product
                      </button>
                    </Link>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mt-4">
                  {item.label}
                </h3>
                <p className="text-gray-500 text-sm mt-2">{item.description}</p>
                <div className="flex items-center justify-between mt-4">
                  <span className="text-gray-900 font-bold text-lg">
                    {item.price}
                  </span>
                  <button
                    onClick={() =>
                      addToCart({
                        id: item.id,
                        label: item.label,
                        price: item.price,
                        image: item.image,
                        quantity: 1,
                      })
                    }
                    className="bg-gray-900 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
}
