function createCard(title, cname, views, monthsOld, duration, thumbnail) {
let viewNumber
    if(views<1000){
         viewNumber=views +'k';
    }
    else if(views>1000000){
         viewNumber=views/1000000 +'M';
    }
    else{
        viewNumber=views/1000 +'k';
    }


let html=`<div class="card">
            <div class="image">
<img  class="br" src="${thumbnail}" alt="" srcset="">
<div class="capsule">${duration}</div>
            </div>
            <div class="text">
                <h1>${title}</h1>
                <p>${cname}. ${viewNumber} views. ${monthsOld} months ago</p>
            </div>
        </div>`

document.querySelector(".container").innerHTML=document.querySelector(".container").innerHTML + html;
}

createCard(
  "Introduction to backend |sigma web development #2",
  "CodeWithHarry",
  56000,
  7,
  "36:00",
  "https://i.ytimg.com/vi/aQn7ssqHYp4/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLBvDMxYVxdfsOdMjoI0AhYZyZyQpA"
);


createCard(
    "Introduction to javascript |sigma web development #3",
    "CodeWithHarry",
    6000000,
    9,
    "28:00",
    "https://i.ytimg.com/vi/aQn7ssqHYp4/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLBvDMxYVxdfsOdMjoI0AhYZyZyQpA"
  );
  