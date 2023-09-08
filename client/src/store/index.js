import { proxy } from 'valtio';

const state = proxy({
    intor: true,
    color: '#E0CDA0',
    isLogoTexture: true,
    isFullTexuter: false,
    logoDecal: './threejs.png',
    fullDecal: './threejs.png',

});

export default state;