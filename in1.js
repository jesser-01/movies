movieslist=[
  {
    "title": "Mission: Impossible _ The Final Reckoning",
    "poster": "https://media.themoviedb.org/t/p/w600_and_h900_bestv2/z53D72EAOxGRqdr7KXXWp9dJiDe.jpg",
    "overview": "Ethan Hunt and his IMF team embark on their most dangerous mission yet.",
    "genres": ["Action", "Adventure", "Thriller"]
  },
  {
    "title": "F1",
    "poster": "https://media.themoviedb.org/t/p/w600_and_h900_bestv2/9PXZIUsSDh4alB80jheWX4fhZmy.jpg",
    "overview": "A gripping drama about the high-octane and competitive world of Formula 1 racing.",
    "genres": ["Sport", "Drama"]
  },
  {
    "title": "Sinners",
    "poster": "https://media.themoviedb.org/t/p/w600_and_h900_bestv2/4CkZl1LK6a5rXBqJB2ZP77h3N5i.jpg",
    "overview": "A psychological thriller exploring dark secrets and morality.",
    "genres": ["Drama", "Thriller"]
  },
  {
    "title": "From the World of John Wick: Ballerina",
    "poster": "https://media.themoviedb.org/t/p/w600_and_h900_bestv2/4sbqReLivBN4e7OOwG6PkSGcKHt.jpg",
    "overview": "An action-packed story of an assassin seeking vengeance.",
    "genres": ["Action", "Thriller"]
  },
  {
    "title": "Avatar: Fire and Ash",
    "poster": "https://media.themoviedb.org/t/p/w600_and_h900_bestv2/5bxrxnRaxZooBAxgUVBZ13dpzC7.jpg",
    "overview": "The epic continuation of the Avatar saga in a breathtaking sci-fi adventure.",
    "genres": ["Science Fiction", "Adventure"]
  },
  {
    "title": "Jurassic World: Rebirth",
    "poster": "https://media.themoviedb.org/t/p/w600_and_h900_bestv2/1RICxzeoNCAO5NpcRMIgg1XT6fm.jpg",
    "overview": "Dinosaurs and humans clash once again in this thrilling reboot.",
    "genres": ["Action", "Adventure", "Science Fiction"]
  }]
favmov=[]
cat=[]
function affmovie(x){
    movies=document.getElementById("movies")
    movie=document.createElement("div")
    img=document.createElement("img")
    h3=document.createElement("h3")
    p1=document.createElement("p")
    p2=document.createElement("p")
    i=document.createElement("i")
    movie.id="movie"
    p1.id="des"
    p2.id="gen"
    movie.append(img,h3,p1,p2,i)
    movies.append(movie)
    img.src=movieslist[x].poster
    h3.textContent=movieslist[x].title
    p1.textContent=movieslist[x].overview
    p2.textContent=movieslist[x].genres
    t=false
    // console.log(movieslist[x].title==favmov[x])
    for (let j = 0; j < favmov.length; j++) {
      if (movieslist[x].title==favmov[j]) {
        t=true
      } 
    }
    if (t==true) {
      i.className="fa-solid fa-heart"
    }
    else{
      i.className="fa-regular fa-heart"
    }
    i.onclick = function() {
        if (this.className == "fa-regular fa-heart") {
            this.className = "fa-solid fa-heart";
            favmov.push(movieslist[x].title)
        } else {
            this.className = "fa-regular fa-heart";
            k=favmov.indexOf(movieslist[x].title)
            favmov.splice(k,1)
        }
    }
}
function affallmovie() {
    for (let i = 0; i < movieslist.length; i++) {
        affmovie(i) 
}
}
function clear() {
    length=movies.children.length
    for (let i = 0; i <length; i++) {
        movies.removeChild(movies.children[0])
        
    }
}
function searchmovie(name,type) {
  if (type=="search") {
    clear()
    for (let i = 0; i < movieslist.length; i++) {
        if (((movieslist[i].title).toUpperCase()).includes(name)) {
            affmovie(i)
        }
        
    }
  }
  else{
    for (let i = 0; i < movieslist.length; i++) {
        if (((movieslist[i].title).toUpperCase()).includes(name)) {
            affmovie(i)
        }
        
    }
  }
    
}
serch.onclick=function () {
    movnm=document.getElementById("search").value
    searchmovie(movnm.toUpperCase(),"search")
    
}
document.getElementById("li2").onclick=function () {
  clear()
  for (let i = 0; i < favmov.length; i++) {
    searchmovie(favmov[i].toUpperCase(),"fav")
    
  }  
}
document.getElementById("li1").onclick=function () {
  clear()
  affallmovie()
}
document.getElementById("search").addEventListener("keypress", function(event) {
  if (event.key == "Enter") {
    event.preventDefault();
    document.getElementById("serch").click();
  }
});
document.getElementById("li1").click()
for (let j = 0; j < movieslist.length; j++) {
    l=0
    while (l<((movieslist[j].genres).length)) {
      t=true
      for (let m = 0; m < cat.length; m++) {
        if (movieslist[j].genres[l]==cat[m]) {
          t=false
        }  
      }
      if (t==true) {
        cat.push(movieslist[j].genres[l])
      }
      l++
    }
}
// console.log(cat)
function cretcat() {
  for (let i = 0; i < cat.length; i++) {
    document.getElementById("li4m").innerHTML+=`<div class="catdivs" id="cat${i}"><p>${cat[i]}<i class="fa-regular fa-square" id="i${i}"></i></p></div>`
  }
  
}
cretcat()
catdivs=document.getElementsByClassName("catdivs")
cataff=[]
for (let i = 0; i < catdivs.length; i++) {
    catdivs[i].onclick = function() {
    a=(this.id).substr(3)
    b=document.getElementById(`i${a}`).className
    if (b=="fa-regular fa-square") {
      b="fa-solid fa-square-check"
      cataff.push(this.textContent)
    }
    else{
      b="fa-regular fa-square"
      k=cataff.indexOf(this.textContent)
      cataff.splice(k,1)
    }
    document.getElementById(`i${a}`).className = b
    clear()
    for (let j = 0; j < movieslist.length; j++) {
      t=true
      for (let p = 0; p < cataff.length; p++) {
        t=t*((movieslist[j].genres).includes(cataff[p]))
      }
      if(t==true){
        affmovie(j)
      }
    }
  }}
  var t=0
  document.getElementById("li4").onclick=function () {
  if (t==0) {
    
    document.getElementById("li4m").style.opacity=1
    document.getElementById("li4m").style.transform="translateY(0)";
  
  t=1}
  else{
    document.getElementById("li4m").style.opacity=0
    document.getElementById("li4m").style.transform="translateY(50px)";
    t=0
  }}
  
  
