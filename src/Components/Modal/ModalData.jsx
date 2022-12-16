import React from 'react'
import Modal from './Modal';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

const itemsPerPage = 1;
function ModalData({closeModal}) {

    const questionsData = useSelector(state => state.questions)

    const [items, setItems] = useState([...questionsData].splice(0,itemsPerPage))

    const [ currentPage, setCurrentPage] = useState(0)

    const nextHandler = () => {
        const totalItems = questionsData.length;

        const nextPage = currentPage + 1;

        const firstIndex = nextPage * itemsPerPage;

        if(firstIndex === totalItems) return;

        setItems([...questionsData].splice(firstIndex,itemsPerPage))

        setCurrentPage(nextPage)
        console.log('next')
    }

    const prevHandler = () => {
        console.log('prev')
    }
  return (
    <div>
        <div>Hola</div>
        <div>
      { items && items.map(e => {
        return (<Modal 
        key={e.id}
        id={e.id}
        closeModal={closeModal} 
        question={e.question}
        answers={e.answers}
        currentPage={currentPage}
        nextHandler={nextHandler}
        prevHandler={prevHandler}
        />)}
    )}
    </div>
    </div>
  )
}

export default ModalData
