import { CookieUtil } from './lib/CookieUtil.js';

// const myCookies = document.cookie
// console.log(myCookies);

// document.cookie ="username=noppakrit;expires=max-age=300"
// console.log(myCookies);

// document.cookie = `credit=3;expires=${new Date(Date.now()+1000*60*60*24)}`
// document.cookie = `lecture=noppakrit;expires=${new Date(2023, 11, 25)}`

// console.log(myCookies)
CookieUtil.set('course', 'INT201', new Date(2023, 11, 31))
CookieUtil.set('credit', '2', new Date(2024, 0, 1))
console.log(CookieUtil.get('course'))
console.log(CookieUtil.get('credit'))

CookieUtil.unset('course name')//cookie expire

//new Date(year, monthIndex, day)
document.cookie = `lecture=Noppakrit;expires=${new Date(2023, 11, 25)};`