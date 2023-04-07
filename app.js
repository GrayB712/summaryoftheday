const token = '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';
const repo = ' GrayB712/summaryoftheday';
const path = 'Comments.txt';

function addComment(comment) {
  const url = `https://api.github.com/repos/${repo}/contents/${path}`;
  const message = `Add comment ${new Date().toISOString()}`;
  const content = btoa(comment);

  fetch(url, {
    method: 'PUT',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
      Accept: 'application/vnd.github.v3+json'
    },
    body: JSON.stringify({
      message: message,
      content: content
    })
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('Failed to add comment');
    }
    return response.json();
  })
  .then(data => {
    console.log(`Comment added to ${data.content.html_url}`);
  })
  .catch(error => {
    console.error(error);
  });
}

const form = document.querySelector('form');
form.addEventListener('submit', event => {
  event.preventDefault();
  const comment = document.querySelector('#comment').value;
  addComment(comment);
});
