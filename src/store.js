import { writable } from 'svelte/store';
//export const name = 'herlangga';
export const name = writable(localStorage.getItem("name") || "");
export const IsLogin = writable(localStorage.getItem("IsLogin") || 0);