import { lSeries } from './dataSeries.js';
var seriestbody = document.getElementById('series'); // tbody que tiene el id "serie"
renderTable(lSeries);
averageSeasons(lSeries);
function renderTable(series) {
    series.forEach(function (serie) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td>".concat(serie.id, "</td>\n                           <td style=\"color: #0051ff;\"><a href=\"#\" style=\"text-decoration: none\">").concat(serie.name, "</a></td>\n                           <td>").concat(serie.channel, "</td>\n                           <td>").concat(serie.season, "</td>");
        seriestbody.appendChild(trElement);
        trElement.children[1].children[0].addEventListener('click', function () { return serieInfo(s); });
    });
}
function averageSeasons(series) {
    var totalS = 0;
    var averageSeasons = document.getElementById("average-seasons");
    series.forEach(function (serie) { (totalS += serie.season); });
    avgss.innerHTML = "".concat((totalS / series.length));
}
function renderCardInfo(serie) {
    var c = serie;
    var info = document.getElementById("seriescards");
    cardBody.innerHTML = "<div class=\"card\" style=\"text-align: justify; width: 30rem;\">\n                          <img src=\"".concat(c.image, "\" alt=\"").concat(c.name, "\">\n                          <div class=\"card-body\">\n                            <h5 class=\"card-title\"><strong>").concat(c.name, "</strong></h5>\n                            <p class=\"card-text\">").concat(c.description, "</p>\n                            <a href=\"").concat(c.review, "\" target = \"_blank\" style=\"text-decoration: none\"<span>").concat(c.review, "</span></a>\n                          </div>\n                        </div>");
}
