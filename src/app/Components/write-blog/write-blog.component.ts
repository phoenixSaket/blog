import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-write-blog',
  templateUrl: './write-blog.component.html',
  styleUrls: ['./write-blog.component.css'],
})
export class WriteBlogComponent implements OnInit {
  @Input() name: string;
  @Output() close: EventEmitter<boolean> = new EventEmitter();

  public title: string = '';
  public subtitle: string = '';
  public content: string = '';
  public isPrivate: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  getValue(type: string, event) {
    if (typeof event === 'string') {
      switch (type) {
        case 'title':
          this.title = event;
          break;
        case 'subtitle':
          this.subtitle = event;
          break;
        default:
          break;
      }
    }
  }

  closePopup() {
    this.close.emit(true);
  }

  styleClicked(style) {
    let content = <HTMLInputElement>document.getElementById('content');

    let selection = '';
    let string = '';

    let key = '';

    switch (style) {
      case 'bold':
        key = 'b';
        break;
      case 'italic':
        key = 'i';
        break;
      case 'underline':
        key = 'u';
        break;
      default:
        break;
    }

    if (
      content.value.substring(
        content.selectionStart - 3,
        content.selectionStart
      ) ===
        '<' + key + '>' &&
      content.value.substring(
        content.selectionEnd,
        content.selectionEnd + 4
      ) ===
        '</' + key + '>'
    ) {
      string =
        content.value.substring(0, content.selectionStart - 3) +
        '' +
        content.value.substring(content.selectionStart, content.selectionEnd) +
        '' +
        content.value.substring(content.selectionEnd + 4, content.value.length);
      // setData(string);
    } else {
      selection =
        '<' +
        key +
        '>' +
        content.value.substring(content.selectionStart, content.selectionEnd) +
        '</' +
        key +
        '>';

      string =
        content.value.substring(0, content.selectionStart) +
        selection +
        content.value.substring(content.selectionEnd, content.value.length);
      // setData(string);
    }

    (<HTMLInputElement>document.getElementById('content')).value = string;
  }

  selctionChange() {
    let content = <HTMLInputElement>document.getElementById('content');
    let key = ['b', 'i', 'u'];

    key.forEach((element) => {
      if (
        content.value.substring(
          content.selectionStart - 3,
          content.selectionStart
        ) ===
          '<' + element + '>' &&
        content.value.substring(
          content.selectionEnd,
          content.selectionEnd + 4
        ) ===
          '</' + element + '>'
      ) {
        document.getElementById(element).classList.add('active');
      } else {
        document.getElementById(element).classList.remove('active');
      }
    });
  }

  uploadImage(e) {
    console.log('Files ', e.target.files);
    const formData = new FormData();
    // const imagefile = e;
    formData.append('image', e.target.files[0]);
  }

  submitData() {
    const title = this.title;
    const subtitle = this.subtitle;
    const content = (<HTMLInputElement>document.getElementById('content'))
      .value;
    // const userId = id;
    // const images = blogImages;
    // const isPrivate = toggle === "/toggle_off.png" ? 0 : 1;
    const dateObject = new Date();
    const date =
      dateObject.getDate() +
      '/' +
      (dateObject.getMonth() + 1) +
      '/' +
      dateObject.getFullYear();
    const likes = 0;

    const data = {
      title: title,
      subtitle: subtitle,
      content: content,
      // userId: userId,
      // images: images,
      // isPrivate: isPrivate,
      date: date,
      likes: likes,
    };

    console.log(data);
  }
}
