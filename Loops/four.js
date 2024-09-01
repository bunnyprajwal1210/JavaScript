// for in loop for object

const lang ={
    js: 'javascript',
    java: 'java',
    css: 'style',
    html: 'structure'
}

// for (const key in lang) {
//      console.log(`${key}=> ${lang[key]}`)
// }


// for in loop for array

const program = ['js', 'java', 'html', 'css', 'sql']

for (const key in program) {
    // console.log(program[key])
}

// for in loop for map doesn't work

const  M = new Map();
M.set('IN', 'India')
M.set('USA', 'America')
M.set('UK', 'Kingdom')

for (const key in M) {
    console.log(key)
}