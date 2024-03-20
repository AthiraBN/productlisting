import React from 'react'
import { useEffect, useState } from 'react';
import { connect } from "react-redux";
import * as actionCreators from "../store/actions/postsActios";
import { ListGroup } from 'react-bootstrap';

function CategoryList(props) {

    const [selectedCat, setSelectedCat] = useState();
    useEffect(() => {
        props.getCategories();
      }, []);
    
      const handleCategoryChange = (e) => {
        if(e.target.checked) {
            setSelectedCat(e.target.value);
        }
        else {
            setSelectedCat('');
        }
      }
      useEffect(()=> {
        if(selectedCat != '') {
            props.updateCategory(selectedCat)
        }
        else {
            props.updateCategory('')
        }
      }, [selectedCat])

  return (
    <div className='p-lg-4 py-4 text-start'>
        <h4>Categories</h4>
        <ListGroup className='mt-3' as="ul">
        {props.categories.length > 0 && props.categories.map((category, index) => {
            return <ListGroup.Item key={index} as="li" className='border-0'>
                <input checked={selectedCat === category} type='checkbox' value={category} onChange={handleCategoryChange} key={category}/> {camelize(category) }
                </ListGroup.Item >
        })} 
        </ListGroup >
    </div>
  )
}

const mapStateToProps = (state) => {
    return {
        categories: state.postsReducer.categories
    };
  };

 /*  const mapDispatchToProps = (dispatch) => {
    return {
        // dispatching plain actions
        getCategories: () => dispatch({ type: 'GET_CATEGORIES' }),
        updateCategory: () => dispatch({ type: 'UPDATE_CATEGORY' }),
      }
  } */

  const camelize = (str) => {

    const firstLetter = str.charAt(0)
    const firstLetterCap = firstLetter.toUpperCase()
    const remainingLetters = str.slice(1)
    const capitalizedWord = firstLetterCap + remainingLetters
    return capitalizedWord
  }

export default connect(mapStateToProps, actionCreators)(CategoryList);
