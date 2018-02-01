var url = 'https://restcountries.eu/rest/v1/name/';
var countriesList = $('#countries');
var capitalsList = $('#capitals');
var flagsList = $('#flags');

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
    flagsList.empty();
    resp.forEach(function(item) {
        $('<li>').text(item.name).appendTo(countriesList);
        $('<li>').text(item.capital).appendTo(capitalsList);

        var flag = item.alpha2Code.toLowerCase();
        var source = "http://www.countryflags.io/" + flag + "/flat/64.png";
        $('<li>').html("<img src=" + source + ">").appendTo(flagsList);
    });
}