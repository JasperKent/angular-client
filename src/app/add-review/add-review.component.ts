import { Component, EventEmitter, Output } from '@angular/core';
import { BookReviewRepositoryService } from '../services/book-review-repository.service';

@Component({
  selector: 'app-add-review',
  templateUrl: './add-review.component.html',
  styleUrls: ['./add-review.component.scss']
})
export class AddReviewComponent {

  @Output() reviewAdded = new EventEmitter<any>();

  title = '';
  rating = 5;

  constructor(private bookReviewRepositoryService: BookReviewRepositoryService) { }

  addReview() {
      this.bookReviewRepositoryService.addReview({title: this.title, rating: this.rating});
      this.reviewAdded.emit(null);
  }
}
