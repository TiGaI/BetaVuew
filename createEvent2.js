

.catch(resp => console.log('err upload', resp));

var doMyShit = function(){
  if (photoData){
    return s3().then(createActivity()).catch((resp => console.log('err upload', resp)));
  } else {
    return createActivity().catch((resp => console.log('err upload', resp)));
  }

  var s3 = function(){
    return fetch('http://localhost:8080/postToS3', {
        method: 'POST',
        headers: {
          'Content-Type': 'multipart/form-data'
        },
        body: photoData
      })
      .then(resp => resp.json())
      .then(resp => {
        console.log('success upload', resp);
        copy["activityImages"] = [resp.file.location];
      })
  }
  var createActivity = function() {
    return fetch("http://localhost:8080/createActivity", {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        activity: copy
      })
    })
    photoData = null;
  }
}
