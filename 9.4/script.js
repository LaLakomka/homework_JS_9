
  const btn = document.querySelector('.btn');

  btn.addEventListener('click', () => {
    const width = document.querySelector('.width').value;
    const height = document.querySelector('.height').value;
  
    let resultNode = document.querySelector('.j-result');
    resultNode.textContent = '';
    if (!(width >= 100 && width <= 300 && height >= 100 && height <= 300)) {
      resultNode.innerHTML = 'Число вне диапазона от 100 до 300'; 
      return;
    }  
    fetch(`https://picsum.photos/${width}/${height}`)
      .then((response) => {
        document.querySelector('.result').src = response.url;
      });
  });