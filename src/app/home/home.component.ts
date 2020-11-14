import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  // Slider
  sliders = [
    {
      title: 'We are growing fast do you see.',
      image: 'slider-img',
      text: 'Preserved defective offending he daughters on or. Rejoiced prospect yet material servants out answered men admitted. Sportsmen certainty prevailed suspected am as. Add stairs admire all answer the nearer yet length. '
    },
    {
      title: 'We are growing fast do you see.',
      image: 'overview-img',
      text: 'Preserved defective offending he daughters on or. Rejoiced prospect yet material servants out answered men admitted. Sportsmen certainty prevailed suspected am as. Add stairs admire all answer the nearer yet length. '
    },
    {
      title: 'We are growing fast do you see.',
      image: 'slider-img',
      text: 'Preserved defective offending he daughters on or. Rejoiced prospect yet material servants out answered men admitted. Sportsmen certainty prevailed suspected am as. Add stairs admire all answer the nearer yet length. '
    }
  ];
  sliderOptions: OwlOptions = {
    items: 1,
    loop: true,
    // center: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: true,
    navSpeed: 700,
    navText: ['<i class="fas fa-chevron-up"></i>', '<i class="fas fa-chevron-down"></i>'],
    nav: true,
    // autoplay: true,
    autoplayTimeout: 3000
  }

  // Services
  services = [
    {
      image: 'serv1'
    },
    {
      image: 'serv2'
    },
    {
      image: 'serv3'
    }
  ];

  // Statistics
  statistics = [
    {
      icon: 'walking',
      count: '21570',
      title: 'Clients Serviced'
    },
    {
      icon: 'cog',
      count: '5140',
      title: 'Machienes'
    },
    {
      icon: 'user-friends',
      count: '61473',
      title: 'Qulified Staff'
    },
    {
      icon: 'map-marker-alt',
      count: '126',
      title: 'Sites'
    },
  ];

  // News
  news = [
    {
      image: 'new1'
    },
    {
      image: 'new2'
    },
    {
      image: 'new3'
    }
  ];

  // Partners
  partners = [
    {
      logo: 'partner1'
    },
    {
      logo: 'partner2'
    },
    {
      logo: 'partner3'
    },
    {
      logo: 'partner1'
    },
    {
      logo: 'partner2'
    },
    {
      logo: 'partner1'
    },
    {
      logo: 'partner2'
    },
    {
      logo: 'partner3'
    },
    {
      logo: 'partner1'
    },
    {
      logo: 'partner2'
    }
  ];
  partnersOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    nav: false,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 3
      },
      740: {
        items: 5
      },
      940: {
        items: 5
      }
    },
  }

  // Start Officers
  officers = [
    {
      'image': 'officer1',
      'name': 'Mr. Mohamed AbdelRasoul',
      'job': 'Chief Executive Officer',
      'desc': 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima minus natus consequuntur modi nam placeat incidunt culpa nulla nesciunt molestias, architecto, fuga odio. Obcaecati reprehenderit similique quidem totam deleniti blanditiis?',
      'social': [
        {
          icon: 'facebook-f',
          url: ''
        },
        {
          icon: 'twitter',
          url: ''
        },
        {
          icon: 'linkedin',
          url: ''
        },
        {
          icon: 'pinterest',
          url: ''
        },
      ]
    },
    {
      'image': 'officer2',
      'name': 'Dr. Alaa AlGoweini',
      'job': 'Chief Executive Officer',
      'desc': 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima minus natus consequuntur modi nam placeat incidunt culpa nulla nesciunt molestias, architecto, fuga odio. Obcaecati reprehenderit similique quidem totam deleniti blanditiis?',
      'social': [
        {
          icon: 'facebook-f',
          url: ''
        },
        {
          icon: 'twitter',
          url: ''
        },
        {
          icon: 'linkedin',
          url: ''
        },
        {
          icon: 'pinterest',
          url: ''
        },
      ]
    },
    {
      'image': 'officer3',
      'name': 'Dr. Walaa Kadry',
      'job': 'Chief Executive Officer',
      'desc': 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima minus natus consequuntur modi nam placeat incidunt culpa nulla nesciunt molestias, architecto, fuga odio. Obcaecati reprehenderit similique quidem totam deleniti blanditiis?',
      'social': [
        {
          icon: 'facebook-f',
          url: ''
        },
        {
          icon: 'twitter',
          url: ''
        },
        {
          icon: 'linkedin',
          url: ''
        },
        {
          icon: 'pinterest',
          url: ''
        },
      ]
    },
    {
      'image': 'officer4',
      'name': 'Mr. AbdelHakim GamalElDin',
      'job': 'Chief Executive Officer',
      'desc': 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima minus natus consequuntur modi nam placeat incidunt culpa nulla nesciunt molestias, architecto, fuga odio. Obcaecati reprehenderit similique quidem totam deleniti blanditiis?',
      'social': [
        {
          icon: 'facebook-f',
          url: ''
        },
        {
          icon: 'twitter',
          url: ''
        },
        {
          icon: 'linkedin',
          url: ''
        },
        {
          icon: 'pinterest',
          url: ''
        },
      ]
    }
  ]

  // Start Main Officer
  mainOfficer = {
    'image': 'officer1',
    'name': 'Mr. Mohamed AbdelRasoul',
    'job': 'Chief Executive Officer',
    'desc': 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima minus natus consequuntur modi nam placeat incidunt culpa nulla nesciunt molestias, architecto, fuga odio. Obcaecati reprehenderit similique quidem totam deleniti blanditiis?',
    'social': [
      {
        icon: 'facebook-f',
        url: ''
      },
      {
        icon: 'twitter',
        url: ''
      },
      {
        icon: 'linkedin',
        url: ''
      },
      {
        icon: 'pinterest',
        url: ''
      },
    ]
  }

  constructor() {
  }

  ngOnInit(): void {
  }

  updatedData(image, name, job, desc, social) {
    const data = { image, name, job, desc, social }
    console.log(data);
    this.mainOfficer.image = image;
    this.mainOfficer.name = name;
    this.mainOfficer.job = job;
    this.mainOfficer.desc = desc;
    this.mainOfficer.social = social;
  }

}
