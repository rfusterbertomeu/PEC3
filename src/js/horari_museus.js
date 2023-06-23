import { DateTime } from "luxon";

var horari_box = document.getElementById("h_box");
var estat_box = document.getElementById("e_box");


//Si estem en una pàgina de museus
if (horari_box != null) {
  horari();
}
function horari() {
  const dataActual = DateTime.now().setLocale("ca").setZone("Europe/Madrid");
  const diaActual = dataActual.toFormat("EEEE");
  const horaActual = dataActual.toFormat("HH:mm");
  const anyActual = dataActual.toFormat("yyyy");

  const dataIniciEstiu = DateTime.fromFormat(
    "01/06/" + anyActual,
    "dd/MM/yyyy"
  );
  const dataFiEstiu = DateTime.fromFormat("30/09/" + anyActual, "dd/MM/yyyy");

  let textHorari = "";
  let textEstat = "";
  if (dataActual >= dataIniciEstiu && dataActual <= dataFiEstiu) {
    textHorari = textHorari + "HORARI D'ESTIU";
    //Horari estiu
    if (
      (diaActual != "Dilluns" &&
        diaActual != "Diumenge" &&
        horaActual >= "10:00" &&
        horaActual < "13:30") ||
      (horaActual >= "16:00" && horaActual < "19:00")
    ) {
      textEstat = textEstat + "OBERT";
    } else if (
      diaActual == "Diumenge" &&
      horaActual >= "11:00" &&
      horaActual < "13:30"
    ) {
      textEstat = textEstat + "OBERT";
    } else {
      textEstat = textEstat + "TANCAT. Obri ";
      if (diaActual == "Diumenge" &&   horaActual > "13:30") {
        textEstat =
          textEstat +
          DateTime.now().setLocale("ca").plus({ days: 2 }).toRelativeCalendar();
      } else if( horaActual > "19:00" ){
        textEstat =
          textEstat +
          DateTime.now().setLocale("ca").plus({ days: 1 }).toRelativeCalendar();
      } else {
        textEstat =
          textEstat +
          DateTime.now().setLocale("ca").plus({ days: 0 }).toRelativeCalendar();
      }
    }
  } else {
    //Horari hivern
    textHorari = textHorari + "HORARI D'HIVERN";
    if (
      (diaActual != "Dilluns" &&
        diaActual != "Diumenge" &&
        horaActual >= "10:00" &&
        horaActual < "13:30") ||
      (horaActual >= "17:00" && horaActual < "20:00")
    ) {
      textEstat = textEstat + "OBERT";
    } else if (
      diaActual == "Diumenge" &&
      horaActual >= "11:00" &&
      horaActual < "13:30"
    ) {
      textEstat = textEstat + "OBERT";
    } else {
      textEstat = textEstat + "TANCAT. Obri ";
      if (diaActual == "Diumenge" &&   horaActual > "13:30") {
        textEstat =
          textEstat +
          DateTime.now().setLocale("ca").plus({ days: 2 }).toRelativeCalendar();
      } else if( horaActual > "20:00" ){
        textEstat =
          textEstat +
          DateTime.now().setLocale("ca").plus({ days: 1 }).toRelativeCalendar();
      } else {
        textEstat =
          textEstat +
          DateTime.now().setLocale("ca").plus({ days: 0 }).toRelativeCalendar();
      }
    }
  }
  horari_box.innerHTML = textHorari;
  estat_box.innerHTML = textEstat;
}
