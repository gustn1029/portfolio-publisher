$(function(){
    $('.model_type').on('click', function(){
        $('.select-model').removeClass("on");
        $(this).parents("li").addClass("on");
    })
})