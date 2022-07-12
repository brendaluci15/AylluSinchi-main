$(document).ready(function () {
    listar();
});
function listar() {
    $.ajax({
        url: "/asistencia/all",
        type: 'GET',
        success: function (x) {
            $("#table tbody tr").remove();
            x.forEach((item, index, array) => {
                $("#table").append(
                        "<tr>\n\
                            <td>" + (index + 1) + "</td>\n\
                            <td>" + item.asisNombres + "</td>\n\
                            <td>" + item.asisApellidos + "</td>\n\
                            <td>" + item.tipoDocumento.tidoNombre + "</td>\n\
                            <td>" + item.asisNumdocu + "</td>\n\
                            <td>" + item.programa.progNombre + "</td>\n\
                            <td>" + item.taller.tallNombre + "</td>\n\
                            <td style='text-align: center'>\n\
                                <a title='Asistencia registrada'><i class='fa-solid fa-pen-to-square yelow'></i></a>\n\
                            </td>\n\
                            <td style='text-align: center'>\n\
                                <a href='#' onclick='eliminar(" + item.asisId + ")'><i class='fa-solid fa-trash-can red'></i></a>\n\
                            </td>\n\
                        </tr>");

            });
        }
    });
}

function listarTipoDoc(selected) {
    $.ajax({
        url: "/TipoDocumento/all",
        type: 'GET',
        success: function (x) {
            $(".tidoId option").remove();
            $(".tidoId").append("<option>Seleccione</option>");
            x.forEach((item, index, array) => {
                if (item.tidoId === selected) {
                    $(".tidoId").append("<option selected value=" + item.tipoId + ">" + item.tidoNombre + "</option>");
                } else {
                    $(".tidoId").append("<option value=" + item.tipoId + ">" + item.tidoNombre + "</option>");
                }
            });
        }
    });
}
$("#otro").click(function () {
    listarTipoDoc(0);
});

function listarPrograma(selected) {
    $.ajax({
        url: "/programa/all",
        type: 'GET',
        success: function (x) {
            $(".progId option").remove();
            $(".progId").append("<option>Seleccione</option>");
            x.forEach((item, index, array) => {
                if (item.progId === selected) {
                    $(".progId").append("<option selected value=" + item.progId + ">" + item.progNombre + "</option>");
                } else {
                    $(".progId").append("<option value=" + item.progId + ">" + item.progNombre + "</option>");
                }
            });
        }
    });
}
$("#nuevo").click(function () {
    listarPrograma(0);
});

function listarTaller(selected) {
    $.ajax({
        url: "/taller/all",
        type: 'GET',
        success: function (x) {
            $(".tallId option").remove();
            $(".tallId").append("<option>Seleccione</option>");
            x.forEach((item, index, array) => {
                if (item.tallId === selected) {
                    $(".tallId").append("<option selected value=" + item.tallId + ">" + item.tallNombre + "</option>");
                } else {
                    $(".tallId").append("<option value=" + item.tallId + ">" + item.tallNombre + "</option>");
                }
            });
        }
    });
}
$("#mass").click(function () {
    listarTaller(0);
});



$("#guardar").click(function () {
    $.ajax({
        url: "/asistencia/save",
        type: 'POST',
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify({
            asisNombres: $("#nombres").val(),
            asisApellidos: $("#apellidos").val(),
            asisNumdocu: $("#numdocu").val(),
            programa: {
                progId: $("#progId").val()
            }
            
            
        }),
        cache: false,
        success: function (w) {
            var dialog = bootbox.dialog({
                message: '<p class="text-center mb-0"><i class="fa fa-spin fa-spinner"></i> Registro Guardado Correctamente.</p>',
                closeButton: false
            });
            setTimeout(function () {
                dialog.modal('hide');
            }, 1500);
            limpiar();
            listar();
        }
    });
    $("#guardarModal").modal('hide');
});
