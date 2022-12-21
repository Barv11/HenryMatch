import React from "react";
import Modal from "./Modal";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

const itemsPerPage = 1;
function ModalData({ closeModal }) {
  const questionsData = useSelector((state) => state.questions);

  const [items, setItems] = useState(
    [...questionsData].splice(0, itemsPerPage)
  );

  const [currentPage, setCurrentPage] = useState(0);

  const [questionsSave, setQuestionsSave] = useState({
    quest1: [],
    quest2: [],
    quest3: [],
    quest4: [],
    quest5: [],
    quest6: [],
    quest7: [],
    quest8: [],
    quest9: [],
    quest10: [],
  });

  const nextHandler = (props) => {
    console.log(props)
    const totalItems = questionsData.length;

    const nextPage = currentPage + 1;

    const firstIndex = nextPage * itemsPerPage;

    if (firstIndex === totalItems) return;

    if (props.length > 0) {
      setItems([...questionsData].splice(firstIndex, itemsPerPage));
      setCurrentPage(nextPage);

    } else {
      alert("Selecciona al menos uno");
    }
  };

  

  return (
    <div>
      <div>Hola</div>
      <div>
        {items &&
          items.map((e) => {
            return (
              <Modal
                key={e.id}
                id={e.id}
                closeModal={closeModal}
                question={e.question}
                answers={e.answers}
                currentPage={currentPage}
                nextHandler={nextHandler}
              />
            );
          })}
      </div>
    </div>
  );
}

export default ModalData;
