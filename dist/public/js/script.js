$(document).ready(function () {
    $('.delete-movie').on('click', function (e) {
        $target = $(e.target);
        alert("Are you sure to delete?")
        const id = $target.attr('data-id');

        $.ajax({
            type: 'DELETE',
            url: '/api/movies/' + id,
        });
    });

    $(".search").on("keyup", function () {
        var value = $(this).val().toLowerCase();
        $(".list-group li").filter(function () {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });
});