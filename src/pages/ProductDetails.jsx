
export default function ProductDetails() {


  return (
    <div className="p-6 max-w-4xl mx-auto">
      <img
        src={product.image}
        alt={product.title}
        className="h-80 w-full object-contain"
      />

      <h1 className="text-2xl font-bold mt-4">{product.title}</h1>
      <p className="text-gray-500">{product.category}</p>

      <p className="mt-4">{product.description}</p>

      <p className="text-xl font-bold mt-4">${product.price}</p>
    </div>
  );
}
