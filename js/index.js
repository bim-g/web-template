function goTopages(id){
    let link="welcom.html";
    if(id){
        link="pages/"+id+"/";
        location.href=link;
    }else{
        let iframe = w3.getElements('#iframe');
        if (iframe[0] !== undefined) {
            iframe[0].src = link;
        }
    }    
}
