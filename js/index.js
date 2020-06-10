(function(){
    w3.getHttpObject("../../js/cours.json", (res) => {
        console.log(res);
        w3.displayObject('courContaint',res);
    });
})();