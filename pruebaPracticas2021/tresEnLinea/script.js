let turno = 0;
const tabla = [];

const btnSeleccionar = (e, post) =>{
    turno ++;
    const btn = e.target;
    const color = turno % 2 ? 'white': 'black';
    btn.style.backgroundColor = color ;
    tabla[post] = color;
    if(ganador())alert('Has ganado' + color)
}

const ganador = () =>{
    if(tabla[0] == tabla[1] && tabla[0] == tabla[2] && tabla[0]){
        return true;

    }else if(tabla[3] == tabla[4] && tabla[3] == tabla[5] && tabla[3]){
        return true;

    } else if(tabla[6] == tabla[7] && tabla[6] == tabla[8] && tabla[6]){
        return true;

    } else if(tabla[0] == tabla[3] && tabla[0] == tabla[6] && tabla[0]){
        return true;

    }else if(tabla[1] == tabla[4] && tabla[1] == tabla[7] && tabla[1]){
        return true;

    }else if(tabla[2] == tabla[5] && tabla[2] == tabla[8] && tabla[2]){
        return true;

    }else if(tabla[0] == tabla[4] && tabla[0] == tabla[8] && tabla[0]){
        return true;

    }else if(tabla[2] == tabla[4] && tabla[2] == tabla[6] && tabla[2]){
        return true;
    }

    return false;
}

document.querySelectorAll('button').forEach(
(obj, i) => obj.addEventListener('click', (e) => btnSeleccionar(e, i)));