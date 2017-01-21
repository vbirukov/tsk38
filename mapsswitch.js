/**
 * Created by Пользователь on 19.01.2017.
 */
let current = $("#irkustk");
console.log('displaying: ' + JSON.stringify(current));
$("#cities_map_selector a").on('click', function () {
    current.hide();
    switch (this.innerText) {
        case 'Белгород':
            current = $("#belgorod")
            break;
        case 'Новосибирск':
            current = $('#novosibirsk')
            break;
        case 'Новокузнецк':
            current = $('#novokuznetsk')
            break;
        case 'Краснроярск':
            current = $('#krasnoyarsk')
            break;
        case 'Иркустк':
            current = $('#irkutsk')
            break;
    }
    current.show();
    console.log('displaying: ' + current);
})