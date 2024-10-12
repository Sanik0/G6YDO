const sidebar = document.getElementById('dashboard');
const menuButton = document.getElementById('menu-button');
const closeButton = document.getElementById('close-button');

menuButton.addEventListener('click', () => {
    if (sidebar.style.transform === 'translateX(-250px)') {
      sidebar.style.transform = 'translateX(0px)';
    } else {
      sidebar.style.transform = 'translateX(0px)';
    }
}
);

closeButton.addEventListener('click', () => {
    if (sidebar.style.transform === 'translateX(-250px)') {
        sidebar.style.transform = 'translateX(0px)';
    } else {
        sidebar.style.transform = 'translateX(-250px)';
    }
}
);

// statistics

const ctx = document.getElementById('myChart');
              
new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['District 1', 'District 2', 'District 3', 'District 4', 'District 5', 'District 6'],
    datasets: [{
      label: 'Population',
      data: [3000, 2000, 1500, 5000, 4000, 3000],
      backgroundColor: [
        'rgba(255, 152, 152, 1)',
        'rgba(255, 145, 200, 1)',
        'rgba(135, 255, 135, 1)',
        'rgba(255, 212, 131, 1)',
        'rgba(223, 128, 255, 1)',
        'rgba(126, 126, 255, 1)',
      ],
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});

const ctx2 = document.getElementById('pieChart');

new Chart(ctx2, {
  type: 'pie',
  data: {
    labels: ['District 1', 'District 2', 'District 3', 'District 4', 'District 5', 'District 6'],
    datasets: [{
      label: 'Population',
      data: [3000, 2000, 1500, 5000, 4000, 3000],
      backgroundColor: [
        'rgba(255, 152, 152, 1)',
        'rgba(255, 145, 200, 1)',
        'rgba(135, 255, 135, 1)',
        'rgba(255, 212, 131, 1)',
        'rgba(223, 128, 255, 1)',
        'rgba(126, 126, 255, 1)',
      ],
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});

const ctx3 = document.getElementById('lineChart');

new Chart(ctx3, {
  type: 'line',
  data: {
    labels: ['District 1', 'District 2', 'District 3', 'District 4', 'District 5', 'District 6'],
    datasets: [{
      label: 'Population',
      data: [3000, 2000, 1500, 5000, 4000, 3000],
      backgroundColor: [
        'rgba(255, 152, 152, 1)',
        'rgba(255, 145, 200, 1)',
        'rgba(135, 255, 135, 1)',
        'rgba(255, 212, 131, 1)',
        'rgba(223, 128, 255, 1)',
        'rgba(126, 126, 255, 1)',
      ],
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});

const ctx4 = document.getElementById('radarChart');

new Chart(ctx4, {
  type: 'radar',
  data: {
    labels: ['District 1', 'District 2', 'District 3', 'District 4', 'District 5', 'District 6'],
    datasets: [{
      label: 'Population',
      data: [3000, 2000, 1500, 5000, 4000, 3000],
      backgroundColor: [
        'rgba(255, 152, 152, 1)',
        'rgba(255, 145, 200, 1)',
        'rgba(135, 255, 135, 1)',
        'rgba(255, 212, 131, 1)',
        'rgba(223, 128, 255, 1)',
        'rgba(126, 126, 255, 1)',
      ],
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});

