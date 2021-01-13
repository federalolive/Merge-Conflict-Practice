import React from 'react';
import {Link} from 'react-router-dom'

const ThingsList = (props) => {
    return ( 
        <div>
            <Link
            to={{
                pathname:'/'
            }}
        >
            Return
        </Link>
        {props.things.map((thing)=>
        <div>
            <img src={thing.image} height='200px'/>
            <h4>{thing.name}</h4>
                {thing.attributes.map((attribute)=>
                    <ul>
                        <li>
                            {attribute}
                        </li>
                    </ul>
                )}
        </div>
        )}
        <Link
            to={{
                pathname:'/'
            }}
        >
            Return
        </Link>
        </div>
     );
}
 
export default ThingsList;