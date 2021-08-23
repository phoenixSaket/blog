import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
})
export class BlogComponent implements OnInit {
  @Input() blog: any;
  public title: string;
  public subtitle: string;
  public content: string;
  public likes: string;
  public date: string;

  constructor() {}

  ngOnInit(): void {
    this.title = this.blog.title;
    this.subtitle = this.blog.subtitle;
    
    console.log(this.blog.content);
    this.blog.content = this.blog.content.replaceAll("class='image'", "width = 100%" );
    console.log(this.blog.content);

    this.content = this.blog.content;

    this.likes = this.blog.likes;
    this.date = this.blog.date;

    let images = document.getElementsByClassName('image');

    setTimeout(() => {
      for (let i = 0; i < images.length; i++) {
        images[i].classList.add('max-300');
      }
    }, 100);
  }
}
