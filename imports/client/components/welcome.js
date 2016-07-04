import React from 'react';

export const Welcome = React.createClass({
    render() {
        return <div className="container-fluid">
            <div className="row">
                <div className="col-md-4 col-md-offset-4 centered">
                    <h1>This is my App</h1>
                </div>
            </div>
        </div>;
    },
});