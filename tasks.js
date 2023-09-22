const containerTasks1 = document.querySelector('#container-card1'); //Seleccionador de contenedor numero 1
const textTask = document.querySelector('#text-card'); //Seleccionador de input para agregar texto

const addTaskButton = document.querySelector('.add-card'); //Seleccionador de button para agregar tarjeta
addTaskButton.addEventListener('click', createCard); //Evento para crear tarjeta mediante un click

let cardCount = 1; //Registro de la cantidad de tarjetas del contenedor numero 1
const limiteTarjetas = 7; //Limite de tarjetas dentro del contenedor numero 1

//Funcion para crear tarjeta en contenedor numero 1
function createCard() {
    const cardText = textTask.value.trim(); // Verificamos que no hayan espacios en blanco alrededor de la cadena 

    //Condicional para verificar texto dentro del input y para verificar cantidad de tarjetas dentro del contenedor numero 1 
    if (cardText !== '' && cardCount < limiteTarjetas) {
        const card = document.createElement('div'); //Creamos un nuevo elemento div
        card.setAttribute('id', 'card-porHacer'); //Establecemos un atributo id: card-porHacer al div anteriormente Creado

        const containerCard = document.createElement('div'); //Creamos un nuevo elemento div
        containerCard.classList.add('container-txt'); //Establecemos como clase: container-txt al div anteriormente Creado

        const txtCard = document.createElement('p'); //Creamos un nuevo elemento p
        txtCard.textContent = textTask.value; //Establecemos el texto ingresado en el input al p anteriormente creado 

        const menu = document.createElement('div'); //Creamos un nuevo elemento div
        menu.setAttribute('id', 'card-button-porHacer'); //Establecemos un atributo id: card-button-porHacer al div anteriormente Creado

        const state = document.createElement('button'); //Creamos un nuevo elemento button
        state.setAttribute('id', 'status-1'); //Establecemos un atributo id: status-1 al button anteriormente Creado

        const ulTask = document.createElement('ul'); //Creamos un nuevo elemento ul
        ulTask.classList.add('menu-horizontal'); //Establecemos como clase: menu-horizontal al ul anteriormente Creado 

        const liTask = document.createElement('li'); //Creamos un nuevo elemento li
        liTask.classList.add('li-menu-horizontal'); //Establecemos como clase: li-menu-horizontal al li anteriormente Creado 

        const aMenu = document.createElement('a'); //Creamos un nuevo elemento a
        aMenu.classList.add('trade'); //Establecemos como clase: trade al a anteriormente Creado 
        aMenu.setAttribute('href', '#'); //Establecemos un atributo href: # al a anteriormente Creado

        const icon = document.createElement('ion-icon'); //Creamos un nuevo elemento ion-icon
        icon.setAttribute('name', 'menu-outline'); //Establecemos un atributo name: menu-outline al ion-icon anteriormente Creado

        const ulMenu = document.createElement('ul'); //Creamos un nuevo elemento ul
        ulMenu.classList.add('menu-vertical'); //Establecemos como clase: menu-vertical al ul anteriormente Creado 

        const liMenu = document.createElement('li'); //Creamos un nuevo elemento li
        liMenu.classList.add('li-menu-vertical'); //Establecemos como clase: li-menu-vertical al li anteriormente Creado

        const trade = document.createElement('button'); //Creamos un nuevo elemento button
        trade.setAttribute('id', 'trade-button-porHacer'); //Establecemos un atributo id: trade-button-porHacer al button anteriormente Creado
        trade.textContent = 'Haciendo'; //Establecemos el texto dentro de el button anteriormente Creado

        //Establecemos un evento que escucha los clicks que proporciona para accionar la funcion anonima
        trade.addEventListener('click', () => {

            //Condicional para verificar cuantas tarjetas hay en el contenedor numero 2
            if (cardCount2 < limiteTarjetas2) {
                tradeCard(txtCard.textContent); //Establecemos el texto dentro de txtCard a tradeCard
                card.style.display = 'none'; //Ocultamos la tarjeta creada
            } else {
                alert('Se ha alcanzado el límite de tarjetas en el tablero 2.\n Elimina o Intercambia de tabla una tarjeta para poder ingresar otra'); //Alerta de limite alcanzado
            }
            cardCount--; //Disminuye el registro de la cantidad de tarjetas
        });

        const closeCard = document.createElement('button'); //Creamos un nuevo elemento button
        closeCard.classList.add('delete-button'); //Establecemos como clase: delete-button al button anteriormente Creado
        closeCard.textContent = 'Eliminar'; //Establecemos el texto dentro de el button anteriormente Creado

        //Establecemos un evento que escucha los clicks que proporciona para accionar la funcion anonima
        closeCard.addEventListener('click', () => {
            card.style.display = 'none'; //Ocultamos la tarjeta creada
            cardCount--; //Disminuye el registro de la cantidad de tarjetas
        });

        const edit = document.createElement('button'); //Creamos un nuevo elemento button
        edit.classList.add('class', 'edit-button'); //Establecemos un atributo id: trade-button-porHacer al button anteriormente Creado
        edit.textContent = 'Editar'; //Establecemos el texto dentro de el button anteriormente Creado
        
        edit.addEventListener('click', () => {
            txtCard.contentEditable = true; // Habilitar la edición de texto
            txtCard.focus(); // Dar foco al elemento de texto para que el usuario pueda editar
        });

        txtCard.addEventListener('blur', () => {
            txtCard.contentEditable = false; // Deshabilitar la edición de texto
        });

        //Orden de elementos
        containerCard.appendChild(txtCard); //Establecemos txtCard como hijo de containerCard

        menu.appendChild(state); //Establecemos txtCard como hijo de containerCard
        menu.appendChild(ulTask); //Establecemos ulTask como hijo de menu

        ulTask.appendChild(liTask); //Establecemos liTask como hijo de ulTask

        liTask.appendChild(aMenu); //Establecemos aMenu como hijo de liTask
        aMenu.appendChild(icon); //Establecemos icon como hijo de aMenu
        liTask.appendChild(ulMenu); //Establecemos ulMenu como hijo de liTask

        ulMenu.appendChild(liMenu); //Establecemos liMenu como hijo de ulMenu
        liMenu.appendChild(trade); //Establecemos trade como hijo de liMenu
        liMenu.appendChild(edit); //Establecemos edit como hijo de liMenu
        liMenu.appendChild(closeCard); //Establecemos closeCard como hijo de liMenu

        card.appendChild(containerCard); //Establecemos containerCard como hijo de card
        card.appendChild(menu); //Establecemos menu como hijo de card

        containerTasks1.appendChild(card); //Establecemos card como hijo de containerTasks1

        containerTasks1.appendChild(card); //Establecemos card como hijo de containerTasks1
        textTask.value = ''; //Establecemos el elemento textTask como cadena vacia

        cardCount++; //Incrementa el registro de la cantidad de tarjetas del contenedor numero 1
    } else if (cardCount >= limiteTarjetas) {
        alert('Se ha alcanzado el límite de tarjetas.\n Elimina o Intercambie de tabla una tarjeta para poder ingresar otra'); //Alerta de limite alcanzado
    } else {
        alert('Debes introducir texto antes de agregar la tarjeta.'); //Alerta de texto vacio
    }

}

