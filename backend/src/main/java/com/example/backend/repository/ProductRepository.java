package com.example.backend.repository;

import com.example.backend.domain.Product;
import com.example.backend.dto.ProductDto;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface ProductRepository extends CrudRepository<ProductDto, Integer> {
    List<ProductDto> findAll();
}
