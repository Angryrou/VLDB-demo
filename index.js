var default_menu_choice = 0;
var menu_tab = {
    0: 'workload',
    1: 'execution-plan',
    2: 'performance-models',
    3: 'multi-objective-optimization',
    4: 'net-benefits'
};

$(document).ready(function () {
    $('a[data-tab=' + menu_tab[default_menu_choice] + ']').addClass('active');

    // control the menu tabs
    $('.ui .item').on('click', function () {
        $('.ui .item').removeClass('active');
        $(this).addClass('active');
    });
});