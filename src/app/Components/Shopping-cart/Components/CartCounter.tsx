'use client';
import { useState } from "react";

interface props{
    initialValue:number
}
export default function CartCounterPage({initialValue}:props) {
    
    const [count, setCount] = useState(initialValue);
    return (
        <>
        <div className="flex flex-col">
            <span className="text-9xl">{count}</span>
            <div className="flex">
                <button onClick={() => setCount(count + 1)} className="flex w-20 bg-gray-600 items-center justify-center p-3 rounded-xl hover:bg-gray-800 transition-all w[100px] mr-2">
                    +1
                </button>
                <button onClick={() => setCount(count - 1)} className="flex w-20 bg-gray-600 items-center justify-center p-3 rounded-xl hover:bg-gray-800 transition-all w[100px] mr-2">
                    -1
                </button>
                </div></div>
        </>);
}