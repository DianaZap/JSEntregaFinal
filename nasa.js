
let infoNasa = document.querySelector("#infoNasa");

const fetchNasa = async () => {
    try {
        const response = await fetch("https://api.nasa.gov/planetary/apod?api_key=no5jcv0HARtIW6MROs1C2EonLXEu8IMuvLrIAvzr");
        const data = await response.json();
        console.log(data);
    
        const spaceinfo = document.createElement("div");
        spaceinfo.innerHTML = `
        <img src="${data.url}"></img>
        <h4>${data.title}></h4>
        <p>${data.explanation}</p>
        `;

        infoNasa.append(spaceInfo);
        } catch (err) {
            console.log(err);
        }
};

fetchNasa();
