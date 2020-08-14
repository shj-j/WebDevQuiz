package com.example.backend.service;

import com.example.backend.domain.Product;
import com.example.backend.dto.ProductDto;
import com.example.backend.repository.ProductRepository;
import org.springframework.stereotype.Service;

@Service
public class ProductService {
    private ProductRepository productRepository;

    public ProductService(ProductRepository productRepository){
        this.productRepository = productRepository;
    }

    public void addProduct(Product product){
        ProductDto productDto = new ProductDto();
        productDto.setName(product.getName());
        productDto.setPrice(product.getPrice());

        productRepository.save(productDto);
    }
}
