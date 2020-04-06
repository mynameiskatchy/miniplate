/**
 * main.tsx
 * To house main component of react app via typescript component
 */

import * as React from 'react';
import '../styles/main.css';

class Main extends React.Component<any, any> {

    render() {
        return(
            <h2 id="content" className="">
                Hello world! Welcome to my boilerplate project!
                <br/>
                I made it to be minimalistic & light-weight!
            </h2>
        );
    }
}

export default Main;