
import { Metadata } from "next";
import CartCounterPage from '../../Components/Shopping-cart/Components/CartCounter';
// import CartCounterPage from '@/app/Components/Shopping-cart/';

export const metadatas: Metadata = {
    title:'Counter Page',
    description: 'Counter page description'
};


export default function CounterPage() {
  
    return (
        <div className="flex flex-col justify-center w-full h-full items-center">
            <div className="flex flex-col items-center justify-center">
                <span>Productos en el Carrito </span>
              
                <div className="flex">
               <CartCounterPage initialValue={100}/>
                </div>
            </div>
        </div>
    );
}
