let element={
    array1:["JavaScript","Python","Ruby","Go"],

   array2: ["languages","isChallenging","isRewarding","difficulty","isfun"],
   array3:[true,true,7,true],
   show(){
    this.array1.forEach(function(i) {
        console.log(i)
        
    })
    this.array2.forEach(function(i){
        console.log(i)
    })
    this.array3.forEach(function(i){
        console.log(i)
    })
   }

}
element.show()