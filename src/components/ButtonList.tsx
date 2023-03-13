import { Button } from "./ButtonComponent";
import React from "react";
import { useGlobalContext } from "../context/Context";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import {SkipPrevious, ArrowBack, ArrowRight } from '@mui/icons-material';
import './admin.css'
function ButtonListComponent()
{
    const { pagination } = useGlobalContext();
    const btns = Object.keys(pagination);
  
    const buttons = btns.map((btn) => {
      return (
        <Button className="page-btn" key={btn} text={btn}>
          {btn}
        </Button>
      );
    });

    return (
        <div className="btn-container">
          <Button className="delete-btn" text="delete-selected" id="delete-selected">
            Delete Selected
          </Button>
          <div className="page-container">
            <Button className="first-btn" text="first">
              <SkipPrevious />
            </Button>
            <Button className="prev-btn" text="prev">
              <ArrowBack />
            </Button>
            {buttons}
            <Button className="next-btn" text="next">
              <ArrowRight />
            </Button>
            <Button className="last-btn" text="last">
              <ArrowRightAltIcon />
            </Button>
          </div>
        </div>
      );
}

const ButtonList = ButtonListComponent

export {ButtonList}