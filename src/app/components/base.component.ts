import {Injectable, OnDestroy} from "@angular/core";
import {Subject} from "rxjs";

@Injectable()
export class BaseComponent implements OnDestroy {

  /*
  When component extending this class is destroyed this subject emits (empty) value to all subscribers (subscribed with 'takeUntil')
  thus all subscriptions are cleaned up.
   */
  ngUnsubscribe: Subject<any> = new Subject<any>();

  ngOnDestroy() {
    this.ngUnsubscribe.next('');
    this.ngUnsubscribe.complete();
  }
}
