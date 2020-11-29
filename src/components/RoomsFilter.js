import React from 'react';
import { useContext } from 'react';
import { RoomContext } from '../context';
import Title  from '../components/Title';

const RoomsFilter = () => {
    const context = useContext(RoomContext)
    console.log(context)
    return (
    <div>hello from rooms filter</div>
    )
}

export default RoomsFilter;
