import './public/reset.scss';
import './public/index.scss';
import curry from './src/curry';
import prototype from './src/prototype';
import axios from './src/axios';
import storage from './src/storage';

"use strict";

const curryid : HTMLElement | null = document.getElementById('curryid');
if(curryid) {
    curryid.addEventListener('click', () => {
        curry();
    });
}


const prototypeid : HTMLElement | null = document.getElementById('prototypeid');
if(prototypeid) {
    prototypeid.addEventListener('click', () => {
        prototype();
    });
}


const axiosid : HTMLElement | null = document.getElementById('axiosid');
if(axiosid) {
    axiosid.addEventListener('click', () => {
        axios();
    });
}

const storageid : HTMLElement | null = document.getElementById('storageid');
if(storageid) {
    storageid.addEventListener('click', () => {
        storage();
    });
}



