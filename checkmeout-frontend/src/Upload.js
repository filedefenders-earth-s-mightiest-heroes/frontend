import React from 'react';

export default class Upload extends React.Component{
    render(){
        return (
            <div className="Upload">
                <input id="image-file" type="file"/>
            </div>
        );
    };
}

