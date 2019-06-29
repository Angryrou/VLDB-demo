var default_menu_id = "0";
var menu_choice;
var menu_tab = {
    "0": 'workload',
    "1": 'execution-plan',
    "2": 'performance-models',
    "3": 'multi-objective-optimization',
    "4": 'net-benefits'
};

$(document).ready(function () {
    $('a[data-tab=' + menu_tab[default_menu_id] + ']').addClass('active');
    menu_id = default_menu_id;

    // control the menu tabs
    $('.ui .item').on('click', function () {
        menu_choice = $(this).attr('menu_id');
        $('.ui .item').removeClass('active');
        $(this).addClass('active');
    });
});