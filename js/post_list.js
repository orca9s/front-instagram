function getToken(username, password) {
  axios.post('http://localhost:8000/api/users/auth-token/', {
    username: username,
    password: password,
  })
  .then(function (response){
    console.log(response);
  })
  .catch(function (error){
    console.log(error)
  })
}


function authTest() {
  axios({
    method: 'get',
    url: 'http://localhost:8000/api/users/auth-test/',
    headers: {
      'Authorization': 'Token ' + getCookie('token')
    }
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
}

// /api/posts/에 GET요청
axios.get('http://localhost:8000/api/posts/')
  // 성공시
  .then(function (response) {
    // response.data가 가진 요소들을 순회
    for (var i = 0; i < response.data.length; i++) {
      // 각 순회에 해당하는 요소는 curPost
      var curPost = response.data[i];
      
      console.log(curPost);
      var curElement = '<div class="card mb-3">';
      curElement += '<div class="card-header">' + curPost.author + '</div>';
      curElement += '  <div class="card-body p-0">';
      curElement += '    <img src="' + curPost.photo + '"width="50%">'
      curElement += '  </div>';
      curElement += '</div>';
      $('.content').append(curElement);
      console.log(curPost.photo)
    }
  })
  .catch(function (error){
    console.log(error);
  });
