import React  from "react";
import './ButtonComponent.css'
import { useGlobalContext } from "../../context/Context";
import '../admin.css'
export interface SimpleButtonProps {
    id?: string;
    children: any;
    text: string;
    className: string;
}

function ButtonComponent(props:SimpleButtonProps )
{
    const { handlePage, removeItem, removeSelected, editItem } = useGlobalContext();

  const { id, children, text } = props;

  const classes = `btn ${props.className}`;

  const handleClick = (e:any) => {
    const currEl = e.currentTarget.dataset.text;
    const currId = e.currentTarget.id;

    handlePage(currEl);
    if(currEl === "edit") {
        editItem(currId)
    } else {
        removeItem(currId)
    }
    if (currEl === "delete-selected") {
      // If DELETE SELECTED is clicked, remove the selected rows
      removeSelected();
    }
  };
  return (
    <>
      <button
        type="button"
        className={classes}
        id={id}
        data-text={text}
        onClick={handleClick}
      >
        {children}
      </button>
    </>
  );
}

const Button =  ButtonComponent;

export { Button } 