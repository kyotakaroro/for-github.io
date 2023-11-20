const params = new URLSearchParams(window.location.search);
const index = params.get('index'); // 获取传递的索引

const xmlUrl = './articles.xml';

fetch(xmlUrl)
    .then(response => response.text())
    .then(str => (new window.DOMParser()).parseFromString(str, "text/xml"))
    .then(data => {
        const contentElement = document.getElementById('content');
        const contents = data.getElementsByTagName('content');
        if (index !== null && contents[index]) {
            contentElement.textContent = contents[index].textContent;
        } else {
            contentElement.textContent = 'Not Found';
        }
    })
    .catch(error => {
        console.error('Error fetching and parsing the XML', error);
    });
