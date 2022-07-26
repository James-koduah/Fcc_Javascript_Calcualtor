let all= document.getElementById('all')
let display = document.getElementById('display')

function input(e){
    if(display.innerHTML==='0'){
        if(e.innerHTML!=='.'){
            display.innerHTML=''
        }
    }
    if(e.innerHTML==='.'){
        if(display.innerHTML.indexOf('.') !== -1){
            return ;
        }
    }
    all.innerHTML+=e.innerHTML
    display.innerHTML+= e.innerHTML
}

function signs(e){
    if(all.innerHTML==='' && display.innerHTML != 0){
        all.innerHTML=display.innerHTML+e.innerHTML
        return display.innerHTML='0'
    }
    all.innerHTML+=e.innerHTML
    display.innerHTML='0'
}
function clearAll(){
    all.innerHTML=''
    display.innerHTML='0'
}


function equalTo(){
    let tt= all.innerHTML
    let reg = /[+*-/]+/g
    let res = tt.match(reg)
    let qq = ''
    for(let i=0;i<res.length;i++){
        if(res[i].length>1){
            qq=res[i]
        }
    }
    
    if(qq!=='' && qq[qq.length-1] !== '-'){
        let newtt=tt.replace(reg, qq[qq.length-1])
        tt=newtt
    }


    let mm=eval(tt)
    clearAll()
    display.innerHTML=mm
}