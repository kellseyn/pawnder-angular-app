import { TestBed, async, ComponentFixture, inject, tick, fakeAsync } from '@angular/core/testing';

import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

import { SplashComponent } from './splash.component';

describe('SplashComponent', () => {
    let component: SplashComponent;
    let fixture: ComponentFixture<SplashComponent>;
    let de: DebugElement;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ SplashComponent ],
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(SplashComponent);
        component = fixture.componentInstance;
        de = fixture.debugElement;

        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should have `PAWnder` in H1 tag', () => {
        const compiled = fixture.nativeElement;
        expect(compiled.querySelector('h1').textContent).toContain('PAWnder');
    });

    it('should have punch line in P tag', () => {
        const compiled = fixture.nativeElement;
        expect(compiled.querySelector('p').textContent).toContain('Have you been PAWndering adoption?');
    });

    it('should have a backgroud image', () => {
        const ele = de.query(By.css('.jumbotron')).nativeElement
        expect(getComputedStyle(ele).backgroundImage).toContain('url("https://williamsonsource.com/wp-content/uploads/2020/01/kittens.jpg")');
    });

});
