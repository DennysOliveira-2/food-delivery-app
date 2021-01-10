import { useEffect, useState } from 'react';
import { fetchProducts } from './api';
import { checkIsSelected } from './helpers';
import Footer from '../Footer';
import OrderLocation from './OrderLocation';
import OrderSummary from './OrderSummary';
import ProductsList from './ProductsList';
import StepsHeader from './StepsHeader'
import './styles.css'
import { OrderLocationData, Product } from './types';

function Orders() {
    const [products, setProducts] = useState<Product[]>([]);
    const [selectedProducts, setSelectedProducts] = useState<Product[]>([]);
    const [orderLocation, setOrderLocation] = useState<OrderLocationData>();

    const totalPrice = selectedProducts.reduce((sum, item) => {
        return sum + item.price;
    }, 0);


    useEffect(() => {
        fetchProducts()
            .then(response => setProducts(response.data))
            .catch(error => console.log(error))
    }, []);

    const handleSelectProduct = (product: Product) => {
        const isAlreadySelected = checkIsSelected(selectedProducts, product);
      
        if (isAlreadySelected) {
          const selected = selectedProducts.filter(item => item.id !== product.id);
          setSelectedProducts(selected);
        } else {
          setSelectedProducts(previous => [...previous, product]);
        }
      }

    return(
        <>
            <div className="orders-container">
                <StepsHeader />
                <ProductsList 
                    products={products}
                    onSelectProduct={handleSelectProduct}
                    selectedProducts={selectedProducts}
                />
                <OrderLocation onChangeLocation={location => setOrderLocation(location)} />
                <OrderSummary 
                    amount={selectedProducts.length}
                    totalPrice={totalPrice}
                />
            </div>
            <Footer />
        </>
    )
}

export default Orders;