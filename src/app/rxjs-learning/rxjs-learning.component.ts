import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Observable, from, fromEvent, interval, of } from 'rxjs';

@Component({
  selector: 'app-rxjs-learning',
  templateUrl: './rxjs-learning.component.html',
  styleUrls: ['./rxjs-learning.component.css']
})
export class RxjsLearningComponent implements OnInit {

  constructor() { }

  agents!: Observable<string>
  agentName!: string;

  //operators of
  //observable array, string and obj
  students: Observable<string[]> = of(['ahmed', 'uddin', 'siddiqui', 'karachi'])
  studentString: Observable<string> = of('Ahmed')
  studentObj$: Observable<object> = of({ id: 1, name: 'ahmed', dept: 10 });

  //operators from
  orders$: Observable<string> = from(['TShirts', 'Polos', 'Pants', 'Shoes']);

  @ViewChild('validate')
  validate: ElementRef | undefined

  @ViewChild('linkValidate')
  linkValidate: ElementRef | undefined

  ngOnInit(): void {

    // Observable
    /*this.agents = new Observable(
      (observer) => {
        try {

          observer.next('Ahmed');
          setInterval(() => {
            observer.next('Siddiqui');
          }, 3000)

          setInterval(() => {
            observer.next('Karachi');
          }, 6000)


        } catch (error) {
          observer.error(error)
          console.log(error)
        }
      }
    );

    this.agents.subscribe(data => {
      this.agentName = data;
    })
*/
    this.students.subscribe(data => {
      console.log(data);
    })

    this.studentString.subscribe(data => {
      console.log(data);
    })
    this.studentObj$.subscribe(data => {
      console.log(data);
    })

    this.orders$.subscribe(data => {
      //console.log('from operator')
      //interval
      const num$ = interval(5000);
      num$.subscribe(n => {
        if (n < 5) {
          console.log(n + ':' + data);
        }

      })

    })

  }


  buttonEventListner() {
    const btnObservable$ = fromEvent(this.validate?.nativeElement, 'click');
    btnObservable$.subscribe(data => {
      console.log(data)
    })

  }

  linkEventListner() {
    const linkValidate$ = fromEvent(this.linkValidate?.nativeElement, 'mouseover');
    console.log(linkValidate$)
    linkValidate$.subscribe(data => {
      console.log(data)
    })
  }




}
