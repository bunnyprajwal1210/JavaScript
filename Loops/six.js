const program = ['js', 'java', 'html', 'css', 'sql']

// const value= program.forEach((item) => {
//     return item;
// })

// console.log(value);

// filter

const arr =[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const numarr= arr.filter((num) => num > 4)
// // console.log(numarr)

// const numarr= arr.filter((num) => {
//     return  num > 4
// })
// console.log(numarr)

// using for each

// const num = []

// arr.forEach((newnum) => {
// if(newnum>5){
//     num.push(newnum)
// }
// })

// console.log(num)

const books = [
    { title: 'Bahubali', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'pushpa', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'AVPL', genre: 'History', publish: 2005, edition: 2007 },
    { title: 'Devara', genre: 'Action', publish: 2007, edition: 2010 },
    { title: 'Game Changer', genre: 'Action', publish: 2003, edition: 2014 },
    { title: 'Guntar Karam', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Kalki', genre: 'Future', publish: 1986, edition: 1996 },
    { title: 'Salar', genre: 'Action', publish: 2011, edition: 2016 },
    { title: 'Arya', genre: 'Love', publish: 1981, edition: 1989 },
  ];


//   const user = books.filter((bk) => bk.genre === "Fiction" )
//   console.log(user)

const pub = books.filter((p) => p.publish >= 2000 && p.genre === "Action" && p.edition === 2010)
console.log(pub)