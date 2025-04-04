import { Component, OnInit } from '@angular/core';
import { Menus } from '../../models/menus';
import { TagModule } from 'primeng/tag';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { HttpClientModule } from '@angular/common/http';
import { InputTextModule } from 'primeng/inputtext';
import { MultiSelectModule } from 'primeng/multiselect';
import { SelectModule } from 'primeng/select';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { TooltipModule } from 'primeng/tooltip';
import { Rating } from 'primeng/rating';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [
    TableModule,
    InputIconModule,
    IconFieldModule,
    InputTextModule,
    MultiSelectModule,
    CommonModule,
    SelectModule,
    FormsModule,
    ButtonModule,
    TooltipModule,
    Rating,
  ],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css',
})
export class MenuComponent implements OnInit {
  //menus: Menus[] = [];
  // cols: any[] = [];
  ratingValue: number = 3;
  imgae1 =
    'data:image/jpeg;base64,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';
  constructor() {}

  cols = [
    { field: 'name', header: 'Name' },
    { field: 'price', header: 'Price' },
    { field: 'description', header: 'Description' },
    { field: 'category', header: 'Category' },
    { field: 'quantity', header: 'Quantity' },
    { field: 'image', header: 'Image' },
    { field: 'status', header: 'Status' },
  ];

  menus = [
    {
      id: 1,
      name: 'Burger',
      price: 100,
      description: 'Tasty Burger',
      image: this.imgae1,
      category: 'Fast Food',
      quantity: 150,
      status: 'Available',
    },
    {
      id: 2,
      name: 'Pizza',
      price: 200,
      description: 'Cheesy Pizza',
      image: this.imgae1,
      category: 'Fast Food',
      quantity: 50,
      status: 'Available',
    },
    {
      id: 3,
      name: 'Pasta',
      price: 150,
      description: 'Creamy Pasta',
      image: this.imgae1,
      category: 'Fast Food',
      quantity: 100,
      status: 'Available',
    },
  ];

  ngOnInit() {
    // this.cols = [
    //   // { field: 'id', header: 'ID' },
    //   { field: 'name', header: 'Name' },
    //   { field: 'price', header: 'Price' },
    //   { field: 'description', header: 'Description' },
    //   // { field: 'image', header: 'Image' },
    //   { field: 'category', header: 'Category' },
    //   { field: 'quantity', header: 'Quantity' },
    //   { field: 'status', header: 'Status' },
    // ];
    // this.menus = [
    //   {
    //     id: 1,
    //     name: 'Burger',
    //     price: 100,
    //     description: 'Tasty Burger',
    //     image: '',
    //     category: 'Fast Food',
    //     quantity: 150,
    //     status: 'Available',
    //   },
    //   {
    //     id: 2,
    //     name: 'Pizza',
    //     price: 200,
    //     description: 'Cheesy Pizza',
    //     image: '',
    //     category: 'Fast Food',
    //     quantity: 50,
    //     status: 'Available',
    //   },
    //   {
    //     id: 3,
    //     name: 'Pasta',
    //     price: 150,
    //     description: 'Creamy Pasta',
    //     image: '',
    //     category: 'Fast Food',
    //     quantity: 100,
    //     status: 'Available',
    //   },
    // ];
  }

  editingRowId: number | null = null;

  deleteProduct(id: number) {
    this.menus = this.menus.filter((menu) => menu.id !== id);
    console.log('Product deleted:', id);
  }

  editProduct(rowData: Menus) {
    this.editingRowId = rowData.id;
    console.log('Edit product:', rowData);
    // Implement edit functionality here
  }

  saveProduct(rowData: any) {
    console.log('Saved Product:', rowData);
    this.editingRowId = null; // Exit edit mode
  }

  cancelEdit() {
    this.editingRowId = null; // Exit edit mode without saving
  }
}
