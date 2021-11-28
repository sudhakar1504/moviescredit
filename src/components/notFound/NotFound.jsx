import React from 'react';
import { Wrapper} from './Notfound.styled';
import { Link} from 'react-router-dom';

const NotFound = ({title,setsearch}) => {
    return (
        <Wrapper>
            <h3>Refresh the page..</h3>
            <h2>\__{title}__/</h2>
            <Link to='/'>
                <button onClick={() => setsearch('')}>Go Back</button>
            </Link>
        </Wrapper>
    )
}

export default NotFound
