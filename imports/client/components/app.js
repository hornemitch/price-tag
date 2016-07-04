import React from 'react';
import { AdminNav } from "../layouts/admin-nav";

export const App = React.createClass({
    render() {
        return <div>
            <AdminNav></AdminNav>
            { this.props.children }
        </div>;
    }
});