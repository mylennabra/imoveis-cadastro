function addHouse() {
    
    let operation = document.querySelector('input[name="acao-imovel"]:checked').labels[0].outerText;
    let tipo = document.querySelector('select[name=tipo]').options[document.querySelector('select[name=tipo]').selectedIndex].text;
    let state = document.querySelector('select[name=state]').options[document.querySelector('select[name=state]').selectedIndex].value;
    let city = document.querySelector('select[name=city]').options[document.querySelector('select[name=city]').selectedIndex].text;
    let price = document.querySelector('input[name=price]').value;

    let tabela = document.getElementById("lista_cadastro");

    // if (index() == 0){
        
    // }

    tabela.innerHTML += `
       <tr class="house" id="${index() + 1}">
            <td id="h-${index() + 1}-child-1">${tipo}</td>
            <td id="h-${index() + 1}-child-2">${city}</td>
            <td id="h-${index() + 1}-child-3">${state}</td>
            <td id="h-${index() + 1}-child-4">${operation}</td>
            <td id="h-${index() + 1}-child-5">${price}</td>
            <td style="cursor:pointer; " onclick="deleteHouse(${index() + 1})">x</td>
       </tr>
    `;

    document.querySelector("form#house").reset();
    
    Swal.fire({
        customClass: {
            confirmButton: 'btn btn-success mx-1',
        },

        background: 'rgb(253, 245, 237)',
        color:'#FF8c21',
        iconColor:'#FF8c21',
        buttonsStyling: false,
        title: '<h3>Seu registro foi realizado com sucesso!</h3>',
        icon: 'success',
        showCloseButton: true,
        confirmButtonText: 'Ok!',
        focusConfirm: false,
      }).then((result) => {
        if (result.isConfirmed) {

            // document.getElementById('modal2').style.display = 'none';
            // document.getElementById('modal2').setAttribute('aria-hidden', true);
            // document.getElementById('modal2').removeAttribute('aria-modal');
            // document.getElementById('modal2').removeAttribute('role');

        }
      })
      
    }


function searchHouse() {
    let aux = index();

    let keyword = document.querySelector('select[name=busca_tipo]').options[document.querySelector('select[name=busca_tipo]').selectedIndex].text;
   
    console.log(aux);
    console.log(keyword);
   
   let temp = 1;

    var node = document.getElementById('lista_cadastro');
    var clone = node.cloneNode(true); 
    document.getElementById('lista_busca').appendChild(clone); 

    while (temp != aux){
        let lista = document.getElementById("lista_busca");


        if(document.getElementById("h-"+temp+"-child-"+child_index)==keyword){

            var node = document.getElementById('lista_cadastro');
            var clone = node.cloneNode(true); 
            document.getElementById('tabela_busca').appendChild(clone); 


        }
        child_index++;
        temp ++;
    }
}

function index() {
    let tabela = document.querySelectorAll(".house");
    return tabela.length;
}

function eraseFields() {
    document.querySelector("form#house").reset()
}

function deleteHouse(house) {
    document.getElementById(house).remove();
}