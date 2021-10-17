console.log(ml5.version);

mymodel=ml5.imageClassifier("MobileNet",model);
function model(){
    console.log("Your Model Is Ready To Use");
}
function identify_picture(){
    item=document.getElementById("photo");
    mymodel.classify(item,result);
}
function result(error, answer){
    if(error){
        console.error(error);
    }
    if(answer){
        console.log(answer);
        document.getElementById("result").innerHTML="I think it is a/a  n "+answer[0].label+".";
    }
}