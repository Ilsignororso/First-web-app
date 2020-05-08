let data = {        //initial data set, unused
    photo: 'images/img1.jpg',
    title: "Stars",
    description: "Jewels of the night sky."
};
let objectArray = [     //Array of objects with image location, title, text
    {
        photo: "images/img1.jpg",
        title: "Title 0",
        description: "Desc 0",
    },
    {
        photo: "images/img2.jpg",
        title: "Title 1",
        description: "Desc 1"
    },
    {
        photo: "images/img3.jpg",
        title: "Title 2",
        description: "Desc 2"
    },
    {
        photo: "images/img4.jpg",
        title: "Title 3",
        description: "Desc 3"
    },
    {
        photo: "images/img5.jpg",
        title: "Title 4",
        description: "Desc 4"
    },
    {
        photo: "images/img6.jpg",
        title: "Title 5",
        description: "Desc 5"
    },
    {
        photo: "images/img7.jpg",
        title: "Title 6",
        description: "Desc 6"
    },
    {
        photo: "images/img8.jpg",
        title: "Title 7",
        description: "Desc 7"
    },
    {
        photo: "images/img9.jpg",
        title: "Title 8",
        description: "Desc 8"
    }
];

var currentPhoto = 0;       //main picture display variable

function displayMain() {    //main picture display function
$('#mainImage').attr('src', objectArray[currentPhoto].photo);
$('#photoTitle').text(objectArray[currentPhoto].title);
$('#photoDescription').text(objectArray[currentPhoto].description);

};

function displayThumb() {   //creating thumbnails based on array content
    objectArray.forEach((objectArray, index) => {
        $('.thumbContainer').append(`<p class="thumbnail"><img class="thumbImg"  data-index="${[index]}" src="images/img${index+1}.jpg"></img></p>`)
        console.log(index)
                                //PROBLEM: Can't insert single object key into the appended code (ex. photo, title)
 })                             //hidden message: <p class="hiddenMsg">Object title ${index}</p>
};

displayThumb()      //initial displays

displayMain();

$('#rightArrow').click(() => {      //right arrow click
    if (currentPhoto === 8) {
        currentPhoto = 0
        displayMain()
    } else {
        ++currentPhoto
        displayMain()
    }
    
});

$('#leftArrow').click(() => {       //left arrow click
    if (currentPhoto === 0) {
        currentPhoto = 8
        displayMain()
    } else {
        --currentPhoto
        displayMain()
    }
});
$('.thumbnail').click((event) => {  //Changing main photo on thumbnail click
var clickedThumb = $(event.target).attr('data-index');
console.log(clickedThumb);
currentPhoto = clickedThumb;

displayMain();
})

$('.thumbnail')                 //Changing thumbnail style on hover
    .hover(function () {
        $(this).toggleClass("hovered")
    })
