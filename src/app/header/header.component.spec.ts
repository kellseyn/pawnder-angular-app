import { TestBed, async, ComponentFixture, inject, tick, fakeAsync } from '@angular/core/testing';

import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

import { HeaderComponent } from './header.component';
import { StoreModule } from '@ngrx/store';
import * as fromApp from '../store/app.reducer';


describe('HeaderComponent', () => {
    let component: HeaderComponent;
    let fixture: ComponentFixture<HeaderComponent>;
    let de: DebugElement;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                StoreModule.forRoot(fromApp.appReducer),

            ],
            declarations: [ HeaderComponent ],
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(HeaderComponent);
        component = fixture.componentInstance;
        de = fixture.debugElement;

        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should have `PAWnder` in navbar', () => {
        const compiled = fixture.nativeElement;
        expect(compiled.querySelector('.navbar').textContent).toContain('PAWnder');
    });

    it('should have `login` tab visible when not authenticated', () => {
        const compiled = fixture.nativeElement;
        expect(compiled.querySelector('.login').textContent).toContain('Login');
    });

    it('should not have `logout` tab visible when not authenticated', () => {
        expect(de.query(By.css('.logout'))).toBeNull();   
     });

     it('should not have `shelters` tab visible when not authenticated', () => {
        expect(de.query(By.css('.shelters'))).toBeNull();   
     });

     it('should not have `animals` tab visible when not authenticated', () => {
        expect(de.query(By.css('.animals'))).toBeNull();   
     });

    //  it('should not have `login` tab visible when authenticated', () => {
    //     expect(de.query(By.css('.login'))).toBeNull();   
    //  });

    //  it('should have `shelters` tab visible when authenticated', () => {
        // const compiled = fixture.nativeElement;
        // expect(compiled.querySelector('.shelters').textContent).toContain('Shelters');
    //  });

    //  it('should have `animals` tab visible when authenticated', () => {
        // const compiled = fixture.nativeElement;
        // expect(compiled.querySelector('.animals').textContent).toContain('Animals');    
    //  });

});