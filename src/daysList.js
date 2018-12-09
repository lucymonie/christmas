const daysList = [
  {
    date: (new Date(2018, 11, 9)),
    events: [{
      name: 'Mayow Park Christmas market',
      url: 'http://www.growmayow.org/2018/10/christmas-market-8-9-december.html',
      location: 'Mayow Park, Mayow Rd, Forest Hill',
      time: '11am to 5pm',
      agegroup: 'family'
    },
    {
      name: 'So last century Christmas vintage market',
      url: 'https://www.beckenhamplace.org/event/so-last-century-christmas-vintage-market/',
      location: 'Beckenham Place Park, Beckenham BR3',
      time: '10am to 4pm',
      agegroup: 'family'
    },
    {
      name: 'Christingle service',
      url: 'http://www.gracechurchdulwich.org/',
      location: 'Grace Church, Rosendale Primary School, Dulwich SE21 8LR',
      time: '4pm',
      agegroup: 'family'
    }]
  },
  {
    date: (new Date(2018, 11, 12)),
    events: [{
      name: 'Christmas Late',
      url: 'https://www.southlondongallery.org/events/christmas-late/',
      location: 'South London Gallery, 65-67 Peckham Rd, London, SE5 8UH',
      time: '6-9pm',
      agegroup: 'grown ups'
    }]
  },
  {
    date: (new Date(2018, 11, 15)),
    events: [{
      name: 'Live Nativity',
      url: 'https://www.htcsydenham.org/live-nativity-1',
      location: 'Meet at Forest Hill Station',
      time: '4pm',
      agegroup: 'family'
    }]
  },
  {
    date: (new Date(2018, 11, 16)),
    events: [{
      name: 'Santa\'s Grotto at The Mansion',
      url: 'https://www.beckenhamplace.org/event/christmas-at-the-mansion/',
      location: 'Beckenham Place Park, Beckenham BR3',
      time: '10am to 4pm',
      agegroup: 'family'
    },
    {
      name: 'Horrible Christmas Crafting',
      url: 'https://dulwichpicturegallery.org.uk/whats-on/family-events/2018/winter-holidays/horrible-christmas-crafting/',
      location: 'Dulwich Picture Gallery, Gallery Road, London SE21 7AD',
      time: '10am to 5pm',
      agegroup: '4 to 12 years'
    },
    {
      name: 'Children\'s Nativity',
      url: 'http://perryrisebaptistchurch.org.uk/prbc_wp/ai1ec_event/sunday-morning-nativity-service/',
      location: 'Perry Rise Baptist Church',
      time: '11am',
      agegroup: 'family'
    },
    {
      name: 'Little Explorers Christmas in the Woods',
      url: 'http://secretadventurersclub.com/booking-page?fbclid=IwAR1LTxbkITOn7DQZbip9IxS8yhr-_KproI7pLRJczZkQS9a9Lgt_9-NjJNE',
      location: 'Dacres Wood, Dacres Rd, Forest Hill. The entrance to the reserve is on Honeyfield Mews',
      time: '10am to midday',
      agegroup: 'Under 8s'
    },
    {
      name: 'Secret Adventurers Club Woodland Christmas Party',
      url: 'http://secretadventurersclub.com/woodland-christmas-party',
      location: 'Dacres Wood, Dacres Rd, Forest Hill. The entrance to the reserve is on Honeyfield Mews',
      time: '2-4pm',
      agegroup: 'Over 8s'
    },
    {
      name: 'Carols by Candlelight',
      url: 'http://www.gracechurchdulwich.org/',
      location: 'Rosendale Primary School, Dulwich SE21 8LR',
      time: '5.30pm',
      agegroup: 'family'
    },
    {
      name: 'Carol Service',
      url: 'https://www.augustineonetreehill.org.uk/',
      location: 'St Augustine, Honor Oak Park, SE23 3LE',
      time: '6pm',
      agegroup: 'family'
    },
    {
      name: 'Carol Concert',
      url: 'http://www.stbartschurchsydenham.org/whats-on.html',
      location: 'St Bartholomew\'s, 4 Westwood Hill, Sydenham, SE26 6QR',
      time: '6pm',
      agegroup: 'family'
    }]
  },
  {
    date: (new Date(2018, 11, 22)),
    events: [{
      name: 'Christingle Service',
      url: 'https://www.augustineonetreehill.org.uk/',
      location: 'St Augustine, Honor Oak Park, SE23 3LE',
      time: '4-5pm',
      agegroup: 'family'
    }]
  },
  {
    date: (new Date(2018, 11, 23)),
    events: [{
      name: 'Carol Service',
      url: 'https://www.htcsydenham.org/christmas',
      location: 'Holy Trinity Sydenham, Trinity Path, SE26 4EA',
      time: '10am',
      agegroup: 'family'
    },
    {
      name: 'Carol service with nativity',
      url: 'http://www.gracechurchdulwich.org/',
      location: 'Grace Church, Rosendale Primary School, Dulwich SE21 8LR',
      time: '10.30am',
      agegroup: 'family'
    },
    {
      name: 'Christmas Carol service',
      url: 'http://www.stgeorgeandstmichael.org.uk/christmas-services/',
      location: 'St George\'s Church Vancouver Road London SE23 2AG',
      time: '4pm',
      agegroup: 'family'
    }]
  },
  {
    date: (new Date(2018, 11, 24)),
    events: [{
      name: 'Gingerbread House Making',
      url: 'https://www.htcsydenham.org/christmas',
      location: 'Holy Trinity Sydenham, Trinity Path, SE26 4EA',
      time: '3pm',
      agegroup: 'family'
    },
    {
      name: 'Nativity Service',
      url: 'https://www.augustineonetreehill.org.uk/',
      location: 'St Augustine, Honor Oak Park, SE23 3LE',
      time: '4pm',
      agegroup: 'family'
    },
    {
      name: 'Crib service (with Hosanna the donkey)',
      url: 'http://www.stgeorgeandstmichael.org.uk/christmas-services/',
      location: 'St George\'s Church Vancouver Road London SE23 2AG',
      time: '4pm',
      agegroup: 'family'
    },
    {
      name: 'Midnight mass',
      url: 'http://www.stgeorgeandstmichael.org.uk/christmas-services/',
      location: 'St George\'s Church Vancouver Road London SE23 2AG',
      time: '11.30pm',
      agegroup: 'grown ups'
    }
  ]
  },
  {
    date: (new Date(2018, 11, 25)),
    events: [{
      name: 'Christmas Day Service',
      url: 'https://www.htcsydenham.org/christmas',
      location: 'Holy Trinity Sydenham, Trinity Path, SE26 4EA',
      time: '10am',
      agegroup: 'family'
    },
    {
      name: 'Carols and communion',
      url: 'http://www.stgeorgeandstmichael.org.uk/christmas-services/',
      location: 'St George\'s Church Vancouver Road London SE23 2AG',
      time: '10am',
      agegroup: 'family'
    },
    {
      name: 'All age Christmas Day service',
      url: 'http://perryrisebaptistchurch.org.uk/',
      location: 'Perry Rise Baptist Church',
      time: '10.30am',
      agegroup: 'family'
    },
    {
      name: 'Christmas Day service',
      url: 'http://www.gracechurchdulwich.org/',
      location: 'Grace Church, Rosendale Primary School, Dulwich SE21 8LR',
      time: '10.30am',
      agegroup: 'family'
    }
  ]
  }
]

export default daysList
