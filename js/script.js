$(document).ready(function () {

    const toggleButton = document.getElementsByClassName('toggle-button')[0];
    const nlinks = document.getElementsByClassName('r-nav')[0];
    toggleButton.addEventListener('click', (e) => {
        e.preventDefault()
        nlinks.classList.toggle('act');


    })
 

    $(".project-card").click(function () {
        window.open($(this).find(".redirect_url").text(), '_blank');
        console.log($(this).find(".redirect_url").text())

    })


    $.ajax({
        url: "https://api.github.com/search/repositories?q=user:everly-gif+topic:project",
        method: "GET",
        headers: {
            'Authorization': 'Bearer'
        },
        success: function (result) {
            for (let i = 0; i < result.items.length; i++) {
                let card = `<div class='project-card' >
            <h3>${result.items[i].name}</h3>
            <div>${result.items[i].description}</div><br>
            <div><em>Languages :  ${result.items[i].language}</em></div>
            <div class='redirect_url' style='display:none'>${result.items[i].html_url}</div>
            </div>`;
                $(".project-card-container").append(card);
            }
            $(".project-card").click(function () {
                window.open($(this).find(".redirect_url").text(), '_blank');


            })
            console.log(result);
        }
    })
})

