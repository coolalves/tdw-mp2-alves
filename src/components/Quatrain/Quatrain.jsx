import React from 'react';
import './Quatrain.scss';

const Quatrain = (props) => {

let data = props;


    return (
        <div className={"quatrain-container"}>
            <div className={"quatrain"}>
                <p className={"quatrain-header"}>Your Quatrain</p>
                <div>
                    <p className={"quatrain-text"}> {data.props} </p>
                </div>
            </div>
        </div>

    )
}

export default Quatrain;