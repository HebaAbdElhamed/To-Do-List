import React from "react";
import {NavLink } from 'react-router-dom';
export default function Header(){
    const head=['Welcome','Tody'];
    const headMap=head.map((item,index)=>{
        return (
        <li className="px-2" key={index}>
            <NavLink className={({isActive})=> isActive ? 'bg-white text-blue-700 rounded p-4' :'' } to={item === 'Welcome' ? '/' : `/${item.toLowerCase()}`}>{item}</NavLink>
        </li>
        );
    });


    return (
    <header className="flex items-center justify-between h-16 p-2 font-bold text-white bg-blue-600">
        <h1 className="text-3xl">Tody</h1>
        <ul className="flex">
            {headMap}
        </ul>
    </header>
    );
}