import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BookReview } from './book-review';

@Injectable({
  providedIn: 'root'
})
export class BookReviewRepositoryService {

  private reviews: BookReview[] = [];

  private loadReviews(): void {
    this.httpClient.get<BookReview[]>('https://localhost:5001/BookReview')
      .subscribe (result => this.reviews = result);
  }

  constructor (private httpClient: HttpClient){
    this.loadReviews();
  }

  getReviews (): BookReview[] {
    return this.reviews;
  }

  addReview (review: BookReview): void{
    this.httpClient.post<any>('https://localhost:5001/BookReview', review)
      .subscribe(result => this.loadReviews());
  }
}

