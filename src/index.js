import { openSection, showLegend } from "./js/openSection";
import { getDate } from "./js/getDate";
import { Keyboard } from "./js/Keyboard";
import { Autocomplete, searchCountryWithClick } from "./js/Autocomplete";
import { array1 } from "./js/apiCountry";
import { getDataCountries } from "./js/apiCountry";
import { getChart } from "./js/chart";
// import { getGlobalData, prepare } from "./js/dataService"
import './js/map'

import './js/map'
window.addEventListener('DOMContentLoaded', () => {

    getDataCountries()

    //график
    getChart();

    // развернуть секцию на весь экран
    openSection();


    //update date
    getDate();

    //keyboard
    Keyboard.init();

    Autocomplete('#input-select', array1);

    searchCountryWithClick();

    showLegend();

});