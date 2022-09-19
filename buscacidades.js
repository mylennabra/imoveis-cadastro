import jsonData from './estados-cidades.json' assert {type: 'json'};

function buscaCidades(){
    // Limpando options cidade
    document.querySelector("#cidade").innerHTML = '';
    // Selecionando o select
    var cidade_select = document.querySelector("#cidade");
    // Pegando index do estado selecionado
    var estado_ID = document.querySelector('select[name=state]').options[document.querySelector('select[name=state]').selectedIndex].index;
    estado_ID = estado_ID - 1;
    // Pegando número de cidades do estado selecionado
    var num_cidades = jsonData.estados[estado_ID]["cidades"].length;
    
    for(let x = 0; x < num_cidades; x++){
        var cidade_texto = jsonData.estados[estado_ID]["cidades"][x];
        var cid_opts = document.createElement('option');
        cid_opts.setAttribute('value',cidade_texto)
        cid_opts.innerHTML = cidade_texto;
        cidade_select.appendChild(cid_opts);
    }

    console.log(cidade_texto);
}
 
 document.getElementById('estado').onchange = function(){
    buscaCidades();
}