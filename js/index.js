(function(){
    w3.getHttpObject("../../js/cours.json", (res) => {
        w3.displayObject('courContaint',res);
    });
})();

function detailcours(id){
    let link = "detailcour";
    if(id){
        link=id;
    }
    link+=".html"
    window.location.href =link;
}