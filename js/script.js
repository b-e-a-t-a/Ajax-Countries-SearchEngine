var url = 'https://restcountries.eu/rest/v1/name/';
var countriesList = $('#countries');
var capitalsList = $('#capitals');

$('#search').click(searchCountries);

function searchCountries() {
    var countryName = $('#country-name').val();
    if (!countryName.length) countryName = "Poland";
    $.ajax({
        url: url + countryName,
        method: 'GET',
        success: showCountriesList
    });
}

function showCountriesList(resp) {
    countriesList.empty();
    capitalsList.empty();
    resp.forEach(function(item) {
        $('<li>').text(item.name).appendTo(countriesList);
        $('<li>').text(item.capital).appendTo(capitalsList);
    });
}
