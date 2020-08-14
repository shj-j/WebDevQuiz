package com.example.backend.api;

import com.example.backend.domain.Product;
import com.example.backend.dto.ProductDto;
import com.example.backend.repository.ProductRepository;
import com.example.backend.service.ProductService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ProductController {

    ProductService productService;
    ProductRepository productRepository;

    public ProductController(ProductService productService, ProductRepository productRepository){
        this.productService = productService;
        this.productRepository = productRepository;
    }

    @PostMapping("/Products")
    public ResponseEntity addProduct(@RequestBody Product product){
//        productService.addProduct(product);
        ProductDto productDto = new ProductDto();
        productDto.setName(product.getName());
        productDto.setPrice(product.getPrice());
        productRepository.save(productDto);

        return ResponseEntity.created(null).build();
    }
}
