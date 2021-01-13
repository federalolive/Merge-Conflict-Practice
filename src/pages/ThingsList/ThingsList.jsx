import React from 'react';

const ThingsList = (props) => {
    return (
        <div>
            {props.things.map((thing) => 
            <ul>
                <li>
                    <img src={thing.image} alt="pet"/>
                </li>
                <li>
                    {thing.name}
                </li>
                <li>
                    {thing.attributes.map((attribute) =>
                        <li>
                            {attribute}
                        </li>
                    )}
                </li>
            </ul>
        )}
        </div>
    )}

export default ThingsList