function renderSingle() {
    let newObject = localStorage.getItem('viewedPost')
    console.log(newObject);
    let request = JSON.parse(newObject)
    console.log(request)
    // console.log(request.title)
    document.getElementById('request-id').innerHTML = request.id
    document.getElementById('request-title').innerHTML = request.title
    document.getElementById('request-body').innerHTML = request.body
}

renderSingle();