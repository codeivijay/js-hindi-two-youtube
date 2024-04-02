# Projects related to DOM

## projects link: 

# Solution Code
## Project One
```javascript
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body'); // document.body

buttons.forEach((button) => {
  //console.log(button);
  button.addEventListener('click', (e) => {
    console.log(e);
    console.log(e.target);
    if (e.target.id === 'grey') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'white') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'blue') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'yellow') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'purple') {
      body.style.backgroundColor = e.target.id;
    }
  });
});


```

## project two

```javascript

const form = document.querySelector('form');
form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');
  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height ${height}`;
  }
  if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight ${weight}`;
  } else {
    const bmi = ((weight / Math.pow(height, 2)) * 10000).toFixed(2);
    // show the result
    if (bmi < 18.6) {
      document.querySelector('#bmiw').innerHTML = 'Under Weight';
    }
    if (18.6 <= bmi <= 24.9) {
      document.querySelector('#bmiw').innerHTML = 'Normal Weight';
    }

    if (bmi > 24.9) {
      document.querySelector('#bmiw').innerHTML = 'Over Weight';
    }
    results.innerHTML = `<span>${bmi}</span>`;
  }
});

```