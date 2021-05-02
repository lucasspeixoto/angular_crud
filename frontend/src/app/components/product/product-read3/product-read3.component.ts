import { ProductService } from './../product.service';
import { Product } from './../product.model';
import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-product-read3',
  templateUrl: './product-read3.component.html',
  styleUrls: ['./product-read3.component.css']
})

export class ProductRead3Component implements OnInit, AfterViewInit {

  products!: Product[]


  public displayedColumns = ['id', 'name', 'price', 'storage', 'action']
  public dataSource = new MatTableDataSource<Product>();

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private productService: ProductService,
  ) { }

  ngOnInit(): void {
    this.productService.read().subscribe(products => {
      this.products = products
      this.dataSource.data = this.products
    })
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator
  }

  applyFilter(filterValue: any) {
    this.dataSource.filter = filterValue.trim().toLocaleLowerCase()

  }

}
