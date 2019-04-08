import { async, ComponentFixture, TestBed, TestModuleMetadata } from '@angular/core/testing';

import { CardComponent } from '../card.component';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('CardComponent', () => {
  let testcomponet:MyTestComponent;
  let fixturetest:ComponentFixture<MyTestComponent>;

  beforeEach(async(() => {
    /**
     * @uijar CardComponent
     * @hostcomponent MyTestComponent
     */
    TestBed.configureTestingModule({
      declarations: [ CardComponent, MyTestComponent ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixturetest = TestBed.createComponent(MyTestComponent);
    testcomponet = fixturetest.componentInstance;
    fixturetest.detectChanges();
  });

   /** @uijarexample Card container */
   it('test1', () => {   
    testcomponet.text = 'Lorem ipsum dolor sit amet...';
  });
});

@Component({
  selector: 'my-comp',
  template: `
  <mat-card>Simple card</mat-card>
  `
})
class MyTestComponent {
  text: string;
}