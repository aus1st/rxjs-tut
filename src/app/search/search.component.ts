import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm } from '@angular/forms';
import { Observable, debounceTime, elementAt, filter, first, from, take, takeLast, takeWhile } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchForm!: FormGroup
  name: string = '';
  constructor() { }

  products = ['shirts', 'tshirts', 'sando', 'jackets'];
  product$: Observable<string> = from(this.products)

  ngOnInit(): void {
    this.searchForm = new FormGroup({
      name: new FormControl('search')
    })

    this.searchForm.get('name')?.valueChanges
      .pipe(
        filter((v: string) => this.filterLength(v))
      ).subscribe(data => {
        console.log(data)
      })

    // this.searchForm.get('name')?.valueChanges
    //   .pipe(

    //     take(5),
    //     debounceTime(5000),
    //   )
    //   .subscribe(data => {
    //     console.log(data);
    //   })



    // this.searchForm.get('name')?.valueChanges
    //   .pipe(
    //     takeWhile((v) => this.changeTrack(v)),
    //     debounceTime(3000),
    //   )
    //   .subscribe(data => {
    //     console.log(data);


    // this.product$.pipe(
    //   takeLast(2)
    // )
    //   .subscribe(d => {
    //     console.log(d)
    //   })

    // this.product$.pipe(
    //   first()
    // )
    //   .subscribe(d => {
    //     console.log(d)
    //   })


    // this.product$.pipe(
    //   elementAt(2)
    // )
    //   .subscribe(d => {
    //     console.log(d)
    //   })
    // })



  }

  searchValue() {

  }

  filterLength(value: string) {
    return value.length > 10 ? false : true;
  }

  changeTrack(value: string) {
    return value.length > 5 ? false : true;
  }

}
