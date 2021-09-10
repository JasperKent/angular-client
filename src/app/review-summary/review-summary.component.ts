import { Component } from '@angular/core';
import { BookReview } from '../services/book-review';
import { BookReviewSummaryService } from '../services/book-review-summary.service';

@Component({
  selector: 'app-review-summary',
  templateUrl: './review-summary.component.html',
  styleUrls: ['./review-summary.component.scss']
})
export class ReviewSummaryComponent  {

  get summaries():  BookReview[]{
    return this.bookReviewSummaryService.reviewSummaries;
  }

  constructor(private bookReviewSummaryService: BookReviewSummaryService) { }
}
