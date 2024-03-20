import React, { useEffect, useState } from 'react'
import { Row, Col, Card, CardBody, Container, Button } from "react-bootstrap";
import StarRatings from 'react-star-ratings';
import {addOrUpdateCart} from '../store/actions/cartActions'

function Product({ product }) {

    const [count, setCount] = useState(0);
    const [cartItem, setCartItem] = useState({prodId: '', count: 0});

    useEffect(() => {
        if(cartItem.prodId !== '' && cartItem.count > 0) {
            addOrUpdateCart(cartItem)
        }
       
    },[cartItem])

    useEffect(() => {
        if(count > 0) {
            setCartItem({prodId: product.id, count: count})
        }
       
    },[count])


    const incrementCount = () => {
        setCount(count+1);
    }
    const decrementCount = () => {
        setCount((prevCount) => { return prevCount >0 ?  prevCount-1 : 0 })
    }

    return (
        <Col className="my-3" sm={6} lg={4} key={product.id}>
            <Card className='border-0 shadow position-relative'>
                <CardBody>
                    <img className="productImage" src={product.image} />
                    <h6 className='my-3'> {product.title}</h6>
                    <div className='d-flex align-items-center w-100'>
                        <StarRatings
                            rating={Number(product.rating.rate)}
                            starRatedColor="orange"
                            numberOfStars={5}
                            name="rating"
                            starDimension="15px"
                        />
                        <span className='mt-1 ms-2'>({product.rating.count})</span>
                    </div>
                    
                    <div className='d-flex w-100 mt-3'>
                        <h3 className=' text-start'>$ {product.price}</h3>
                        <div className='ms-auto'>
                            <Button onClick={()=> {decrementCount()}} className='btn-to-cart'>-</Button>
                            <Button variant='transparent'><span className='quantity'>{count}</span></Button>
                            <Button onClick={()=> {incrementCount()}} className='btn-to-cart'>+</Button>
                        </div>
                    </div>
            </CardBody>
        </Card>
        </Col>
    )
}

export default Product;