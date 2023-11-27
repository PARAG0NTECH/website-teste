// import { graficoDemandas } from "js/main.js"; 

function teste(){
    Swal.fire({
        title: 'Error!',
        text: 'Do you want to continue',
        icon: 'error',
        confirmButtonText: 'Cool'
      })
}

function excluirMaquina() {
    Swal.fire({
        title: 'Tem certeza ?',
        text: "Essa ação é irreversível!",
        iconColor: "#EB1616",
        color: "#fff",
        icon: 'warning',
        background: "#191c24",
        showCancelButton: true,
        confirmButtonColor: '#EB1616',
        cancelButtonColor: '#6e7881',
        cancelButtonText: "Cancelar",
        confirmButtonText: 'Sim, quero deletar!'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            background: "#191c24",
            icon: "success",
            iconColor: "#EB1616",
            title: "Excluido!",
            text: "Máquina excluida com sucesso!",
            confirmButtonColor: "#EB1616",
            color: "#fff",
        })
        }
      })
}

function cadastrarTotem() {
    Swal.fire({
        title: 'Cadastro',
        html: 'Para realizar o cadastro, clique <a  href="https://github.com/PARAG0NTECH/JAR-PROJETO/raw/main/cineproject.jar" download="Cine Project">aqui</a> para baixar o arquivo de monitoramento no totem<br><br>'+
        '<b>Sugestão:</b> realize o login deste site no totem e baixe o arquivo ou se achar melhor, mova o arquivo para um pendrive e faça o mesmo processo',
        iconColor: "#EB1616",
        color: "#fff",
        icon: 'warning',
        background: "#191c24",
        confirmButtonColor: '#EB1616',
        confirmButtonText: 'Entendi!'
    })
}

const select = document.querySelector('.select');
const optionBox = document.querySelector('.options');
const options = [...document.querySelectorAll('.options .item')];

let activeOption = 0; // default should be 0

window.onclick = (e) => {
    if(!e.target.className.includes('select')){
        select.classList.remove('active');
        optionBox.classList.remove('active');
    } else{
        select.classList.toggle('active');
        optionBox.classList.toggle('active');
    }
}

options.forEach((item, i) => {
    item.onmousemove = () => {
        hoverOptions(i);
    }
})

const hoverOptions = (i) => {
    options[activeOption].classList.remove('active');
    options[i].classList.add('active');
    activeOption = i;
    setValue();
}

window.onkeydown = (e) => {
    if(select.className.includes('active')){
        e.preventDefault();
        if(e.key === 'ArrowDown' && activeOption < options.length - 1){
            hoverOptions(activeOption + 1);
        } else if(e.key === 'ArrowUp' && activeOption > 0){
            hoverOptions(activeOption - 1);
        } else if(e.key === 'Enter'){
            select.classList.remove('active');
            optionBox.classList.remove('active');
        }
    }
}

const setValue = () => {
    select.innerHTML = select.value = options[activeOption].innerHTML;
    if(select.innerHTML == "Última hora"){
      graficoDemandas()
    }
}

setValue();