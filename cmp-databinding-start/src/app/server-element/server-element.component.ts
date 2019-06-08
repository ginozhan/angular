import { Component, OnInit, Input, ViewEncapsulation, SimpleChanges, OnChanges, ViewChild, ElementRef, ContentChild, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy, DoCheck } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class ServerElementComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  @Input('srvElement') element: {
    type: string,
    name: string,
    content: string,
  }
  @Input() name: string;
  constructor() {
    console.log('constructor');
  }
  @ViewChild('heading', { static: true }) header: ElementRef;
  @ContentChild('contentParagraph', { static: true }) paragraph: ElementRef;

  ngOnChanges(changes: SimpleChanges): void {
    console.log('on change');
    console.log(changes);
  }
  ngOnInit() {
    console.log('init');
  }

  ngDoCheck(): void {
    console.log('ng do check');

  }

  ngAfterContentInit(): void {
    console.log('ng after content init');
  }

  ngAfterContentChecked(): void {
    console.log('ng after content checked');
  }
  ngAfterViewInit(): void {
    console.log('ng after view init');
    console.log(this.header.nativeElement.textContent);
    console.log('Text: ' + this.paragraph.nativeElement.textContent);
  }
  ngAfterViewChecked(): void {
    console.log('ng after view checked');
  }
  ngOnDestroy(): void {
    console.log('ng on destroy');
  }
}
