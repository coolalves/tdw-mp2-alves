import React from 'react';
import { useState } from 'react';
import './ActionButtons.scss';
import '../../styles/App.scss';

const ActionButtons = () => {
  
    return (
        <div className={"buttons"}>
          
            <button   className={"custom-button"}> pick quote</button>
            <button   className={"custom-button"}> change quote</button>
        </div>
    )
};

export default ActionButtons;