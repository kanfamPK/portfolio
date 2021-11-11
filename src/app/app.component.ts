import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'portfolio';
  topBarExpand = false;
  loopText = 'Front-End Developer';
  longLoopText = false;
  language = 1;

  ngOnInit(): void {
    setInterval(() => {
      if (this.loopText === 'Front-End Developer') {
        this.loopText =
          this.language === 1
            ? 'Welcome to my portfolio :)'
            : 'Welcome các bạn tới xem :)';
        this.longLoopText = true;
      } else {
        this.loopText = 'Front-End Developer';
        this.longLoopText = false;
      }
    }, 4000);

    if ('IntersectionObserver' in window) {
      const lazyEle = document.getElementsByClassName('lazy');

      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.animate(entry.target);
          } else {
            this.disable(entry.target);
          }
        });
      });

      for (let i = 0; i <= lazyEle.length; i++) {
        observer.observe(lazyEle[i]);
      }
    }
  }

  animate(target: Element): void {
    target.classList.remove('lazy');
    target.classList.add('animate');
  }

  disable(target: Element): void {
    target.classList.remove('animate');
    target.classList.add('lazy');
  }

  navigateToSection(element: string): void {
    this.topBarExpand = false;
    switch (element) {
      case 'about': {
        let elmnt: HTMLElement | null = document.getElementById('about');
        if (elmnt) {
          elmnt.scrollIntoView({ behavior: 'smooth', block: 'end' });
        }
        break;
      }
      case 'exp': {
        let elmnt: HTMLElement | null = document.getElementById('exp');
        if (elmnt) {
          elmnt.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
        break;
      }
      case 'project': {
        let elmnt: HTMLElement | null = document.getElementById('project');
        if (elmnt) {
          elmnt.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
        break;
      }
      case 'contact': {
        let elmnt: HTMLElement | null = document.getElementById('contact');
        if (elmnt) {
          elmnt.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
        break;
      }
    }
  }
}