const containerTasks2 = document.querySelector('#container-card2'); //Seleccionador de contenedor numero 2

let cardCount2 = 0; //Registro de la cantidad de tarjetas del contenedor numero 2
const limiteTarjetas2 = 1; //Limite de tarjetas dentro del contenedor numero 2

//Funcion para crear tarjeta en contenedor numero 2
function tradeCard(taskText) {

    //Condicional para verificar cantidad de tarjetas dentro del contenedor numero 2
    if (cardCount2 < limiteTarjetas2) {

        const card = document.createElement('div'); //Creamos un nuevo elemento div
        card.setAttribute('id', 'card-haciendo'); //Establecemos un atributo id: card-haciendo al div anteriormente Creado

        const containerCard = document.createElement('div'); //Creamos un nuevo elemento div
        containerCard.classList.add('container-txt'); //Establecemos como clase: container-txt al div anteriormente Creado

        const txtCard = document.createElement('p'); //Creamos un nuevo elemento p
        txtCard.textContent = taskText; //Establecemos el texto ingresado en el input al p anteriormente creado

        const menu = document.createElement('div'); //Creamos un nuevo elemento div
        menu.setAttribute('id', 'card-button-haciendo'); //Establecemos un atributo id: card-button-haciendo al div anteriormente Creado

        const state = document.createElement('button'); //Creamos un nuevo elemento button
        state.setAttribute('id', 'status-2'); //Establecemos un atributo id: status-2 al button anteriormente Creado

        const ulTask = document.createElement('ul'); //Creamos un nuevo elemento ul
        ulTask.classList.add('menu-horizontal'); //Establecemos como clase: menu-horizontal al ul anteriormente Creado

        const liTask = document.createElement('li'); //Creamos un nuevo elemento li
        liTask.classList.add('li-menu-horizontal'); //Establecemos como clase: li-menu-horizontal al li anteriormente Creado

        const aMenu = document.createElement('a'); //Creamos un nuevo elemento a
        aMenu.classList.add('trade'); //Establecemos como clase: trade al a anteriormente Creado
        aMenu.setAttribute('href', '#'); //Establecemos un atributo href: # al a anteriormente Creado

        const icon = document.createElement('ion-icon'); //Creamos un nuevo elemento ion-icon
        icon.setAttribute('name', 'menu-outline'); //Establecemos un atributo name: menu-outline al ion-icon anteriormente Creado

        const ulMenu = document.createElement('ul'); //Creamos un nuevo elemento ul
        ulMenu.classList.add('menu-vertical'); //Establecemos como clase: menu-vertical al ul anteriormente Creado

        const liMenu = document.createElement('li'); //Creamos un nuevo elemento li
        liMenu.classList.add('li-menu-vertical'); //Establecemos como clase: li-menu-vertical al li anteriormente Creado

        const trade = document.createElement('button'); //Creamos un nuevo elemento button
        trade.setAttribute('id', 'trade-button-haciendo'); //Establecemos un atributo id: trade-button-porHacer al button anteriormente Creado
        trade.textContent = 'Finalizadas'; //Establecemos el texto dentro de el button anteriormente Creado

        //Establecemos un evento que escucha los clicks que proporciona para accionar la funcion anonima
        trade.addEventListener('click', () => {

            //Condicional para verificar cuantas tarjetas hay en el contenedor numero 3
            if (cardCount3 < limiteTarjetas3) {
                tradeCardFinalizadas(txtCard.textContent); //Establecemos el texto dentro de txtCard a tradeCard
                card.style.display = 'none'; //Ocultamos la tarjeta creada
            } else {
                alert('Se ha alcanzado el límite de tarjetas en el tablero 2.\n Elimina o Intercambia de tabla una tarjeta para poder ingresar otra'); //Alerta de limite alcanzado
            }
            cardCount2--; //Disminuye el registro de la cantidad de tarjetas
        });

        const edit = document.createElement('button'); //Creamos un nuevo elemento button
        edit.classList.add('class', 'edit-button'); //Establecemos un atributo id: trade-button-porHacer al button anteriormente Creado
        edit.textContent = 'Editar'; //Establecemos el texto dentro de el button anteriormente Creado
        
        edit.addEventListener('click', () => {
            txtCard.contentEditable = true; // Habilitar la edición de texto
            txtCard.focus(); // Dar foco al elemento de texto para que el usuario pueda editar
        });

        txtCard.addEventListener('blur', () => {
            txtCard.contentEditable = false; // Deshabilitar la edición de texto
        });

        const closeCard = document.createElement('button'); //Creamos un nuevo elemento button
        closeCard.classList.add('delete-button'); //Establecemos como clase: delete-button al button anteriormente Creado
        closeCard.textContent = 'Eliminar'; //Establecemos el texto dentro de el button anteriormente Creado

        //Establecemos un evento que escucha los clicks que proporciona para accionar la funcion anonima
        closeCard.addEventListener('click', () => {
            card.style.display = 'none'; //Ocultamos la tarjeta creada
            cardCount2--; //Disminuye el registro de la cantidad de tarjetas
        });

        //Orden de elementos
        containerCard.appendChild(txtCard); //Establecemos txtCard como hijo de containerCard

        menu.appendChild(state); //Establecemos state como hijo de menu
        menu.appendChild(ulTask); //Establecemos ulTask como hijo de menu

        ulTask.appendChild(liTask); //Establecemos liTask como hijo de ulTask

        liTask.appendChild(aMenu); //Establecemos aMenu como hijo de liTask
        aMenu.appendChild(icon); //Establecemos icon como hijo de aMenu
        liTask.appendChild(ulMenu); //Establecemos ulMenu como hijo de liTask

        ulMenu.appendChild(liMenu); //Establecemos liMenu como hijo de ulMenu
        liMenu.appendChild(trade); //Establecemos trade como hijo de liMenu
        liMenu.appendChild(edit); //Establecemos edit como hijo de liMenu
        liMenu.appendChild(closeCard); //Establecemos closeCard como hijo de liMenu

        card.appendChild(containerCard); //Establecemos containerCard como hijo de card
        card.appendChild(menu); //Establecemos menu como hijo de card

        containerTasks2.appendChild(card); //Establecemos card como hijo de containerTasks2

        cardCount2++; //Incrementa el registro de la cantidad de tarjetas del contenedor numero 2
    } else {
        alert('Se ha alcanzado el límite de tarjetas.\n Elimina o Intercambie de tabla una tarjeta para poder ingresar otra'); //Alerta de limite alcanzado
    }

}

