import './public/reset.scss';
import './public/index.scss';
import curry from './src/curry';

"use strict";

const curryid : HTMLElement | null = document.getElementById('curryid');
curryid.addEventListener('click', () => {
    curry();
})