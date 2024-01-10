$(document).ready(function () {
    $('#ensaios .card').click(function () {

        // var idSelecionadoComTag = e.currentTarget.attributes[2].value;
        var idSelecionadoComTag = $(this).attr("data-target");
        var idSelecionado = idSelecionadoComTag.replace('#', '');
        var imgClicada = $(this);
        var nomeEnsaio = imgClicada.find("h5").text();
        var caminhoImg = imgClicada.find("img").attr("src");

        // Altera o nome do modal
        $("#modal-label").text(nomeEnsaio);

        // Altera a img do modal
        $("#imgModal").replaceWith('<img id="imgModal" src="' + caminhoImg + '" class="d-block w-100 rounded">');

        // Alterando o id do modal
        $(".modal").attr("id", idSelecionado);
        const modal = new bootstrap.Modal(idSelecionadoComTag);
        modal.show();
    })
})