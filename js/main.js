// -------   Отправка данных в php файл

$(document).ready(function () {
    var form = $('#myForm'); // форма контактов
    var submit = $('.submit-btn'); // кнопка отправки
    var alert = $('.alert-msg'); // уведомление

    // Подтверждение отправки
    form.on('submit', function (e) {
        e.preventDefault(); // исключение

        $.ajax({
            url: 'mail.php', // адрес php файлаа
            type: 'POST', // метод отправки данных
            dataType: 'html', // тип данных
            data: form.serialize(), 
            beforeSend: function () {
                alert.fadeOut();
                submit.html('Sending....'); 
            },
            success: function (data) {
                alert.html(data).fadeIn(); 
                form.trigger('reset'); 
                submit.attr("style", "display: none !important");; 
            },
            error: function (e) {
                console.log(e)
            }
        });
    });
});
