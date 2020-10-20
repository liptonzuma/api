let container = document.querySelector('.container')
window.addEventListener('load', () => {
    const api = 'http://livescore-api.com/api-client/scores/live.json?key=OaWuduWmeW8MCFWa&secret=oIZflv2kbtfIm1EabBFp5BLjxU6az2lY';
    fetch(api).then(res => {
        return res.json()
    }).then(data => {
        console.log(data)
        data.data.match.forEach(match => {
            let div = document.createElement('div');
            div.innerHTML =
                `<div>
                      <div class = " card text-center text-dark m-3 text-uppercase p-3
                      " >
                      <div class="card-header bg-primary text-light">${match.competition_name} </div>
                      <div class="card-body font-weight-bold">
                        <span class="text-success"> ${match.home_name}</span>  <span class="text-danger"> vs</span>   <span class="text-warning">${match.away_name}</sapn>
                        <p class="lead font-weight-normal">${match.ht_score}</p>
                        <p class="lead font-weight-normal">${match.ft_score}</p>
                        <p class="description font-weight-normal text-info">${match.info}</p>
                      </div>
                      <div class="card-footer bg-secondary text-light">
                       ${match.scheduled} 
                       <span>${match.status}</span>
                      </div>
                       </div>
                      </div>`;
            container.appendChild(div)
        });



    })
})