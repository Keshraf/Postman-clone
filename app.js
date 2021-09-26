const urlInput = document.querySelector("#url-input");
const send = document.querySelector("#fetch-api");
const display = document.querySelector(".display-section");
const keyInput= document.querySelector("#key");
const valueInput = document.querySelector("#value");


let keyString;
let valueString;
let n=0;
let url;
let newPara;
send.addEventListener('click', function(){
    keyString=keyInput.value;
    valueString=valueInput.value;
    url =urlInput.value;
    if(keyString!=undefined&&valueString!=undefined){
        url =`${url}?${keyString}=${valueString}`;
    }
    console.log(url);
    fetchAPI(url);
})

const fetchAPI = async(e) =>{
    const data = await axios.get(e)
    console.log('DATA',data);
    addition(data);
}

const addition = (data) =>{
    const value =Object.values(data);
    console.log('VALUE',value[0]);
    const innervalue = value[0];
    const value2 = JSON.stringify(innervalue);
    newPara = document.createElement('p');
    newPara = value2;
    display.append(newPara);
    n=1;
    //test(value2);
}

const test = (string) =>{
    console.log(string[0]);
}

urlInput.addEventListener('change', function(){
    if(n==1){
        newPara.remove();
        n=0;
    }
})