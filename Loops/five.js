const program = ['js', 'java', 'html', 'css', 'sql']

program.forEach(function (lang){
console.log(lang);
})


// arrow function
// program.forEach(function (lang){
//     console.log(lang);
//     })

const hero =[
    {
        movie: "Pushpa",
        hero: 'AlluArjun'
    },
    {
        movie: "Devara",
        hero: 'NTR'
    },
    {
        movie: "OG",
        hero: 'PawanKalyan'
    }
]

hero.forEach((item) => {
    console.log(item.hero)
})