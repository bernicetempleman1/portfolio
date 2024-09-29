import { Component, Input } from '@angular/core';
import { BucketList } from '../home/home.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-bucket-list',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="bucket-list">
      <h1>Bucket List:</h1>

      @if (bucketlist.todos.length > 0) {
        <ul>
          @for (todo of bucketlist.todos; track todo) {
          <li>
            <strong
              >{{ todo.name }} is a {{ todo.description }}
            </strong>
            <br />
          </li>
          }
        </ul>
        } @else {
        <p>No todos have been created yet</p>
        }
    </div>
  `,
  styles: `
  .bucket-list {
        flex: 1;
      }
li {
margin-bottom: 10px;
padding: 5px;
}
`,
})

export class BucketListComponent {
  @Input() bucketlist!: BucketList;

}
