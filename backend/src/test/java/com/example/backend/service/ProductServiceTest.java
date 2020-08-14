package com.example.backend.service;

import com.example.backend.domain.Product;
import com.example.backend.dto.ProductDto;
import com.example.backend.repository.ProductRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mock;
import static org.mockito.Mockito.verify;

import static org.mockito.MockitoAnnotations.initMocks;

public class ProductServiceTest {

    Product product;
    ProductService productService;
    @Mock
    ProductRepository productRepository;

    @BeforeEach
    void setUp(){
        initMocks(this);
        productService = new ProductService(productRepository);
    }

    @Test
    void shouldAddProduct(){
        //give
        Product product = new Product();
        product.setName("可乐1");
        product.setPrice("1元/瓶");

        ProductDto productDto = new ProductDto();
        productDto.setName(product.getName());
        productDto.setPrice(product.getPrice());
        //when
        productService.addProduct(product);
        //then
        verify(productRepository).save(productDto);
    }
}
