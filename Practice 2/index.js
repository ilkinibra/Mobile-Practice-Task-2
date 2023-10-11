function waterChecker(person,water){
    const sizeday =person *3;
    const daysize=parseInt(water/sizeday);
    if(daysize>=14){
        console.log(`${person} insan ${water} litr su var.${daysize} gun gedecek ==> kifayetdir!!!`)
    }
    else{
        console.log(`${person} insan ${water} litr su var. ${daysize} gun gedecek  ==> kifayet deyil su alin!!!`)
    }
}
waterChecker(4,20);