import React, { Component } from 'react';
import { Button } from 'reactstrap';

class Home extends Component {
    render(){
        return (
            <div className='home'>
                <Button color="danger">Danger!</Button>
            </div>
        )
    }
}

export default Home;