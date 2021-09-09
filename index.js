// document.write(`<h2> Hello There</h2> `);

// 6644f8b774a34d8c84877cf6a191e096 : NEWS API KEY

// let apiKey = `6644f8b774a34d8c84877cf6a191e096`;
// let source = `bbc-news`;
// Main News Container
let newsAccordion = document.getElementById(`newsAccordion`);

// Getting the ajax get request

const xhr = new XMLHttpRequest();

xhr.open(`GET`, `https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=6644f8b774a34d8c84877cf6a191e096`, true);

xhr.onload = function () {

    if (this.status === 200) {
        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        // console.log(json);
        console.log(articles);

        let newsHTML = "";

        articles.forEach((element, index) => {

            let news = `<div class="card">
<div class="card-header" id="heading${index}">
    <h2 class="mb-0">
        <button class="btn btn-link" type="button" data-bs-toggle="collapse"
            data-bs-target="#collapse${index}" aria-expanded="true" aria-controls="collapse${index}">
            ${element[`title`]}
        </button>
    </h2>
</div>

<div id="collapse${index}" class="collapse" aria-labelledby="heading${index}" data-parent="#newsAccordian">
<div class="class-body">
    ${element[`content`]}. <a href="${element[`url`]}" target="_blank">Read More Here </a>
</div>
</div>
</div>
`
// console.log(articles[news]);

newsHTML += news;
        });

        newsAccordion.innerHTML = newsHTML;
    } // if statement ends here

    else {
        console.log(`Some Error Occured`);
    }
}

xhr.send()

