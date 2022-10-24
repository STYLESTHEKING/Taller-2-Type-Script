import { serie } from './serie.js';
import { lSeries } from './dataSeries.js';

const seriestbody: HTMLElement = document.getElementById('serie')!; // tbody que tiene el id "serie"

renderTable(lSeries);
averageSeasons(lSeries);

function renderTable(series: serie[]): void {
  series.forEach(serie => {
    let trElement = document.createElement("tr");
    trElement.innerHTML = `<td>${serie.id}</td>
                           <td style="color: #0051ff;"><a href="#" style="text-decoration: none">${serie.name}</a></td>
                           <td>${serie.channel}</td>
                           <td>${serie.season}</td>`;
    seriestbody.appendChild(trElement);
    trElement.children[1].children[0].addEventListener('click', () => serieInfo(serie));
  });  
}


function averageSeasons(series: serie[]): void {
  let totalS: number = 0;
  let avgss: HTMLElement = document.getElementById("average-seasons")!;
  series.forEach((serie) => {(totalS += serie.season)});
  avgss.innerHTML = `${(totalS / series.length)}`;
}

function serieInfo(serie: serie): void {
  let c = serie;
  let cardBody: HTMLElement = document.getElementById("seriescards")!;
  cardBody.innerHTML = `<div class="card" style="text-align: justify; width: 30rem;">
                          <img src="${c.picture}" alt="${c.name}">
                          <div class="card-body">
                            <h5 class="card-title"><strong>${c.name}</strong></h5>
                            <p class="card-text">${c.description}</p>
                            <a href="${c.review}" target = "_blank" style="text-decoration: none"<span>${c.review}</span></a>
                          </div>
                        </div>`;
}