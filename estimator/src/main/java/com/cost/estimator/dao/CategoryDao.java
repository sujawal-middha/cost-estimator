package com.cost.estimator.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cost.estimator.entity.Category;

public interface CategoryDao extends JpaRepository<Category, Integer>{

}
