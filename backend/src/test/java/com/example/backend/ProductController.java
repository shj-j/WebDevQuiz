package com.example.backend;

import com.example.backend.domain.Product;
import com.example.backend.dto.ProductDto;
import com.example.backend.repository.ProductRepository;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;

import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@SpringBootTest
@AutoConfigureMockMvc
public class ProductController {
    @Autowired
    MockMvc mockMvc;

    @Autowired
    ProductRepository productRepository;

    @Test
    void shouldAddProduct() throws Exception {
        Product product = new Product();
        product.setName("可乐1");
        product.setPrice("1元/瓶");

        ObjectMapper objectMapper = new ObjectMapper();
        String request = objectMapper.writeValueAsString(product);

        mockMvc.perform(post("/products").content(request).contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isCreated());

        List<ProductDto> all = productRepository.findAll();
        assertEquals(1, all.size());

        ProductDto productDto = all.get(0);
        assertEquals(productDto.getName(), product.getName());
        assertEquals(productDto.getPrice(), product.getPrice());

    }
}
