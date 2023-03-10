import React from 'react'
import { useGlobalContext } from "../context/Context";
import Checkbox from '@mui/material/Checkbox';

export interface CheckBoxProps {
    id: string;
    value: string;
}

function CheckboxComponent(props: CheckBoxProps) {
    const { id, value } = props;
    const { pagination, currPage, loadSelectedUsers } = useGlobalContext();
    const handleChange = (e: any) => {
        console.log(e.currentTarget.id);
        if (e.currentTarget.id === "checkBox-all") {
          const checkAll = e.currentTarget.checked;
          for (let user of pagination[currPage]) {
            const checkBox = document.getElementById(`checkBox-${user.id}`) as HTMLInputElement;
            if (checkAll) {
              checkBox!.checked = true
              loadSelectedUsers(checkBox.value, checkBox.checked);
            } else {
              checkBox.checked = false;
              loadSelectedUsers(checkBox.value, checkBox.checked);
            }
          }
        } else {
          loadSelectedUsers(e.currentTarget.value, e.currentTarget.checked);
        }
      };

      return (
       <input type="checkbox" id={id} value={value} onChange={handleChange} />
      );
}

const CheckBox = CheckboxComponent

export {CheckBox}
