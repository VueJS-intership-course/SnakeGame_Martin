export class Player {
  storage() {
    const scoreList = document.getElementById('score-list');
    const readyStorage = JSON.parse(localStorage.getItem('storage'));
    const sortedData = readyStorage.sort((a, b) => {
      if (b.score === a.score) {
        return b.date - a.date;
      }
      return b.score - a.score;
    });

    scoreList.innerHTML = '';
    for (const item of sortedData) {
      const player = item.player;
      const score = item.score;
      const date = new Date(item.date).toString();

      const formattedText = `Player: ${player}, Score: ${score}, Date: ${date}`;
      const li = document.createElement('li');
      li.textContent = formattedText;
      scoreList.appendChild(li);
    }
  }
}