const containerTasks3 = document.querySelector('#container-card3'); //Seleccionador de contenedor numero 3

let cardCount3 = 0; //Registro de la cantidad de tarjetas del contenedor numero 3
const limiteTarjetas3 = 7; //Limite de tarjetas dentro del contenedor numero 3

//Funcion para crear tarjeta en contenedor numero 3
function tradeCardFinalizadas(taskText) {

    //Condicional para verificar cantidad de tarjetas dentro del contenedor numero 3
    if (cardCount3 < limiteTarjetas3) {

        const card = document.createElement('div'); //Creamos un nuevo elemento div
        card.setAttribute('id', 'card-finalizada'); //Establecemos un atributo id: card-finalizada al div anteriormente Creado

        const containerCard = document.createElement('div'); //Creamos un nuevo elemento div
        containerCard.classList.add('container-txt'); //Establecemos como clase: container-txt al div anteriormente Creado

        const txtCard = document.createElement('p'); //Creamos un nuevo elemento p
        txtCard.textContent = taskText; //Establecemos el texto ingresado en el input al p anteriormente creado

        const menu = document.createElement('div'); //Creamos un nuevo elemento div
        menu.setAttribute('id', 'card-button-finalizada'); //Establecemos un atributo id: card-button-finalizada al div anteriormente Creado

        const state = document.createElement('button'); //Creamos un nuevo elemento button
        state.setAttribute('id', 'status-3'); //Establecemos un atributo id: status-3 al button anteriormente Creado

        const ulTask = document.createElement('ul'); //Creamos un nuevo elemento ul
        ulTask.classList.add('menu-horizontal'); //Establecemos como clase: menu-horizontal al ul anteriormente Creado

        const liTask = document.createElement('li'); //Creamos un nuevo elemento li
        liTask.classList.add('li-menu-horizontal'); //Establecemos como clase: li-menu-horizontal al li anteriormente Creado

        const aMenu = document.createElement('a'); //Creamos un nuevo elemento a
        aMenu.classList.add('trade'); //Establecemos como clase: trade al a anteriormente Creado
        aMenu.setAttribute('href', '#'); //Establecemos un atributo href: # al a anteriormente Creado

        const icon = document.createElement('ion-icon'); //Creamos un nuevo elemento ion-icon
        icon.setAttribute('name', 'menu-outline'); //Establecemos un atributo name: menu-outline al ion-icon anteriormente Creado

        const ulMenu = document.createElement('ul'); //Creamos un nuevo elemento ul
        ulMenu.classList.add('menu-vertical'); //Establecemos como clase: menu-vertical al ul anteriormente Creado

        const liMenu = document.createElement('li'); //Creamos un nuevo elemento li
        liMenu.classList.add('li-menu-vertical'); //Establecemos como clase: menu-vertical al ul anteriormente Creado

        const closeCard = document.createElement('button'); //Creamos un nuevo elemento button
        closeCard.classList.add('delete-button'); //Establecemos como clase: delete-button al button anteriormente Creado
        closeCard.textContent = 'Eliminar'; //Establecemos el texto dentro de el button anteriormente Creado

        //Establecemos un evento que escucha los clicks que proporciona para accionar la funcion anonima
        closeCard.addEventListener('click', () => {
            card.style.display = 'none'; //Ocultamos la tarjeta creada
            cardCount3--; //Disminuye el registro de la cantidad de tarjetas
        });

        //Orden de elementos
        containerCard.appendChild(txtCard); //Establecemos txtCard como hijo de containerCard

        menu.appendChild(state); //Establecemos state como hijo de menu
        menu.appendChild(ulTask); //Establecemos ulTask como hijo de menu

        ulTask.appendChild(liTask); //Establecemos liTask como hijo de ulTask

        liTask.appendChild(aMenu); //Establecemos aMenu como hijo de liTask
        aMenu.appendChild(icon); //Establecemos icon como hijo de aMenu
        liTask.appendChild(ulMenu); //Establecemos ulMenu como hijo de liTask

        ulMenu.appendChild(liMenu); //Establecemos liMenu como hijo de ulMenu
        liMenu.appendChild(closeCard); //Establecemos closeCard como hijo de liMenu

        card.appendChild(containerCard); //Establecemos containerCard como hijo de card
        card.appendChild(menu); //Establecemos menu como hijo de card

        containerTasks3.appendChild(card); //Establecemos card como hijo de containerTasks3

        cardCount3++; //Incrementa el registro de la cantidad de tarjetas del contenedor numero 3
    } else {
        alert('Se ha alcanzado el límite de tarjetas.\n Elimina una tarjeta para poder ingresar otra'); //Alerta de limite alcanzado
    }
}