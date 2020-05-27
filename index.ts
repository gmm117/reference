import './public/reset.scss';
import './public/index.scss';
import curry from './src/curry';
import prototype from './src/prototype';

"use strict";

const curryid : HTMLElement | null = document.getElementById('curryid');
curryid.addEventListener('click', () => {
    curry();
});

const prototypeid : HTMLElement | null = document.getElementById('prototypeid');
prototypeid.addEventListener('click', () => {
    prototype();
});

