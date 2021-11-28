import React from 'react';
import { Wrapper} from './Notfound.styled';
import { Link} from 'react-router-dom';

const NotFound = ({title,setsearch}) => {
    return (
        <Wrapper>
            <h2>{title}</h2>
            <Link to='/'>
                <button onClick={() => setsearch('')}>Go Back</button>
            </Link>
        </Wrapper>
    )
}

export default NotFound
