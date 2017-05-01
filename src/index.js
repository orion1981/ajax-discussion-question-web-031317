function fetchData(){
    var data = $.ajax({
        url: 'https://randomuser.me/api/',
        success: function(response){
            // Do something with response
        }
    })
    console.log(data)
}

fetchData()
