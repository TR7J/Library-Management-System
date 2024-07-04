import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "./BookCheckin.css";
import { AppDispatch, RootState } from "../../../../redux/ReduxStore";
import {
  checkinBook,
  setCurrentBook,
} from "../../../../redux/slices/BookSlice";
import { setDisplayLoan } from "../../../../redux/slices/ModalSlice";

export const BookCheckin: React.FC = () => {
  const book = useSelector((state: RootState) => state.book.currentBook);
  const user = useSelector(
    (state: RootState) => state.authentication.loggedInUser
  );
  const dispatch: AppDispatch = useDispatch();

  const checkin = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (book && user) {
      dispatch(
        checkinBook({
          book,
          employee: user,
        })
      );
      dispatch(setDisplayLoan(false));
      dispatch(setCurrentBook(undefined));
    }
  };

  return <div>{/* Add content here for the BookCheckin component. */}</div>;
};
