import React, { useState } from "react";
import Modal from "react-modal";
import { useDispatch, useSelector } from "react-redux";
import {
  favoriteClearActive,
  favoriteModalClose,
} from "../../store/slices/favorite/favoriteSlice";
import { startFavoriteCreate } from "../../store/slices/favorite/favoriteThunk";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#root");

export const FormModal = () => {
  const { favoriteActive, favoriteModal } = useSelector(
    (state) => state.favorite
  );
  const dispatch = useDispatch();

  const [note, setNote] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const favorite = {
      ...favoriteActive,
      note: note,
    };
    dispatch(startFavoriteCreate(favorite));
    closeModal();
  };

  const closeModal = () => {
    dispatch(favoriteModalClose());
    dispatch(favoriteClearActive());
    setNote("");
  };

  return (
    <>
      <div>
        <Modal
          isOpen={favoriteModal}
          // onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          closeTimeoutMS={200}
          //   className="modal"
          overlayClassName="modal-fondo"
          // contentLabel="Example Modal"
        >
          <form onSubmit={handleSubmit} noValidate>
            <h4 className="text-center">Agregar nota</h4>

            <div className="mb-3">
              <textarea
                type="text"
                className="form-control"
                placeholder="Notas"
                rows="5"
                name="note"
                value={note}
                onChange={(e) => setNote(e.target.value)}
              ></textarea>
            </div>

            <div className="mb-3 d-grid gap-2">
              <button type="submit" className="btn btn-outline-primary">
                <i className="far fa-save"></i>
                <span> Guardar</span>
              </button>
            </div>
          </form>
        </Modal>
      </div>
    </>
  );
};
