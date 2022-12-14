import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/common/product';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list-grid.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Product[] = [];
  currentCategoryId: number = 1;
  currentCategoryName: string ;
  previousCategoryId: number = 1;
  searchMode : boolean = false;

  thePageNumber: number = 1;
  thePageSize: number = 10;
  theTotalElements: number = 0;


  constructor(private productService: ProductService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(() => {
      this.listProducts();
    });
  }

  listProducts() {
    this.searchMode = this.route.snapshot.paramMap.has('keyword');

    if(this,this.searchMode){
      this,this.handleSearchProducts();
    }
    else{
      this.handleListProducts();
    }
    

    
  }

  handleSearchProducts(){
    const theKeywords: string = this.route.snapshot.paramMap.get('keyword');
  this.productService.searchProducts(theKeywords).subscribe(
    data => {
      this.products =data;
    }
  )  }

  handleListProducts(){
    // check if "id" parameter is available
    const hasCategoryId: boolean = this.route.snapshot.paramMap.has('id');

    if (hasCategoryId) {
      // get the "id" param string. convert string to a number using the "+" symbol
      this.currentCategoryId = +this.route.snapshot.paramMap.get('id');

      // get the "name" param string
      this.currentCategoryName = this.route.snapshot.paramMap.get('name');
    }
    else {
      // not category id available ... default to category id 1
      this.currentCategoryId = 1;
      this.currentCategoryName = 'Books';
    }

    //
    
    // Check if we have a different category than previous
    //Note: Angular will reuse a component if it is currently being viewed
    //
    // if we have a different category id than previous
    // then set thePAgeNumber back to 1
    // now get the products for the given category id
    if(this.previousCategoryId != this.currentCategoryId){
      this.thePageNumber = 1;
    }
    this.previousCategoryId = this.currentCategoryId;
    console.log(`currentCategoryId=${this.currentCategoryId}, thePageNumber ${this.thePageNumber}`)

    this.productService.getProductListPaginate(this.thePageNumber-1,
                                               this.thePageSize,
                                               this.currentCategoryId)
                                               .subscribe(
                                          data => {
                                            this.products = data._embedded.products;
                                            this.thePageNumber = data.page.number + 1;
                                            this.thePageSize = data.page.size;
                                            this.theTotalElements = data.page.totalElement;
                                          }
    )
  }

}