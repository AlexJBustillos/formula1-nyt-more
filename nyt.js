console.log(API_KEY);

// Write code here
// fetch(`https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=big&opening-date=1980-01-01;1990-01-01&api-key=${API_KEY}`)
// .then((res) => res.json()).then((json) => {
//     console.log(json)
// })

async function deliverable1() {
    console.log('I should log before data');
    const res = await fetch(`https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=big&opening-date=1980-01-01;1990-01-01&api-key=${API_KEY}`)
    const json = await res.json()
    console.log(json)
    console.log('I should be after data');
}
deliverable1()
