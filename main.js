
$(document).ready(function(){

    // definire un array di oggetti;
    // ogni oggetto rappresenta un'icona, che è caratterizzata da: nome, prefisso, tipo e famiglia.
    const arrayIcons = [
        {
        name: 'cat',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas'
    },
    {
        name: 'crow',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas'
    },
    {
        name: 'dog',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas'
    },
    {
        name: 'dove',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas'
    },
    {
        name: 'dragon',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas'
    },
    {
        name: 'horse',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas'
    },
    {
        name: 'hippo',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas'
    },
    {
        name: 'fish',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas'
    },
    {
        name: 'carrot',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas'
    },
    {
        name: 'apple-alt',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas'
    },
    {
        name: 'lemon',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas'
    },
    {
        name: 'pepper-hot',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas'
    },
    {
        name: 'user-astronaut',
        prefix: 'fa-',
        type: 'user',
        family: 'fas'
    },
    {
        name: 'user-graduate',
        prefix: 'fa-',
        type: 'user',
        family: 'fas'
    },
    {
        name: 'user-ninja',
        prefix: 'fa-',
        type: 'user',
        family: 'fas'
    },
    {
        name: 'user-secret',
        prefix: 'fa-',
        type: 'user',
        family: 'fas'
    }
    ];
    const arrayColori = ['red', 'green', 'blue']; // definire un array di colori
    const arrayTipi = [];

    // Utilizzando la funzione forEach e il template literal, visualizzare in pagina tutte le icone con il proprio nome.

    stampaIcone(arrayIcons);

    // aggiungere una select per filtrare le icone in base al tipo.
    arrayTipi.forEach((item) =>{ // leggo ogni tipo in array tipi
        // Popolare le options della select dinamicamente
        $('#filtroOpzioni').append(`
            <option value="${item}">${item}</option>
        `);
    });

    // e, ogni volta che cambia il valore selezionato, visualizzare le icone corrispondenti.

    //arrayIcons.forEach((item)=>{

        $('#filtroOpzioni').change(()=>{

            // otteniamo il valore della selezione dell'utente
            const selezioneUtente = $('#filtroOpzioni').val();

            // svuoti container
            $('.containerIconsNomi').empty();

            console.log('array icons', arrayIcons);
            //console.log('item', item);
            console.log('array tipi', arrayTipi);
            //console.log('item.type', item.type);

            var indexType = arrayTipi.indexOf(selezioneUtente); // prendo l' indice del tipo da arraytipi

            //console.log('indextype', indexType);

            var iconColor = arrayColori[indexType];

            if (selezioneUtente != ''){
                const sceltaUtente = arrayIcons.filter((item) =>{
                    return selezioneUtente == item.type;
                });

                sceltaUtente.forEach((item, i)=>{
                    $('.containerIconsNomi').append(`
                        <div>
                        <p style="color:${iconColor}">
                        ${item['name']}
                        </p>
                        </div>
                        `);
                });
            }
            else {
                stampaIcone(arrayIcons);
            }
        });
    //});


function stampaIcone (array_oggetti){
    array_oggetti.forEach((item, i) => { // utilizzo il forEach per scorrere tutti gli oggetti nell'arrayIcons

         // stampo in console tutti gli oggetti con relativo nome
        console.log(`
            ${item['name']}
        `);


        const {type} = item;  // recupero il tipo da ogni item grazie al foreach che scorre gli elementi e alla destrutturazione item ricavo il type


        if(!arrayTipi.includes(type)){ // se l array tipi non include gia' il type dell' item corrente
            arrayTipi.push(type); // allora pushalo
        }

        var indiceTipo = arrayTipi.indexOf(type); // prendo l' indice del tipo da arraytipi

        var coloreIcona = arrayColori[indiceTipo];  // assegno a indice colore il valore dell' elemento in posizione indice tipo nell' array dei colori
        console.log(coloreIcona);

        // stampo in pagina tutti gli oggetti con relativo nome e colore
        $('.containerIconsNomi').append(`
            <div>
            <p style="color:${coloreIcona}">
            ${item['name']}
            </p>
            </div>
            `);


    }); // FINE FOREACH
}
});
