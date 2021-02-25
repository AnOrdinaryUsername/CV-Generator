// https://stackoverflow.com/a/50124677
// Grabs all the text contents in each <li>s and stores them in bulletPoints[];
const parser = new DOMParser().parseFromString(test, 'text/html');
const bulletPoints = [...parser.querySelectorAll('li')].map((li) => li.textContent);
