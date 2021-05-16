const div = document.getElementById('studentList');
const  url = 'http://hp-api.herokuapp.com/api/characters';

function nodeElement(element){
    return document.createElement(element);
}
function parentElement(parent,el){
    return parent.appendChild(el);
    
}

const divRow = nodeElement('div');
divRow.className = 'row';
parentElement(div,divRow);
fetch(url).
    then((response) =>  response.json()).

    then((response) => {
        console.log(response);
        let chartacters = response;
        return  chartacters.map( function (character){
            debugger

            let divCard = nodeElement('div');
            let img = nodeElement('img');
            let divCardBody = nodeElement('div');
            let h5 = nodeElement('h5');
            let divImg = nodeElement('div');

            divImg.className = 'd-flex justify-content-center text-center mt-2';
            img.className = 'card-img-top img ';
            divCardBody.className= 'card-body';
            h5.className = 'card-title text-center';
            divCard.className = 'card col-3 m-5';
            img.src = character.image;
            h5.innerHTML = character.name;

            parentElement(divRow,divCard);
            parentElement(divCard,divImg)
            parentElement(divImg,img);
            parentElement(divCard,divCardBody);
            parentElement(divCardBody,h5);

        })
    }).
    catch((err) => {
        console.log(err);
    });