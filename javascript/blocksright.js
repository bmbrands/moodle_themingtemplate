$(function(){
    $('#block-region-side-post .contains_branch.depth_2').click(function() {
        $(this).toggleClass('collapsed');
    });
    $('#block-region-side-post .block_settings .contains_branch').click(function() {
        $(this).toggleClass('collapsed');
    });
    $('#block-region-side-post .block-hider-hide').click(function() {
        $(this).closest(".block").toggleClass('hidden');
    });
    $('#block-region-side-post .block-hider-show').click(function() {
        $(this).closest(".block").toggleClass('hidden');
    });
});