import Image from "next/image"

export default function Card({ title, price, imageUrl }: { title: string; price: number; imageUrl: string }) {
    return (
        <div className="border rounded">
            <Image className="object-center w-full" src={imageUrl} alt="Card Image" width="400" height={400} />
            <div className="p-4">
                <h2 className="text-lg font-bold">{title}</h2>
                <p className="text-gray-600">Card content goes here.</p>
                <p>precio: ${price}</p>
            </div>
        </div>
    );
}
