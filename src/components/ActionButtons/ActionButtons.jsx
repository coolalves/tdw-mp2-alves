import React from 'react';
import './ActionButtons.scss';
import '../../styles/App.scss';
import { TwitterShareButton, TwitterIcon } from 'react-share';

const ActionButtons = (props) => {
    let data = props;

    return (
        <div className={"buttons"}>
            <button className={"custom-button"}> pick quote</button>
            <button className={"custom-button"}> change quote</button>
            <TwitterShareButton
                options={{
                    buttonHashtag: undefined,
                    screenName: undefined,
                    size: 'large',
                    text: data,
                    via: 'MCTW-TDW-MP2'
                }}
                url={"idiot verse: " + data.props + " -idiot celebrity "}>
                <TwitterIcon size={40} />
            </TwitterShareButton>
        </div >
    )
};

export default ActionButtons;