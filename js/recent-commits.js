// Note: This doesn't actually work, because the free API is rate-limited,
// and I can't figure out a way to securely add an API key to client-side JS.

async function buildRecentCommitsTable() {
  const commitsTable = document.getElementById('recent-commits-table');
  const commits = await (await 
      fetch('https://api.github.com/repos/kevinworkman/happycoding/commits',
          {mode: 'no-cors'}))
      .json();

  for(const commit of commits) {
    commitsTable.innerHTML += await buildRowHtml(commit);
  } 
}

async function buildRowHtml(commit) {
  let rowHtml = '<tr>';

  // Date
  rowHtml += '<td style="white-space: nowrap;">' +
      commit.commit.author.date.substring(0, 10) + '</td>';

  // Author
  // rowHtml += '<td><a href="' + commit.author.html_url + '">' +
  //     commit.author.login + '</a></td>';

  // Commit
  rowHtml += '<td><a href="' + commit.html_url + '">' +
      commit.commit.message + '</a></td>';

  // Files
  rowHtml += await buildFilesCellHtml(commit.url);

  rowHtml += '</tr>';
  return rowHtml;
}

async function buildFilesCellHtml(commitUrl) {
  const commit = await (await  fetch(commitUrl, {mode: 'no-cors'})).json();

  let cellHtml = '<td>';
  cellHtml += getFileUrl(commit.files[0].filename);
  cellHtml += '</td>';
  return cellHtml;
}

function getFileUrl(fileUrl) {
  fileUrl = fileUrl.replace('_posts/', '');
  return fileUrl;
}

buildRecentCommitsTable();