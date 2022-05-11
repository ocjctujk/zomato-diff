import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-help',
  templateUrl: './help.page.html',
  styleUrls: ['./help.page.scss'],
})
export class HelpPage implements OnInit {
  help = '';
  title = '';
  qAnda;

  qAndAOnline: { q: string; a: string }[] = [
    {
      q: 'What is zomato-diff?',
      a: 'Zomato diff is a clone of the online service Zomato',
    },
    {
      q: 'Lorem ipsum dolor sit amet consectetur adipisicing elit?',
      a: 'Eum quo, delectus dicta architecto officia quia voluptatem.',
    },
    {
      q: 'Lorem ipsum dolor sit amet consectetur adipisicing elit?',
      a: 'Eum quo, delectus dicta architecto officia quia voluptatem.',
    },
    {
      q: 'Lorem ipsum dolor sit amet consectetur adipisicing elit?',
      a: 'Eum quo, delectus dicta architecto officia quia voluptatem.',
    },
    {
      q: 'Lorem ipsum dolor sit amet consectetur adipisicing elit?',
      a: 'Eum quo, delectus dicta architecto officia quia voluptatem.',
    },
    {
      q: 'Lorem ipsum dolor sit amet consectetur adipisicing elit?',
      a: 'Eum quo, delectus dicta architecto officia quia voluptatem.',
    },
    {
      q: 'Lorem ipsum dolor sit amet consectetur adipisicing elit?',
      a: 'Eum quo, delectus dicta architecto officia quia voluptatem.',
    },
    {
      q: 'Lorem ipsum dolor sit amet consectetur adipisicing elit?',
      a: 'Eum quo, delectus dicta architecto officia quia voluptatem.',
    },
    {
      q: 'Lorem ipsum dolor sit amet consectetur adipisicing elit?',
      a: 'Eum quo, delectus dicta architecto officia quia voluptatem.',
    },
    {
      q: 'Lorem ipsum dolor sit amet consectetur adipisicing elit?',
      a: 'Eum quo, delectus dicta architecto officia quia voluptatem.',
    },
    {
      q: 'Lorem ipsum dolor sit amet consectetur adipisicing elit?',
      a: 'Eum quo, delectus dicta architecto officia quia voluptatem.',
    },
    {
      q: 'Lorem ipsum dolor sit amet consectetur adipisicing elit?',
      a: 'Eum quo, delectus dicta architecto officia quia voluptatem.',
    },
    {
      q: 'Lorem ipsum dolor sit amet consectetur adipisicing elit?',
      a: 'Eum quo, delectus dicta architecto officia quia voluptatem.',
    },
    {
      q: 'Lorem ipsum dolor sit amet consectetur adipisicing elit?',
      a: 'Eum quo, delectus dicta architecto officia quia voluptatem.',
    },
    {
      q: 'Lorem ipsum dolor sit amet consectetur adipisicing elit?',
      a: 'Eum quo, delectus dicta architecto officia quia voluptatem.',
    },
    {
      q: 'Lorem ipsum dolor sit amet consectetur adipisicing elit?',
      a: 'Eum quo, delectus dicta architecto officia quia voluptatem.',
    },
  ];
  qAndATable: { q: string; a: string }[] = [
    {
      q: 'What is zomato-diff?',
      a: 'Zomato diff is a clone of the online service Zomato',
    },
    {
      q: 'Lorem ipsum dolor sit amet consectetur adipisicing elit?',
      a: 'Eum quo, delectus dicta architecto officia quia voluptatem.',
    },
    {
      q: 'Lorem ipsum dolor sit amet consectetur adipisicing elit?',
      a: 'Eum quo, delectus dicta architecto officia quia voluptatem.',
    },
    {
      q: 'Lorem ipsum dolor sit amet consectetur adipisicing elit?',
      a: 'Eum quo, delectus dicta architecto officia quia voluptatem.',
    },
    {
      q: 'Lorem ipsum dolor sit amet consectetur adipisicing elit?',
      a: 'Eum quo, delectus dicta architecto officia quia voluptatem.',
    },
    {
      q: 'Lorem ipsum dolor sit amet consectetur adipisicing elit?',
      a: 'Eum quo, delectus dicta architecto officia quia voluptatem.',
    },
    {
      q: 'Lorem ipsum dolor sit amet consectetur adipisicing elit?',
      a: 'Eum quo, delectus dicta architecto officia quia voluptatem.',
    },
    {
      q: 'Lorem ipsum dolor sit amet consectetur adipisicing elit?',
      a: 'Eum quo, delectus dicta architecto officia quia voluptatem.',
    },
    {
      q: 'Lorem ipsum dolor sit amet consectetur adipisicing elit?',
      a: 'Eum quo, delectus dicta architecto officia quia voluptatem.',
    },
    {
      q: 'Lorem ipsum dolor sit amet consectetur adipisicing elit?',
      a: 'Eum quo, delectus dicta architecto officia quia voluptatem.',
    },
    {
      q: 'Lorem ipsum dolor sit amet consectetur adipisicing elit?',
      a: 'Eum quo, delectus dicta architecto officia quia voluptatem.',
    },
    {
      q: 'Lorem ipsum dolor sit amet consectetur adipisicing elit?',
      a: 'Eum quo, delectus dicta architecto officia quia voluptatem.',
    },
    {
      q: 'Lorem ipsum dolor sit amet consectetur adipisicing elit?',
      a: 'Eum quo, delectus dicta architecto officia quia voluptatem.',
    },
    {
      q: 'Lorem ipsum dolor sit amet consectetur adipisicing elit?',
      a: 'Eum quo, delectus dicta architecto officia quia voluptatem.',
    },
    {
      q: 'Lorem ipsum dolor sit amet consectetur adipisicing elit?',
      a: 'Eum quo, delectus dicta architecto officia quia voluptatem.',
    },
    {
      q: 'Lorem ipsum dolor sit amet consectetur adipisicing elit?',
      a: 'Eum quo, delectus dicta architecto officia quia voluptatem.',
    },
  ];
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.help = this.route.snapshot.paramMap.get('help');
    console.log(this.help);
    if (this.help === 'online') {
      this.qAnda = this.qAndAOnline;
      this.title = 'Online Order FAQ';
    } else {
      this.qAnda = this.qAndATable;
      this.title = 'Table Booking FAQ';
    }
  }
}
