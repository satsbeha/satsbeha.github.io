async function fetchUser(userid) {
    let user = await fetch("http://jsonplaceholder.typicode.com/users/" + userid);
    return user.text();
}
async function fetchPosts() {
    let post = await fetch("http://jsonplaceholder.typicode.com/posts/");
    return post.text();
}

async function fetchComment(postId) {
    let post = await fetch("http://jsonplaceholder.typicode.com/comments?postId=" + postId);
    return post.text();
}
let posts = []
let userDetails = {}
let comments = []
let userid = 0;

function loaduser() {
    userid = document.getElementById("txtUserId").value;
    if (!userid) {
        alert("please enter userid")
        return;
    }
    fetchUser(userid).then(user => {
        document.getElementById("commentItems").innerHTML = ""
        document.getElementById("username").innerHTML = ""
        document.getElementById("email").innerHTML = ""
        document.getElementById("address").innerHTML = ""

        if (user) {
            user = JSON.parse(user)
            document.getElementById("username").innerHTML = user.name;
            document.getElementById("email").innerHTML = user.email;
            let add = user.address;
            document.getElementById("address").innerHTML = add.suite + ' ' + add.street + ' ' + add.city + ' ' + add.zipcode
            document.getElementById("mapimg").src = 'https://www.mapquestapi.com/staticmap/v5/map?key=E9QROXQBS9fTr3e9YXbggZFp5UkZIbDf&center=' + add.geo.lat + ',' + add.geo.lng + '&size=1100,500@2x';

            document.getElementById("postitems").innerHTML = ""
            for (let i = 0; i < posts.length; i++) {
                value = posts[i]
                if (value.userId == userid)
                    document.getElementById("postitems").innerHTML += '<tr><td>' + value.title + '</td><td>' + value.body + '</td><td class="btn btn-light" data-id="' + value.id + '">show comments</td> </tr>';
            }
        }
    })
}
$(document).ready(function() {


    fetchPosts().then(p => {
        posts = JSON.parse(p)

    })

    $('body').on('click', '.btn-light', function(a) {

        var postid = $(this).attr('data-id');
        fetchComment(postid).then(p => {
            comments = JSON.parse(p)
            document.getElementById("commentItems").innerHTML = ""
            for (let i = 0; i < comments.length; i++) {
                value = comments[i]
                document.getElementById("commentItems").innerHTML += '<tr><td scope="col">' + value.name + '</td><td >' + value.email + '</td><td >' + value.body + '</td> </tr>';
            }
        })


    })
})