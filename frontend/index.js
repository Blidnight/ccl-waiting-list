const waitingForm = document.querySelector('#waitingForm');

waitingForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const fullName = document.querySelector('#fullName').value;
  const email = document.querySelector('#email').value;
  const phone = document.querySelector('#phone').value;
  const message = document.querySelector('#message').value;

  await fetch("http://localhost:3000/waitingList", {
    method: 'post',
    headers: {
      "content-type": "application/json"
    },
    body: JSON.stringify({
      fullName : fullName,
      email : email,
      phone : phone,
      message: message
    })
  });

  alert('Succesfully join the waitlist');
})