import { 
  Component,
  OnInit,
  Input,
  DoCheck,
  OnChanges,
  SimpleChanges,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  ViewChild,
  ElementRef
} from '@angular/core';
import { ContentChild } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit, OnChanges, DoCheck, AfterContentInit,
  AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  // @Input('srvElement') element: { type: string, name: string, content: string };
  @Input() name: string;
  @ViewChild('heading') header :ElementRef;
  @ContentChild('contentParagraph') paragraph :ElementRef;

  constructor() {
    console.log('constructor called');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges called');
    console.log(changes);
  }

  ngOnInit() {
    console.log('ngOnInit called');
    console.log('text content:' + this.header.nativeElement.textContent);
    console.log('content:' + this.paragraph.nativeElement.textContent);          
  }

  ngDoCheck() {
    console.log('ngDoCheck called');
    console.log('text content:' + this.header.nativeElement.textContent);
    console.log('content:' + this.paragraph.nativeElement.textContent);          
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit called');
    console.log('text content:' + this.header.nativeElement.textContent);
    console.log('content:' + this.paragraph.nativeElement.textContent);          
  }

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked called');
    console.log('text content:' + this.header.nativeElement.textContent);
    console.log('content:' + this.paragraph.nativeElement.textContent);              
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit called');
    console.log('text content:' + this.header.nativeElement.textContent);
    console.log('content:' + this.paragraph.nativeElement.textContent);              
  }

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked called');
    console.log('text content:' + this.header.nativeElement.textContent);
    console.log('content:' + this.paragraph.nativeElement.textContent);              
  }

  ngOnDestroy() {
    console.log('ngOnDestroy called');
  }

}
