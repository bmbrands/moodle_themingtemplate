$(function(){
    $('#block-region-side-pre .contains_branch.depth_2').click(function() {
        $(this).toggleClass('collapsed');
    });
    $('#block-region-side-pre .block_settings .contains_branch').click(function() {
        $(this).toggleClass('collapsed');
    });
    $('#block-region-side-pre .block-hider-hide').click(function() {
        $(this).closest(".block").toggleClass('hidden');
    });
    $('#block-region-side-pre .block-hider-show').click(function() {
        $(this).closest(".block").toggleClass('hidden');
    });
});