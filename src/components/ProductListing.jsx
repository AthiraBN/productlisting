import React from 'react'
import { useEffect, useState, useMemo } from 'react';
import { Row } from "react-bootstrap";
import { connect  } from "react-redux";
import { getPosts } from "../store/actions/postsActios";
import Product from './Product'
function ProductListing(props) {

    useEffect(() => {
        if(props.selectedCategory) {
            props.getPosts(props.selectedCategory);
        }   
        else {
            props.getPosts('');
        }
      }, [props.selectedCategory]);
    
    
  return (
    <Row>
         {props.posts.length > 0 && props.posts.map((post) => {
            return (<Product product={post} />)
        })} 
    </Row>
  )
}
const mapStateToProps = (state) => {
  
    return {
      posts: state.postsReducer.posts,
      selectedCategory: state.postsReducer.selectedCategory
    };
  };
  
  export default connect(mapStateToProps, { getPosts })(ProductListing);