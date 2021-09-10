import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllReviewsComponent } from './all-reviews/all-reviews.component';
import { ReviewSummaryComponent } from './review-summary/review-summary.component';

const routes: Routes = [
  {
    path: '',
    component: AllReviewsComponent
  },
  {
    path: 'all',
    component: AllReviewsComponent
  },
  {
    path: 'summary',
    component: ReviewSummaryComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
