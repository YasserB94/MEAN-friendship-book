import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  navOpen = false;
  constructor() {}

  ngOnInit(): void {}
  toggleNav() {
    this.navOpen = !this.navOpen;
  }
}

/*
animations: [
    trigger('toggleBurgerCloseAnimation', [
      state('closed', style({})),
      state(
        'openTopLine',
        style({
          transform: 'rotate(45deg)',
        })
      ),
      state(
        'openMiddleLine',
        style({
          opacity: '0',
        })
      ),
      state(
        'openBottomLine',
        style({
          transform: 'rotate(-45deg)',
        })
      ),
    ]),
  ]
  */
