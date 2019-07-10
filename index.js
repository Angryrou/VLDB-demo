var default_menu_id = 1;
var default_conf_menu_id = 0;
var default_wl_id = 'batch_offline_1-7';
var default_reco_conf_id = 0;

var menu_id = default_menu_id;
var wl_id = default_wl_id;

var menu_tab = ['workload', 'execution-plan', 'performance-models', 'multi-objective-optimization', 'net-benefits'];
var conf_tab = ['recommended', 'default', 'customized'];
var reco_conf_list = ['recommended-conf-1', 'recommended-conf-2', 'recommended-conf-3'];

var wl_id_dict = {
    "batch": {
        "offline": '1-7,2-2,3-2,4-7,5-1,6-2,7-2,8-5,9-3,10-0,11-2,12-3,13-4,14-0,15-4,16-3,17-5,18-1,19-7,20-4,21-1,22-7,23-4,24-3,25-7,26-8,27-7,28-0,29-1,30-0,1-5,2-0,3-0,4-6,5-6,6-4,7-3,8-6,9-0,12-8,13-6,14-5,15-3,16-4,17-4,18-8,19-4,20-6,21-7,22-2,23-0,24-5,25-1,26-5,27-8,28-3,29-3,30-8'.split(','),
        "online": '1-1,2-3,3-3,4-8,5-5,6-8,7-0,8-7,9-7,10-1,11-0,12-5,13-7,14-2,15-1,16-2,17-0,18-7,19-6,20-7,21-3,22-8,23-5,24-8,25-4,26-2,27-3,28-2,29-2,30-7,1-3,2-8,3-8,4-2,5-0,6-3,7-8,8-0,9-2,10-2,11-1,12-7,13-3,14-7,15-0,16-0,17-7,18-6,19-5,20-1,21-5,22-6,23-1,24-4,25-8,26-3,27-6,28-1,29-4,30-4,1-4,2-6,3-6,4-0,5-2,6-0,7-6,8-3,9-8,12-0,13-5,14-4,15-2,16-8,17-6,18-5,19-2,20-8,21-2,22-0,23-7,24-7,25-6,26-0,27-1,28-6,29-0,30-3,1-2,2-1,3-5,4-4,5-4,6-7,7-4,8-4,9-4,12-6,13-0,14-1,15-6,16-1,17-8,18-4,19-0,20-0,21-8,22-1,23-8,24-1,25-5,26-7,27-2,28-7,29-5,30-6,1-0,2-4,3-7,4-3,5-8,6-5,7-7,8-2,9-6,12-1,13-8,14-6,15-5,16-6,17-2,18-0,19-8,20-5,21-4,22-3,23-2,24-6,25-3,26-1,27-4,28-8,29-7,30-1,1-8,2-5,3-4,4-5,5-7,6-6,7-1,8-8,9-5,12-2,13-2,14-3,15-8,16-5,17-3,18-3,19-1,20-2,21-6,22-5,23-3,24-2,25-0,26-4,27-0,28-5,29-8,30-2,1-6,2-7,3-1,4-1,5-3,6-1,7-5,8-1,9-1,12-4,13-1,14-8,15-7,16-7,17-1,18-2,19-3,20-3,21-0,22-4,23-6,24-0,25-2,26-6,27-5,28-4,29-6,30-5'.split(',')    
    },
    "streaming": {
        "offline": ''.split(','),
        "online": ''.split(',')
    }
};

var wl_des_dict = {
    "batch_offline_1-7": "description for 1-7"
}

var wl_lgp_dict = {
    "batch_offline_1-7": "logical plan for 1-7"
}

var wl_embedded_url_dict = {
    "batch_offline_1-7": "http://10.0.0.7:18088/history/application_1556053183124_3882/SQL"
}

function target_wl_update(i) {
    $('*[data-tag="wl-id"]').text(i);
    $('#wl-description').find('pre').text((wl_des_dict[i] !== undefined) ? wl_des_dict[i] : 'TBD...');
    $('#wl-logical-plan').find('pre').text((wl_lgp_dict[i] !== undefined) ? wl_lgp_dict[i] : 'TBD...');
}

function update_frame() {
    $('#spark-ui').embed({
        autoplay: true,
        url: wl_embedded_url_dict[wl_id],
        onDisplay: function() {
            $(this).find('iframe').attr('scrolling', 'auto')
                .attr('webkitallowfullscreen', 'true')
                .attr('mozallowfullscreen', 'true')
                .attr('allowfullscreen', 'true');
        }
    });
}

$(document).ready(function () {
    // initial setup
    // title font
    $('#title-section').css('font-size', '20px').css('padding', '5px 18px')
    $('#title').css('font-family', 'monospace')
    $('#sub-title').css('font-family', 'monospace')
    // menu choice
    $('a[data-tab=' + menu_tab[default_menu_id] + ']').addClass('active');
    $('div[data-tab=' + menu_tab[default_menu_id] + ']').addClass('active');
    
    // menu-1 workload
    $('div[data-value="' + default_wl_id + '"]').addClass('selected').addClass('active');
    target_wl_update(default_wl_id);

    // menu-2 execution plan
    $('a[data-tab=' + conf_tab[default_conf_menu_id] + ']').addClass('active');
    $('div[data-tab=' + conf_tab[default_conf_menu_id] + ']').addClass('active');
    $('div[data-value=' + reco_conf_list[default_reco_conf_id] + ']').addClass('selected').addClass('active');
    $('*[data-tag="recommended-conf-id"]').text(reco_conf_list[default_reco_conf_id]);

    update_frame();

    $('.massive.menu .item')
        .tab();

    // workload dropdown 
    $('#target-workload-dropdown').dropdown({
        allowCategorySelection: true,
        onChange: function(value, text, $choice) {
            console.log(value)
            if (value == 'batch' || value == 'streaming' || value == 'offline' || value == 'online') {
                alert('Please choose a specific target workload');
                $('div[data-value="' + wl_id + '"]').get(0).click();
            }
            else {
                wl_id = text;
                target_wl_update(wl_id);
            }
        }
    });

    // recommended conf dropdown
    $('#recommended-conf-dropdown').dropdown({
        onChange: function(value, text, $choice) {
        }
    });

    // conf type tab
    $('.secondary.menu .item').tab({
        'onVisible':function(tab_path) {
            console.log(tab_path)
            if (tab_path != "recommended") {
                console.log('not recommended');
                $('#recommended-conf-dropdown').addClass('disabled');
            } 
            else{
                console.log('change back to recommended');
                $('#recommended-conf-dropdown').removeClass('disabled');
            }
        }
    });
    
    

});


