import { Component, Input } from '@angular/core';
import { BucketList } from '../home/home.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-bucket-list',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="create-guild">
      <h1>Bucket List:</h1>

      @if (bucketlist.todos.length > 0) {
      <div class="create-guild-container">
        @for(todo of bucketlist.todos; track todo) {
        <div class="create-guild-card">
          <h2>To do:</h2>
          <p>{{ todo.name }}</p>
          <h3>Description:</h3>
          <p>{{ todo.description }}</p>


        </div>
        }
      </div>

      } @else {
      <p>No todos have been created yet</p>
      }
    </div>
  `,
  styles: `
.create-guild-form-container {
display: flex;
flex-direction: column;
width: 80%;
align-items: center;
}

.create-guild-form, .feedback {
width: 100%;
margin-bottom: 20px;
}

.create-guild-container {
display: flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: space-between;
gap: 20px;
}

.create-guild-card {
flex: 0 0 calc(50% - 20px);
box-sizing: border-box;
border: 1px solid #ccc;
border-radius: 5px;
padding: 20px;
margin: 10px 0;
box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
`,
})

export class BucketListComponent {
  @Input() bucketlist!: BucketList;

}
