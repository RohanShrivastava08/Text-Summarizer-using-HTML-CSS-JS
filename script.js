document.getElementById('summarizeBtn').addEventListener('click', () => {
    const inputText = document.getElementById('inputText').value;

    if (inputText.trim() === '') {
        alert('Please enter some text to summarize.');
        return;
    }

    const summary = generateSummary(inputText);

    document.getElementById('summary').textContent = summary;
});

function generateSummary(text) {
    // Basic text summarization logic
    const sentences = text.split('.').filter(sentence => sentence.trim() !== '');
    
    // If the text is very short, return as is
    if (sentences.length <= 2) {
        return text;
    }

    // Generate a brief summary by taking the first and last sentences
    const summary = [
        sentences[0], 
        ...(sentences.length > 2 ? ['...', sentences[sentences.length - 1]] : [])
    ].join('. ');

    return summary;
}
