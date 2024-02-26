
import { checkForURL } from './urlChecker';


async function handleSubmit(event) {
    event.preventDefault();
    const formText = document.getElementById('url').value;
    if (checkForURL(formText)) {
        console.log("::: Form Submitted :::");

        try {
            const response = await postData('http://localhost:8000/api', { url: formText });
            updateUI(response);
        } catch (error) {
            console.log('Error:', error);
        }
    } else {
        alert('please try with a valid URL.');
    }
}

async function postData(url = "", data = {}) {
    console.log('Analyzing:', data);

    const response = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    });

    try {
        const newData = await response.json();
        console.log('Data received:', newData);
        return newData;
    } catch (error) {
        console.log('Error:', error);
    }
}


function updateUI(response) {
    document.getElementById('polarity').innerHTML = `Polarity: ${polarityChecker(response.score_tag)}`;
    document.getElementById('agreement').innerHTML = `Agreement: ${response.agreement}`;
    document.getElementById('subjectivity').innerHTML = `Subjectivity: ${response.subjectivity}`;
    document.getElementById('confidence').innerHTML = `Confidence: ${response.confidence}`;
    document.getElementById('irony').innerHTML = `Irony: ${response.irony}`;
}


function polarityChecker(score) {
    switch (score) {
        case 'P+':
            return 'Strong Positive';
        case 'P':
            return 'Positive';
        case 'NEW':
            return 'Neutral';
        case 'N':
            return 'Negative';
        case 'N+':
            return 'Strong Negative';
        case 'NONE':
            return 'No Sentiment';
        default:
            return 'Unknown';
    }
}

export { handleSubmit };
export { polarityChecker };