//1.
let text = "10,20,Кропивницкий,200000\n" +
    "10,20,Одесса,1000000\n" +
    "#30,40,Николаев,480000\n" +
    "90,05,Киев,2884000\n" +
    "#85,17,Львов,720000\n" +
    "\n" +
    "11,36,Днепр, 966000\n" +
    "15,29,Лондон,9000000\n" +
    "40,30,Нью-Йорк,8400000\n" +
    "90,20,Нью-Дели,4000000\n" +
    "18,18,Пекин,21500000\n" +
    "85,20,Шанхай,26300000\n" +
    "87,50,Гонконг,7400000\n" +
    "10,53,Берлин,3600000\n" +
    "11,12,Париж,2100000\n" +
    "13,14,Вена,1900000\n" +
    "15,19,Прага,1300000\n" +
    "18,90,Варшава,1800000\n" +
    "50,50,Рим,2900000"

function pars(someText) {
    let arrDara = someText.split("\n")
        .filter(function (n) {
            return !(n.length === 0 || n.startsWith("#"));
        })
        .map(function (n){
            n = n.split(",");
                return {
                    x: n[0],
                    y: n[1],
                    name: n[2],
                    population: n[3]
                }

        })
        .sort(function (a,b){
            return  b.population - a.population;
        })
        .slice(0,10)
        .reduce(function (a,b,index){
            a[b.name] = {population: b.population, rating: index+1};
            return a;
        }, {})
    return (anotherSomeText) => {
        let keys = Object.keys(arrDara);
        keys.forEach(function (x){
            if(anotherSomeText.includes(x)){
                let result = (x + ` (${arrDara[x].rating} место в ТОП-10 самых крупных городов МИРА, население ${arrDara[x].population} человек)`)
                anotherSomeText = anotherSomeText.replace(x, result);
            }
        })
        return anotherSomeText;
    };
}
console.log(pars(text)("Хочу поехать в Рим на каникулах"));
console.log(pars(text)("Пекин - очень большой город"));
console.log(pars(text)("В Нью-Йорк отправляется рейс 777"));
console.log(pars(text)("Я недавно вернулся в Лондон"));
console.log(pars(text)("Ты когда нибудь посещал Шанхай?"));
console.log(pars(text)("Правда ли, что Гонконг - столица аниме?"));
console.log(pars(text)("Жду не дождусь, когда смогу вернутся в Киев"));
console.log(pars(text)("Париж - город любви"));
console.log(pars(text)("Мой дед любит ездить в Берлин"));
console.log(pars(text)("Нью-Дели находится в Индии?"));