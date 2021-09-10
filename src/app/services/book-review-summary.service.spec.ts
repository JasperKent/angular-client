import { TestBed } from '@angular/core/testing';
import { BookReview } from './book-review';
import { BookReviewRepositoryService } from './book-review-repository.service';

import { BookReviewSummaryService } from './book-review-summary.service';

describe('BookReviewSummaryService', () => {
  let service: BookReviewSummaryService;

  const mockReviews = [
    {
      title: 'book-1',
      rating: 5
    },
    {
      title: 'book-1',
      rating: 1
    },
    {
      title: 'book-2',
      rating: 4
    },
  ] as BookReview[]

  const mockBookReviewRepositoryService = jasmine.createSpyObj<BookReviewRepositoryService>({
    getReviews: mockReviews
  })

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers:[
        { provide: BookReviewRepositoryService, useValue: mockBookReviewRepositoryService}
      ]
    });

    service = TestBed.inject(BookReviewSummaryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should calculate correct averages', () => {
    const summaries = service.reviewSummaries;

    expect(summaries).toHaveSize(2);
    expect(summaries[0].title).toBe('book-1');
    expect(summaries[0].rating).toBe(3);
    expect(summaries[1].title).toBe('book-2');
    expect(summaries[1].rating).toBe(4);
  });
});
