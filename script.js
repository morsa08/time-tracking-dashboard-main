let newList;

fetchList(function(list){
    console.log(list);
    newList = list;
    result = list.filter(obj=> {obj.title == "Work"});
    console.log(result[0]);
});

async function fetchList(callback){

    const res = await fetch('https://morsa08.github.io/time-tracking-dashboard-main/data.json');

    const list = await res.json();
    callback(list);
}

let work = $(".work")[0];


